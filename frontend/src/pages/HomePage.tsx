import React from 'react';
import { Hero } from '../components/home/Hero';
import { MedicalTeam } from '../components/home/MedicalTeam';
import { MultidisciplinarySupport } from '../components/home/MultidisciplinarySupport';
import { Testimonials } from '../components/home/Testimonials';
import { Experience } from '../components/home/Experience';
import { Faq } from '../components/home/Faq';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <MedicalTeam />
      <MultidisciplinarySupport />
      <Testimonials />
      <Experience />
      <Faq />
    </>
  );
};
