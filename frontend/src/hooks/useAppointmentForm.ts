import { useState, useCallback, useEffect } from 'react';
import type {
  AppointmentFormValues,
  AppointmentResponse,
  DoctorId,
} from '../types';
import { createAppointment } from '../services/api';

export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) {
    return digits ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

interface UseAppointmentFormProps {
  initialDoctor?: DoctorId | '';
  initialInterest?: string;
  onSuccess?: (appointment: AppointmentResponse) => void;
}

// Gerencia o estado do formulário e a lógica de submissão
export function useAppointmentForm({
  initialDoctor = '',
  initialInterest = '',
  onSuccess,
}: UseAppointmentFormProps = {}) {
  const [values, setValues] = useState<AppointmentFormValues>({
    name: '',
    email: '',
    phone: '',
    doctor: initialDoctor,
    interest: initialInterest,
    preferredDate: '',
    preferredPeriod: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const [createdAppointment, setCreatedAppointment] = useState<AppointmentResponse | null>(null);

  // Sincroniza valores iniciais quando eles mudam externamente (ex: clique CTA)
  useEffect(() => {
    if (initialDoctor) {
      setValues((prev) => ({ ...prev, doctor: initialDoctor }));
    }
  }, [initialDoctor]);

  useEffect(() => {
    if (initialInterest) {
      setValues((prev) => ({ ...prev, interest: initialInterest }));
    }
  }, [initialInterest]);

  const handleChange = useCallback(
    (field: keyof AppointmentFormValues, value: any) => {
      let formattedValue = value;
      if (field === 'phone') {
        formattedValue = maskPhone(value);
      }

      setValues((prev) => ({
        ...prev,
        [field]: formattedValue,
      }));

      // Limpa erro quando começa a digitar
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors]
  );

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!values.name.trim() || values.name.trim().length < 3) {
      newErrors.name = 'Informe seu nome completo (mínimo 3 caracteres).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    const phoneDigits = values.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.phone = 'Informe um número de telefone com DDD válido.';
    }

    if (!values.doctor) {
      newErrors.doctor = 'Selecione o profissional desejado.';
    }

    if (!values.interest.trim()) {
      newErrors.interest = 'Selecione o tratamento ou protocolo de interesse.';
    }

    if (!values.preferredDate) {
      newErrors.preferredDate = 'Selecione uma data preferencial.';
    } else {
      const selectedDate = new Date(values.preferredDate + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'A data preferencial deve ser hoje ou uma data futura.';
      }
    }

    if (!values.preferredPeriod) {
      newErrors.preferredPeriod = 'Selecione o período de preferência (Manhã ou Tarde).';
    }

    if (!values.consent) {
      newErrors.consent = 'É necessário concordar com os termos de privacidade para continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const DOCTOR_NAME: Record<string, string> = {
    'dra-fernanda-almeida': 'Dra. Fernanda Almeida',
    'dr-glauber-marinho': 'Dr. Glauber Marinho',
  };

  // Envia o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setStatus('submitting');

    try {
      const doctorName = DOCTOR_NAME[values.doctor] || values.doctor;
      const formattedPeriod = values.preferredPeriod === 'MANHA' ? 'Manhã' : 'Tarde';
      const formattedDate = values.preferredDate ? values.preferredDate.split('-').reverse().join('/') : values.preferredDate;

      const response = await createAppointment({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        doctor: doctorName,
        interest: values.interest.trim(),
        preferredDate: formattedDate,
        preferredPeriod: formattedPeriod,
        message: values.message.trim() || undefined,
        consent: values.consent,
      });

      setCreatedAppointment(response);
      setStatus('success');
      onSuccess?.(response);
    } catch (err: any) {
      setStatus('error');
      setServerError(
        err?.message || 'Ocorreu um erro ao enviar a solicitação. Tente novamente.'
      );
      if (err?.fieldErrors) {
        setErrors(err.fieldErrors);
      }
    }
  };

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      phone: '',
      doctor: initialDoctor || '',
      interest: initialInterest || '',
      preferredDate: '',
      preferredPeriod: '',
      message: '',
      consent: false,
    });
    setErrors({});
    setStatus('idle');
    setServerError(null);
    setCreatedAppointment(null);
  };

  return {
    values,
    errors,
    status,
    serverError,
    createdAppointment,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
