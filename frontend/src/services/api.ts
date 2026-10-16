import type { AppointmentRequest, AppointmentResponse, ApiError } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://formspree.io/f/xljgakez';

export async function createAppointment(
  data: AppointmentRequest
): Promise<AppointmentResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  const emailPayload = {
    'Nome Completo': data.name,
    'E-mail': data.email,
    'Telefone / WhatsApp': data.phone,
    'Profissional': data.doctor,
    'Área de Interesse': data.interest,
    'Data Preferencial': data.preferredDate,
    'Período': data.preferredPeriod,
    'Mensagem / Observações': data.message || 'Nenhuma observação informada',
    'Aceitou Termos LGPD': data.consent ? 'Sim' : 'Não',
  };

  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(emailPayload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorData: any = null;
      try {
        errorData = await response.json();
      } catch {
        // Fallback para resposta não JSON
      }

      const apiError: ApiError = {
        message:
          errorData?.detail ||
          errorData?.message ||
          'Não foi possível concluir o agendamento. Por favor, tente novamente.',
        fieldErrors: errorData?.fieldErrors || errorData?.errors || undefined,
      };

      throw apiError;
    }

    return await response.json();
  } catch (err: any) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      throw {
        message:
          'Tempo limite de resposta esgotado. Verifique sua conexão e tente novamente.',
      } as ApiError;
    }

    // Network error (e.g. backend server is not running locally yet)
    if (err instanceof TypeError && err.message.includes('fetch')) {
      throw {
        message:
          'Servidor de agendamento temporariamente indisponível. Por favor, tente novamente ou entre em contato pelo nosso WhatsApp oficial.',
      } as ApiError;
    }

    // Re-throw formatted ApiError
    throw err;
  }
}
