package com.skincorpus.api.service;

import com.skincorpus.api.dto.AppointmentRequest;
import com.skincorpus.api.dto.AppointmentResponse;
import com.skincorpus.api.model.Appointment;
import com.skincorpus.api.repository.AppointmentRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository repository;

    public AppointmentService(AppointmentRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public AppointmentResponse createAppointment(AppointmentRequest request) {
        Appointment appointment = new Appointment(
            request.name(),
            request.email(),
            request.phone(),
            request.doctor(),
            request.interest(),
            request.preferredDate(),
            request.preferredPeriod(),
            request.message(),
            request.consent()
        );

        Appointment saved = repository.save(appointment);
        return AppointmentResponse.fromEntity(saved);
    }

    @Transactional(readOnly = true)
    public List<AppointmentResponse> listAllAppointments() {
        return repository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
                .stream()
                .map(AppointmentResponse::fromEntity)
                .toList();
    }

    @Transactional(readOnly = true)
    public AppointmentResponse getAppointmentById(Long id) {
        Appointment appointment = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Agendamento não encontrado com o ID: " + id));
        return AppointmentResponse.fromEntity(appointment);
    }
}
