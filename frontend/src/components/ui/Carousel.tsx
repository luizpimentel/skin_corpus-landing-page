import React, { useState, useEffect, useRef } from 'react';
import type { Testimonial } from '../../types';
import styles from './Carousel.module.css';

interface CarouselProps {
  items: Testimonial[];
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlayInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    if (autoPlayInterval > 0) {
      timerRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
    }
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [items.length, autoPlayInterval]);

  const handlePrev = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setCurrentIndex(index);
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      role="region"
      aria-roledescription="carrossel de depoimentos"
      aria-label="Depoimentos de pacientes"
    >
      <div className={styles.slidesWrapper}>
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={item.id}
              className={`${styles.card} ${isActive ? styles.active : styles.hidden}`}
              aria-hidden={!isActive}
            >
              <div className={styles.rating} aria-label={`Avaliação: ${item.rating} de 5 estrelas`}>
                {'★'.repeat(item.rating)}
              </div>
              <blockquote className={styles.quote}>
                “{item.feedback}”
              </blockquote>
              <div className={styles.authorSection}>
                <div className={styles.avatar}>
                  {item.patientName.charAt(0)}
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{item.patientName}</p>
                  <p className={styles.procedure}>{item.procedure} • <span>{item.doctorName}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className={styles.controls}>
        <button
          type="button"
          onClick={handlePrev}
          className={styles.navBtn}
          aria-label="Depoimento anterior"
        >
          ‹
        </button>

        <div className={styles.dots} role="tablist" aria-label="Slides do carrossel">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir para depoimento ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className={styles.navBtn}
          aria-label="Próximo depoimento"
        >
          ›
        </button>
      </div>
    </div>
  );
};
