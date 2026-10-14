import React from 'react';
import { useAppointmentModal } from '../../context/AppointmentContext';
import { Modal } from '../ui/Modal';
import { AppointmentForm } from './AppointmentForm';

export const AppointmentModal: React.FC = () => {
  const { isOpen, selectedDoctor, selectedInterest, closeAppointment } =
    useAppointmentModal();

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeAppointment}
      title="Agende sua Consulta Exclusiva"
      subtitle="Preencha o formulário e nossa equipe médica entrará em contato para alinhar os detalhes."
      maxWidth="680px"
    >
      <AppointmentForm
        initialDoctor={selectedDoctor}
        initialInterest={selectedInterest}
      />
    </Modal>
  );
};
