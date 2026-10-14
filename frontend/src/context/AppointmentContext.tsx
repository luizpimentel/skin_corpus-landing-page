import React, { createContext, useContext, useState, useCallback } from 'react';
import type { DoctorId } from '../types';

interface OpenAppointmentOptions {
  doctor?: DoctorId;
  interest?: string;
}

interface AppointmentContextValue {
  isOpen: boolean;
  selectedDoctor: DoctorId | '';
  selectedInterest: string;
  openAppointment: (options?: OpenAppointmentOptions) => void;
  closeAppointment: () => void;
}

const AppointmentContext = createContext<AppointmentContextValue | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorId | ''>('');
  const [selectedInterest, setSelectedInterest] = useState('');

  const openAppointment = useCallback((options?: OpenAppointmentOptions) => {
    if (options?.doctor) {
      setSelectedDoctor(options.doctor);
    }
    if (options?.interest) {
      setSelectedInterest(options.interest);
    }
    setIsOpen(true);
  }, []);

  const closeAppointment = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        isOpen,
        selectedDoctor,
        selectedInterest,
        openAppointment,
        closeAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export function useAppointmentModal(): AppointmentContextValue {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointmentModal deve ser usado dentro de um AppointmentProvider');
  }
  return context;
}
