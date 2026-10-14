import React from 'react';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import { CLINIC_DATA, getWhatsAppLink } from '../../data/clinic';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { openAppointment } = useAppointmentModal();
  const whatsappUrl = getWhatsAppLink(
    'Olá! Estive no site da SkinCorpus e gostaria de agendar uma avaliação'
  );

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Coluna da esquerda: Manchetes e CTA */}
        <div className={styles.heroContent}>
          <div className={styles.badgeWrapper}>
            <span className="gold-badge">Clínica Médica Premium • Barra da Tijuca</span>
          </div>

          <h1 className={styles.title}>
            Sua saúde e beleza cuidadas de{' '}
            <span className="gold-text">dentro para fora.</span>
          </h1>

          <p className={styles.subtitle}>
            Clínica médica especializada em rejuvenescimento facial e corporal com naturalidade,
            endocrinologia, emagrecimento sustentável e reposição hormonal personalizada.
          </p>

          <div className={styles.ctaGroup}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => openAppointment()}
              className={styles.mainCta}
            >
              Agendar Minha Avaliação
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={whatsappUrl}
              external
              className={styles.whatsappCta}
              leftIcon={
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.031 2C6.505 2 2 6.506 2 12.031c0 1.907.535 3.69 1.464 5.215L2.08 22l4.908-1.343a9.988 9.988 0 005.043 1.374h.004c5.526 0 10.031-4.506 10.031-10.031 0-2.68-1.043-5.198-2.936-7.091A9.972 9.972 0 0012.031 2zm0 18.358h-.003a8.31 8.31 0 01-4.225-1.155l-.303-.18-3.136.859.865-3.06-.197-.315a8.307 8.307 0 01-1.31-4.476c0-4.596 3.738-8.334 8.334-8.334 2.227 0 4.321.867 5.895 2.441a8.286 8.286 0 012.439 5.895c0 4.596-3.738 8.33-8.334 8.33zm4.568-6.242c-.25-.125-1.482-.731-1.712-.814-.23-.083-.397-.125-.564.125-.167.25-.647.814-.793.98-.146.167-.292.188-.542.063-.25-.125-1.055-.389-2.01-1.24a7.483 7.483 0 01-1.39-1.724c-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438s-.563-1.356-.771-1.856c-.203-.487-.41-.421-.564-.429-.146-.008-.313-.01-.479-.01s-.438.063-.667.313c-.23.25-.876.855-.876 2.086 0 1.231.897 2.42 1.022 2.587.125.167 1.764 2.693 4.275 3.777.597.258 1.064.412 1.428.528.6.191 1.147.164 1.579.1.481-.072 1.482-.605 1.69-1.189.208-.584.208-1.085.146-1.189-.062-.104-.229-.167-.479-.292z" />
                </svg>
              }
            >
              Atendimento WhatsApp
            </Button>
          </div>

          {/* Lista de Verificação de Destaques */}
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>1ª consulta de até 2 horas</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Método D.E.R.M.A. & Terapia Combinada</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.checkIcon}>✓</span>
              <span>Estacionamento privativo no EUROPE Offices</span>
            </div>
          </div>
        </div>

        {/* Coluna da direita: Foto dos médicos em moldura dourada */}
        <div className={styles.heroMedia}>
          <div className={styles.imageFrame}>
            <div className={styles.frameBorder} />
            <img
              src={CLINIC_DATA.images.heroDoctors}
              alt="Dra. Fernanda Almeida e Dr. Glauber Marinho na clínica SkinCorpus"
              className={styles.heroImg}
              width={420}
              height={450}
              loading="eager"
              fetchPriority="high"
            />
            <div className={styles.floatingCard}>
              <span className={styles.floatingRole}>Direção Médica</span>
              <strong className={styles.floatingNames}>Dra. Fernanda & Dr. Glauber</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
