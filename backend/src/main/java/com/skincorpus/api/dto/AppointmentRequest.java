package com.skincorpus.api.dto;

import jakarta.validation.constraints.*;
import java.time.LocalDate;

public record AppointmentRequest(
    @NotBlank(message = "O nome completo é obrigatório")
    @Size(min = 3, max = 150, message = "O nome deve ter entre 3 e 150 caracteres")
    String name,

    @NotBlank(message = "O e-mail é obrigatório")
    @Email(message = "Formato de e-mail inválido")
    String email,

    @NotBlank(message = "O telefone / WhatsApp é obrigatório")
    @Pattern(regexp = "^\\(?\\d{2}\\)?\\s?\\d{4,5}-?\\d{4}$", message = "Telefone inválido. Formato esperado: (XX) 9XXXX-XXXX")
    String phone,

    @NotBlank(message = "Selecione o profissional de preferência")
    String doctor,

    @NotBlank(message = "Selecione o tratamento ou protocolo de interesse")
    String interest,

    @NotNull(message = "A data preferencial é obrigatória")
    @FutureOrPresent(message = "A data deve ser atual ou futura")
    LocalDate preferredDate,

    @NotBlank(message = "Selecione o período preferencial")
    @Pattern(regexp = "^(MANHA|TARDE)$", message = "O período deve ser MANHA ou TARDE")
    String preferredPeriod,

    @Size(max = 1000, message = "A mensagem pode ter no máximo 1000 caracteres")
    String message,

    @NotNull(message = "O consentimento LGPD é obrigatório")
    @AssertTrue(message = "Você deve concordar com os termos de privacidade para continuar")
    Boolean consent
) {}
