import React from 'react';
import { useSearchParams } from 'react-router';
import { PROTOCOLS } from '../../data/protocols';
import { SegmentedTabs, type TabItem } from '../ui/SegmentedTabs';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import { SectionTitle } from '../ui/SectionTitle';
import { Reveal } from '../ui/Reveal';
import styles from './ProtocolSelector.module.css';
import { DOCTORS } from '../../data/professionals';

export const ProtocolSelector: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openAppointment } = useAppointmentModal();
  const doctor = DOCTORS.find((d) => d.id === 'dr-glauber-marinho') || DOCTORS[1];

  const currentTab = searchParams.get('protocolo') === 'homens' ? 'homens' : 'mulheres';

  const tabs: TabItem[] = [
    {
      id: 'mulheres',
      label: '♀ Emagrecimento & Menopausa (Mulheres)',
      badge: '30 a 50 anos',
    },
    {
      id: 'homens',
      label: '♂ Reposição Hormonal (Homens)',
      badge: '30 a 50 anos',
    },
  ];

  const handleTabChange = (tabId: string) => {
    setSearchParams({ protocolo: tabId }, { replace: true });
  };

  const activeProtocol = PROTOCOLS.find((p) => p.id === currentTab) || PROTOCOLS[0];

  return (
    <section id="protocolos" className={styles.section}>
      <div className="container">
        <Reveal animation="fadeUp">
          <SectionTitle
            badge="Protocolos Médicos Especializados"
            title="Escolha o Protocolo Ideal Para o Seu Momento"
            subtitle="Planos terapêuticos customizados com acompanhamento contínuo e fundamentação bioquímica de ponta."
            align="center"
          />
        </Reveal>

        {/* Seletor de protocolo */}
        <div className={styles.tabsWrapper}>
          <SegmentedTabs
            tabs={tabs}
            activeTab={currentTab}
            onChange={handleTabChange}
          />
        </div>

        {/* Display do protocolo ativo */}
        <div className={styles.cardWrapper}>
          <div className={`luxury-card ${styles.protocolCard}`} key={activeProtocol.id}>
            <div className={styles.grid}>
              {/* Detalhes do protocolo */}
              <div className={styles.details}>
                <div className={styles.header}>
                  <span className="gold-badge">{activeProtocol.genderLabel}</span>
                  <h3 className={styles.title}>{activeProtocol.title}</h3>
                  <p className={styles.tagline}>{activeProtocol.tagline}</p>
                </div>

                {/* Público-alvo */}
                <div className={styles.audienceBox}>
                  <strong>Público-alvo:</strong> {activeProtocol.targetAudience}
                </div>

                {/* Objetivo do protocolo */}
                <div className={styles.goalBox}>
                  <p className={styles.goalText}>{activeProtocol.goal}</p>
                  <p className={styles.disclaimer}>{activeProtocol.disclaimer}</p>
                </div>

                {/* Indicações clínicas */}
                <div className={styles.indicationsSection}>
                  <h4 className={styles.sectionHeading}>
                    {activeProtocol.clinicalIndicationsTitle}:
                  </h4>
                  <div className={styles.chipsGrid}>
                    {activeProtocol.clinicalIndications.map((ind, idx) => (
                      <span key={idx} className={styles.chip}>
                        <span className={styles.bullet}>•</span> {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Itens incluídos */}
                <div className={styles.featuresSection}>
                  <h4 className={styles.sectionHeading}>
                    {activeProtocol.featuresTitle}:
                  </h4>
                  <ul className={styles.featuresList}>
                    {activeProtocol.features.map((feat, idx) => (
                      <li key={idx}>
                        <span className={styles.featureNumber}>0{idx + 1}</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de CTA */}
                <div className={styles.ctaWrapper}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() =>
                      openAppointment({
                        doctor: 'dr-glauber-marinho',
                        interest: `Protocolo: ${activeProtocol.title}`,
                      })
                    }
                  >
                    Agendar Avaliação para este Protocolo
                  </Button>
                </div>
              </div>

              {/* Coluna direita: Foto do protocolo e presença do médico */}
              <div className={styles.media}>
                <div className={styles.imageFrame}>
                  <div className={styles.frameBorder} />
                  <img
                    src={activeProtocol.image}
                    alt={`Dr. Glauber Marinho - ${activeProtocol.title}`}
                    className={styles.image}
                    loading="lazy"
                    width={400}
                    height={480}
                  />
                  <div className={styles.doctorBadge}>
                    <span className={styles.docName}>{doctor.prefix + ' ' + doctor.name}</span>
                    <span className={styles.docCrm}>{doctor.crm}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
