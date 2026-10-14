package com.skincorpus.api.repository;

import com.skincorpus.api.model.Appointment;
import com.skincorpus.api.model.AppointmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByDoctor(String doctor);

    List<Appointment> findByStatus(AppointmentStatus status);

    List<Appointment> findByPreferredDateAfter(LocalDate date);
}
