import React from 'react';
import { CLINIC_DATA } from '../../data/clinic';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import { Reveal } from '../ui/Reveal';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  const { openAppointment } = useAppointmentModal();

  const differentials = [
    {
      title: 'Método de Cuidado 360°',
      desc: 'Integração real entre dermatologia estética de alta precisão e saúde metabólico-hormonal.',
    },
    {
      title: 'Consultas com Tempo Dedicado',
      desc: 'Primeira consulta de 1 a 2 horas, permitindo diagnóstico minucioso sem pressa.',
    },
    {
      title: 'Tecnologias Padrão Ouro',
      desc: 'Equipamentos modernos certificados (Ultraformer MPT, Laser Etherea) e injetáveis premium.',
    },
    {
      title: 'Ambiente Exclusivo & Privativo',
      desc: 'Localização no EUROPE Offices com segurança, conforto e estacionamento com manobrista.',
    },
  ];

  return (
    <section id="experiencia" className={styles.section}>
      <div className={`container ${styles.container}`}>
        {/* Left Column: Story & Differentials */}
        <div className={styles.textContent}>
          <Reveal animation="fadeUp">
            <span className="gold-badge">Estrutura & Cuidado</span>
            <h2 className={styles.title}>
              A Experiência <span className="gold-text">SkinCorpus</span>
            </h2>
            <p className={styles.description}>
              Criamos um espaço onde a medicina de ponta se une ao acolhimento e à discrição.
              Nosso objetivo é proporcionar um ambiente seguro onde cada detalhe foi pensado para
              que você se sinta cuidado do primeiro contato ao pós-procedimento.
            </p>
          </Reveal>

          <div className={styles.differentialsList}>
            {differentials.map((diff, index) => (
              <Reveal key={diff.title} animation="fadeUp" delayMs={index * 100}>
                <div className={styles.diffItem}>
                  <div className={styles.diffIcon}>✓</div>
                  <div>
                    <h4 className={styles.diffTitle}>{diff.title}</h4>
                    <p className={styles.diffDesc}>{diff.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal animation="fadeUp" delayMs={400}>
            <div className={styles.ctaWrapper}>
              <Button
                variant="primary"
                size="md"
                onClick={() => openAppointment()}
              >
                Conhecer a Clínica na Barra
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right Column: 3 Staggered Ambience Photos */}
        <div className={styles.gallery}>
          <Reveal animation="scaleUp">
            <div className={styles.mainPhotoWrapper}>
              <img
                src={CLINIC_DATA.images.clinicAmbience[0].url}
                alt={CLINIC_DATA.images.clinicAmbience[0].alt}
                className={styles.mainPhoto}
                loading="lazy"
                width={500}
                height={340}
              />
              <span className={styles.photoCaption}>
                {CLINIC_DATA.images.clinicAmbience[0].title}
              </span>
            </div>
          </Reveal>

          <div className={styles.secondaryPhotos}>
            <Reveal animation="scaleUp" delayMs={150}>
              <div className={styles.subPhotoWrapper}>
                <img
                  src={CLINIC_DATA.images.clinicAmbience[1].url}
                  alt={CLINIC_DATA.images.clinicAmbience[1].alt}
                  className={styles.subPhoto}
                  loading="lazy"
                  width={240}
                  height={180}
                />
              </div>
            </Reveal>

            <Reveal animation="scaleUp" delayMs={250}>
              <div className={styles.subPhotoWrapper}>
                <img
                  src={CLINIC_DATA.images.clinicAmbience[2].url}
                  alt={CLINIC_DATA.images.clinicAmbience[2].alt}
                  className={styles.subPhoto}
                  loading="lazy"
                  width={240}
                  height={180}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
