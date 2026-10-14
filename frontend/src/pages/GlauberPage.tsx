import React from 'react';
import { DOCTORS } from '../data/professionals';
import { DoctorHero } from '../components/doctor/DoctorHero';
import { CombinedTherapy } from '../components/doctor/CombinedTherapy';
import { ProtocolSelector } from '../components/doctor/ProtocolSelector';
import { CtaBanner } from '../components/doctor/CtaBanner';

export const GlauberPage: React.FC = () => {
  const doctor = DOCTORS.find((d) => d.id === 'dr-glauber-marinho') || DOCTORS[1];

  return (
    <>
      <DoctorHero doctor={doctor} />
      <CombinedTherapy />
      <ProtocolSelector />
      <CtaBanner doctorId={doctor.id} doctorName={doctor.name} />
    </>
  );
};
