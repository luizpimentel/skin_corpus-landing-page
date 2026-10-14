import React from 'react';
import { CLINIC_DATA } from '../../data/clinic';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className={styles.footer}>
      {/* Welcome Banner strip */}
      <div className={styles.welcomeBanner}>
        <div className="container">
          <p className={styles.welcomeText}>
            “{CLINIC_DATA.welcomeMessage}”
          </p>
        </div>
      </div>

      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1: Map */}
        <div className={styles.mapColumn}>
          <h4 className={styles.colTitle}>Localização Privilegiada</h4>
          <p className={styles.mapDesc}>
            {CLINIC_DATA.address.fullFormatted}
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src={CLINIC_DATA.maps.embedUrl}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização SkinCorpus no Google Maps"
            />
          </div>
          <a
            href={CLINIC_DATA.maps.directLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Abrir rotas no Google Maps →
          </a>
        </div>

        {/* Column 2: Contato & Redes */}
        <div className={styles.contactColumn}>
          <h4 className={styles.colTitle}>Contato & Canais</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon}>📍</span>
              <span>
                {CLINIC_DATA.address.street} – {CLINIC_DATA.address.complement}
                <br />
                {CLINIC_DATA.address.neighborhood}, {CLINIC_DATA.address.city} – {CLINIC_DATA.address.state}
                <br />
                CEP: {CLINIC_DATA.address.cep}
              </span>
            </li>
            <li>
              <span className={styles.icon}>
                <svg width="30" height="30" fill="currentColor">
                  <path d="M12.031 2C6.505 2 2 6.506 2 12.031c0 1.907.535 3.69 1.464 5.215L2.08 22l4.908-1.343a9.988 9.988 0 005.043 1.374h.004c5.526 0 10.031-4.506 10.031-10.031 0-2.68-1.043-5.198-2.936-7.091A9.972 9.972 0 0012.031 2zm0 18.358h-.003a8.31 8.31 0 01-4.225-1.155l-.303-.18-3.136.859.865-3.06-.197-.315a8.307 8.307 0 01-1.31-4.476c0-4.596 3.738-8.334 8.334-8.334 2.227 0 4.321.867 5.895 2.441a8.286 8.286 0 012.439 5.895c0 4.596-3.738 8.33-8.334 8.33zm4.568-6.242c-.25-.125-1.482-.731-1.712-.814-.23-.083-.397-.125-.564.125-.167.25-.647.814-.793.98-.146.167-.292.188-.542.063-.25-.125-1.055-.389-2.01-1.24a7.483 7.483 0 01-1.39-1.724c-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.021-.438s-.563-1.356-.771-1.856c-.203-.487-.41-.421-.564-.429-.146-.008-.313-.01-.479-.01s-.438.063-.667.313c-.23.25-.876.855-.876 2.086 0 1.231.897 2.42 1.022 2.587.125.167 1.764 2.693 4.275 3.777.597.258 1.064.412 1.428.528.6.191 1.147.164 1.579.1.481-.072 1.482-.605 1.69-1.189.208-.584.208-1.085.146-1.189-.062-.104-.229-.167-.479-.292z" />
                </svg>
              </span>
              <span>WhatsApp: {CLINIC_DATA.contact.whatsappFormatted}</span>
            </li>
            <li>
              <span className={styles.icon}>✉️</span>
              <span><a href={`mailto:${CLINIC_DATA.contact.email}`}>{CLINIC_DATA.contact.email}</a></span>
            </li>
          </ul>

          <h5 className={styles.socialTitle}>Redes Sociais Oficiais</h5>
          <div className={styles.socialLinks}>
            <a
              href={CLINIC_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <span>Instagram</span>
              <strong>{CLINIC_DATA.socials.instagramHandle}</strong>
            </a>
            <a
              href={CLINIC_DATA.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <span>YouTube</span>
              <strong>{CLINIC_DATA.socials.youtubeHandle}</strong>
            </a>
          </div>
        </div>

        {/* Column 3: Responsabilidade Médica & CRMs */}
        <div className={styles.crmColumn}>
          <h4 className={styles.colTitle}>Corpo Clínico & Registros</h4>
          <p className={styles.crmNotice}>
            Atendimento médico de excelência em estrita conformidade com as resoluções do Conselho Federal de Medicina (CFM) e Conselho Regional de Nutricionistas (CRN).
          </p>
          <div className={styles.crmList}>
            <div className={styles.crmItem}>
              <strong>Dr. Glauber Marinho</strong>
              <span>CRM 52.90000-1 • Endocrinologia & Nutrologia</span>
            </div>
            <div className={styles.crmItem}>
              <strong>Dra. Fernanda Almeida</strong>
              <span>CRM 52.98567-8 • Dermatologia Estética</span>
            </div>
            <div className={styles.crmItem}>
              <strong>Dr. Helder Barroso</strong>
              <span>CRM 52.94237-5 • Cardiologia & Esporte</span>
            </div>
            <div className={styles.crmItem}>
              <strong>Dr. Glaucio Marinho</strong>
              <span>CRM 52.102553-8 • Cirurgia Vascular</span>
            </div>
            <div className={styles.crmItem}>
              <strong>Vanessa Brandi</strong>
              <span>CRN 19100621 • Nutrição Clínica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>© {new Date().getFullYear()} SkinCorpus — Clínica Médica e Estética. Todos os direitos reservados.</p>
          <p className={styles.legalInfo}>
            As informações deste site têm caráter informativo e não substituem a consulta médica individualizada.
          </p>
        </div>
      </div>
    </footer>
  );
};
