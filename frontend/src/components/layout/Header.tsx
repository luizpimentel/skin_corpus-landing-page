import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from '../ui/Button';
import { useAppointmentModal } from '../../context/AppointmentContext';
import { CLINIC_DATA } from '../../data/clinic';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openAppointment } = useAppointmentModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando o pathname muda
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Corpo Clínico', href: '/#corpo-clinico' },
    { label: 'A Experiência', href: '/#experiencia' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contato', href: '/#contato' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo da Clínica */}
        <Link to="/" className={styles.logoLink} aria-label="SkinCorpus Clínica Médica - Página Inicial">
          <img
            src={CLINIC_DATA.images.logo}
            alt="Logo SkinCorpus"
            className={styles.logoImg}
            width={44}
            height={44}
          />
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>SKIN CORPUS</span>
            <span className={styles.logoSubtitle}>CLÍNICA MÉDICA E ESTÉTICA</span>
          </div>
        </Link>

        {/* Navegação no Desktop */}
        <nav className={styles.desktopNav} aria-label="Navegação Principal">
          {navLinks.map((link) => {
            const isRouterLink = !link.href.includes('#') || link.href === '/';
            if (isRouterLink) {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`${styles.navItem} ${isActive ? styles.navActive : ''}`}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                className={styles.navItem}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Botão de Agendamento */}
        <div className={styles.ctaWrapper}>
          <Button
            variant="primary"
            size="sm"
            onClick={() => openAppointment()}
            className={styles.headerCta}
          >
            Agendar Consulta
          </Button>

          {/* Menu Mobile Toggle */}
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`} />
          </button>
        </div>
      </div>

      {/* Drawer no Mobile */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileNavItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileCta}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                openAppointment();
              }}
            >
              Agendar Avaliação
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
