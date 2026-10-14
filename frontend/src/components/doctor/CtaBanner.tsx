import React from 'react';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import type { DoctorId } from '../../types';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  doctorId: DoctorId;
  doctorName: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  doctorId,
  doctorName,
}) => {
  const { openAppointment } = useAppointmentModal();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.content}>
            <span className="gold-badge">Atendimento Exclusivo</span>
            <h3 className={styles.title}>
              Deseja iniciar seu acompanhamento com {doctorName}?
            </h3>
            <p className={styles.desc}>
              Nossa equipe de recepção está pronta para alinhar sua disponibilidade e tirar todas as dúvidas sobre sua primeira consulta.
            </p>
          </div>
          <div className={styles.actions}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => openAppointment({ doctor: doctorId })}
            >
              Solicitar Agendamento
            </Button>
            <Button
              to="/"
              variant="secondary"
              size="lg"
            >
              Conhecer a Clínica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
