package com.skincorpus.api.dto;

import com.skincorpus.api.model.Appointment;
import com.skincorpus.api.model.AppointmentStatus;
import java.time.LocalDate;
import java.time.OffsetDateTime;

public record AppointmentResponse(
    Long id,
    String name,
    String email,
    String phone,
    String doctor,
    String interest,
    LocalDate preferredDate,
    String preferredPeriod,
    String message,
    AppointmentStatus status,
    OffsetDateTime createdAt
) {
    public static AppointmentResponse fromEntity(Appointment appointment) {
        return new AppointmentResponse(
            appointment.getId(),
            appointment.getName(),
            appointment.getEmail(),
            appointment.getPhone(),
            appointment.getDoctor(),
            appointment.getInterest(),
            appointment.getPreferredDate(),
            appointment.getPreferredPeriod(),
            appointment.getMessage(),
            appointment.getStatus(),
            appointment.getCreatedAt()
        );
    }
}
