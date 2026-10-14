import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { AppointmentModal } from '../appointment/AppointmentModal';
import { AppointmentProvider } from '../../context/AppointmentContext';

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Scroll restoration or hash anchor handling
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return (
    <AppointmentProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <AppointmentModal />
      </div>
    </AppointmentProvider>
  );
};
