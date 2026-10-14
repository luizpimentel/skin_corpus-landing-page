import React from 'react';
import { DERMA_METHOD_STEPS } from '../../data/treatments';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './DermaMethod.module.css';

export const DermaMethod: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Metodologia Autoral Exclusiva"
            title={
              <>
                O Método <span className="gold-text">D.E.R.M.A.</span>
              </>
            }
            subtitle="Uma abordagem ética, acolhedora e altamente técnica para quem busca rejuvenescimento autêntico sem congelar a expressão ou seguir modismos."
            align="center"
          />
        </Reveal>

        <div className={styles.methodGrid}>
          {DERMA_METHOD_STEPS.map((step, index) => (
            <Reveal key={step.letter} animation="fadeUp" delayMs={index * 120}>
              <div className={`luxury-card ${styles.stepCard}`}>
                <div className={styles.letterWrapper}>
                  <span className={styles.letter}>{step.letter}</span>
                  <div className={styles.stepNumber}>0{index + 1}</div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal animation="fadeUp" delayMs={600}>
          <div className={styles.highlightBanner}>
            <div className={styles.bannerIcon}>✨</div>
            <div>
              <h4 className={styles.bannerTitle}>Por que a primeira consulta tem 2 horas?</h4>
              <p className={styles.bannerText}>
                Diferente de consultas rápidas e padronizadas, a Dra. Fernanda reserva duas horas inteiras para
                ouvir suas expectativas, examinar minuciosamente a derme e entregar um plano completo com cronograma,
                indicações precisas e transparência total de investimento.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
