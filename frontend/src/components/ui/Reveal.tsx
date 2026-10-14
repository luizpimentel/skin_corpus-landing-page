import React from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleUp' | 'slideRight';
  delayMs?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  animation = 'fadeUp',
  delayMs = 0,
  className = '',
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`${styles.reveal} ${styles[animation]} ${inView ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
};
