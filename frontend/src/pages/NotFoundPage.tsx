import React from 'react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <span className="gold-badge" style={{ marginBottom: '1rem' }}>
        Página Não Encontrada
      </span>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem' }}>
        404
      </h1>
      <p style={{ maxWidth: '480px', marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
        A página que você está procurando não existe ou foi movida. Retorne à nossa página inicial.
      </p>
      <Button to="/" variant="primary" size="md">
        Voltar para a Página Inicial
      </Button>
    </div>
  );
};
