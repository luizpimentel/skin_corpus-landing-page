import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Carousel } from '../ui/Carousel';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Depoimentos Reais"
            title="O Que Nossos Pacientes Dizem"
            subtitle="Histórias de transformação, resgate de autoestima e saúde com acompanhamento ético e humanizado."
            align="center"
          />
        </Reveal>

        <Reveal animation="scaleUp" delayMs={150}>
          <Carousel items={TESTIMONIALS} autoPlayInterval={7000} />
        </Reveal>
      </div>
    </section>
  );
};
