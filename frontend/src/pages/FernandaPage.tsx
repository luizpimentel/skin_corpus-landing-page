import React from 'react';
import { DOCTORS } from '../data/professionals';
import { DoctorHero } from '../components/doctor/DoctorHero';
import { DermaMethod } from '../components/doctor/DermaMethod';
import { TreatmentsList } from '../components/doctor/TreatmentsList';
import { CtaBanner } from '../components/doctor/CtaBanner';

export const FernandaPage: React.FC = () => {
  const doctor = DOCTORS.find((d) => d.id === 'dra-fernanda-almeida') || DOCTORS[0];

  return (
    <>
      <DoctorHero doctor={doctor} />
      <DermaMethod />
      <TreatmentsList />
      <CtaBanner doctorId={doctor.id} doctorName={doctor.name} />
    </>
  );
};
