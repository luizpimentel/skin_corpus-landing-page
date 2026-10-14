import React from 'react';
import { FAQ_ITEMS } from '../../data/faq';
import { Accordion } from '../ui/Accordion';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './Faq.module.css';

export const Faq: React.FC = () => {
  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Perguntas Frequentes"
            subtitle="Respostas claras sobre nossas consultas, metodologias médicas, tempo de atendimento e localização."
            align="center"
          />
        </Reveal>

        <div className={styles.wrapper}>
          <Reveal animation="fadeUp" delayMs={150}>
            <Accordion items={FAQ_ITEMS} allowMultiple={false} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
