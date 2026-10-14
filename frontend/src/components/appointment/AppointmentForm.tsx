import React from 'react';
import { useAppointmentForm } from '../../hooks/useAppointmentForm';
import { Button } from '../ui/Button';
import type { DoctorId } from '../../types';
import styles from './AppointmentForm.module.css';

interface AppointmentFormProps {
  initialDoctor?: DoctorId | '';
  initialInterest?: string;
  onSuccess?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialDoctor = '',
  initialInterest = '',
  onSuccess,
}) => {
  const {
    values,
    errors,
    status,
    serverError,
    createdAppointment,
    handleChange,
    handleSubmit,
    resetForm,
  } = useAppointmentForm({
    initialDoctor,
    initialInterest,
    onSuccess: () => {
      onSuccess?.();
    },
  });

  const todayStr = new Date().toISOString().split('T')[0];

  if (status === 'success' && createdAppointment) {
    return (
      <div className={styles.successState}>
        <div className={styles.successBadge}>✓</div>
        <h3 className={styles.successTitle}>Solicitação Enviada com Sucesso!</h3>
        <p className={styles.successText}>
          Olá, <strong>{createdAppointment.name}</strong>. Recebemos sua solicitação para{' '}
          <strong>{createdAppointment.doctor === 'dra-fernanda-almeida' ? 'Dra. Fernanda Almeida' : 'Dr. Glauber Marinho'}</strong>{' '}
          ({createdAppointment.interest}).
        </p>
        <div className={styles.appointmentSummary}>
          <div className={styles.summaryItem}>
            <span>Data preferencial:</span>
            <strong>{createdAppointment.preferredDate}</strong>
          </div>
          <div className={styles.summaryItem}>
            <span>Período:</span>
            <strong>{createdAppointment.preferredPeriod === 'MANHA' ? 'Manhã' : 'Tarde'}</strong>
          </div>
          <div className={styles.summaryItem}>
            <span>Status:</span>
            <strong className={styles.statusPendente}>
              {createdAppointment.status === 'PENDENTE'
                ? 'Pendente'
                : createdAppointment.status === 'CONFIRMADO'
                  ? 'Confirmado'
                  : 'Cancelado'}
            </strong>
          </div>
        </div>
        <p className={styles.successNote}>
          Nossa equipe de recepção da Barra da Tijuca entrará em contato pelo telefone{' '}
          <strong>{createdAppointment.phone}</strong> para confirmar o horário exato da sua consulta.
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={resetForm}
          className={styles.newAppBtn}
        >
          Fazer Outro Agendamento
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {serverError && (
        <div className={styles.alertError} role="alert">
          {serverError}
        </div>
      )}

      {/* Row: Nome Completo */}
      <div className={styles.formGroup}>
        <label htmlFor="app-name" className={styles.label}>
          Nome Completo <span className={styles.required}>*</span>
        </label>
        <input
          id="app-name"
          type="text"
          placeholder="Ex: Priscilla Froquet"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
        />
        {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
      </div>

      {/* Row 2: Email & Telefone */}
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="app-email" className={styles.label}>
            E-mail <span className={styles.required}>*</span>
          </label>
          <input
            id="app-email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          />
          {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="app-phone" className={styles.label}>
            Telefone / WhatsApp <span className={styles.required}>*</span>
          </label>
          <input
            id="app-phone"
            type="tel"
            placeholder="(21) 99999-9999"
            value={values.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          />
          {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
        </div>
      </div>

      {/* Row 3: Médico & Interesse */}
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="app-doctor" className={styles.label}>
            Profissional <span className={styles.required}>*</span>
          </label>
          <select
            id="app-doctor"
            value={values.doctor}
            onChange={(e) => {
              handleChange('doctor', e.target.value as DoctorId);
              handleChange('interest', '');
            }}
            className={`${styles.select} ${errors.doctor ? styles.inputError : ''}`}
          >
            <option value="">Selecione o médico(a)...</option>
            <option value="dra-fernanda-almeida">Dra. Fernanda Almeida (Dermatologia Estética)</option>
            <option value="dr-glauber-marinho">Dr. Glauber Marinho (Endocrinologia & Hormônios)</option>
          </select>
          {errors.doctor && <span className={styles.errorMsg}>{errors.doctor}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="app-interest" className={styles.label}>
            Tratamento ou Protocolo <span className={styles.required}>*</span>
          </label>
          <select
            id="app-interest"
            value={values.interest}
            onChange={(e) => handleChange('interest', e.target.value)}
            className={`${styles.select} ${errors.interest ? styles.inputError : ''}`}
          >
            <option value="">Selecione a área de interesse...</option>
            {values.doctor === 'dra-fernanda-almeida' && (
              <>
                <option value="Método D.E.R.M.A. (Avaliação Completa 2h)">Método D.E.R.M.A. (Avaliação Completa 2h)</option>
                <option value="Ultraformer MPT (Ultrassom Microfocado)">Ultraformer MPT (Ultrassom Microfocado)</option>
                <option value="Bioestimuladores de Colágeno">Bioestimuladores de Colágeno</option>
                <option value="Toxina Botulínica Natural">Toxina Botulínica Natural</option>
                <option value="Preenchimento com Ácido Hialurônico">Preenchimento com Ácido Hialurônico</option>
                <option value="Laser Etherea (Manchas e Viço)">Laser Etherea (Manchas e Viço)</option>
              </>
            )}
            {values.doctor === 'dr-glauber-marinho' && (
              <>
                <option value="Protocolo Emagrecimento & Menopausa (Mulheres)">Protocolo Emagrecimento & Menopausa (Mulheres)</option>
                <option value="Protocolo Reposição Hormonal Masculina">Protocolo Reposição Hormonal Masculina</option>
                <option value="Avaliação Metabólica e Nutrologia">Avaliação Metabólica e Nutrologia</option>
                <option value="Terapia Combinada para Longevidade">Terapia Combinada para Longevidade</option>
              </>
            )}
            {!values.doctor && (
              <>
                <option value="Rejuvenescimento Facial e Corporal">Rejuvenescimento Facial e Corporal</option>
                <option value="Emagrecimento e Equilíbrio Hormonal">Emagrecimento e Equilíbrio Hormonal</option>
                <option value="Primeira Consulta Diagnóstica">Primeira Consulta Diagnóstica</option>
              </>
            )}
          </select>
          {errors.interest && <span className={styles.errorMsg}>{errors.interest}</span>}
        </div>
      </div>

      {/* Row 4: Data Preferencial & Período */}
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="app-date" className={styles.label}>
            Data Preferencial <span className={styles.required}>*</span>
          </label>
          <input
            id="app-date"
            type="date"
            min={todayStr}
            value={values.preferredDate}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            className={`${styles.input} ${errors.preferredDate ? styles.inputError : ''}`}
          />
          {errors.preferredDate && <span className={styles.errorMsg}>{errors.preferredDate}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Período Preferencial <span className={styles.required}>*</span>
          </label>
          <div className={styles.periodOptions}>
            <label className={`${styles.periodBtn} ${values.preferredPeriod === 'MANHA' ? styles.periodActive : ''}`}>
              <input
                type="radio"
                name="preferredPeriod"
                value="MANHA"
                checked={values.preferredPeriod === 'MANHA'}
                onChange={() => handleChange('preferredPeriod', 'MANHA')}
              />
              Manhã (08h às 12h)
            </label>
            <label className={`${styles.periodBtn} ${values.preferredPeriod === 'TARDE' ? styles.periodActive : ''}`}>
              <input
                type="radio"
                name="preferredPeriod"
                value="TARDE"
                checked={values.preferredPeriod === 'TARDE'}
                onChange={() => handleChange('preferredPeriod', 'TARDE')}
              />
              Tarde (13h às 19h)
            </label>
          </div>
          {errors.preferredPeriod && <span className={styles.errorMsg}>{errors.preferredPeriod}</span>}
        </div>
      </div>

      {/* Mensagem Opcional */}
      <div className={styles.formGroup}>
        <label htmlFor="app-message" className={styles.label}>
          Observações ou queixa principal (Opcional)
        </label>
        <textarea
          id="app-message"
          rows={3}
          placeholder="Conte brevemente o que você gostaria de melhorar ou dúvidas específicas..."
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={styles.textarea}
        />
      </div>

      {/* LGPD Consent */}
      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => handleChange('consent', e.target.checked)}
            className={styles.checkbox}
          />
          <span>
            Concordo com o tratamento dos meus dados para contato e agendamento pela clínica SkinCorpus, de acordo com a LGPD.
          </span>
        </label>
        {errors.consent && <span className={styles.errorMsg}>{errors.consent}</span>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={status === 'submitting'}
        className={styles.submitBtn}
      >
        {status === 'submitting' ? 'Enviando Solicitação...' : 'Confirmar Solicitação de Agendamento'}
      </Button>

      <p className={styles.disclaimer}>
        🔒 Seus dados são protegidos por sigilo médico e confidencialidade.
      </p>
    </form>
  );
};
