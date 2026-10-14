package com.skincorpus.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.skincorpus.api.controller.AppointmentController;
import com.skincorpus.api.dto.AppointmentRequest;
import com.skincorpus.api.dto.AppointmentResponse;
import com.skincorpus.api.model.AppointmentStatus;
import com.skincorpus.api.service.AppointmentService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AppointmentController.class)
class AppointmentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AppointmentService appointmentService;

    @Test
    @DisplayName("POST /api/appointments com dados válidos deve retornar 201 Created")
    void createAppointment_validData_returns201() throws Exception {
        AppointmentRequest request = new AppointmentRequest(
                "Mariana Silveira",
                "mariana@exemplo.com",
                "(21) 98888-7777",
                "dra-fernanda-almeida",
                "Ultraformer MPT",
                LocalDate.now().plusDays(2),
                "MANHA",
                "Gostaria de saber mais sobre o lifting sem cirurgia.",
                true
        );

        AppointmentResponse response = new AppointmentResponse(
                1L,
                request.name(),
                request.email(),
                request.phone(),
                request.doctor(),
                request.interest(),
                request.preferredDate(),
                request.preferredPeriod(),
                request.message(),
                AppointmentStatus.PENDENTE,
                OffsetDateTime.now()
        );

        Mockito.when(appointmentService.createAppointment(any(AppointmentRequest.class)))
                .thenReturn(response);

        mockMvc.perform(post("/api/appointments")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Mariana Silveira"))
                .andExpect(jsonPath("$.doctor").value("dra-fernanda-almeida"))
                .andExpect(jsonPath("$.status").value("PENDENTE"));
    }

    @Test
    @DisplayName("POST /api/appointments com dados inválidos deve retornar 400 Bad Request")
    void createAppointment_invalidData_returns400() throws Exception {
        AppointmentRequest invalidRequest = new AppointmentRequest(
                "", // Nome vazio
                "email-invalido", // Email inválido
                "123", // Telefone inválido
                "",
                "",
                LocalDate.now().minusDays(5), // Data no passado
                "NOITE", // Período inválido
                null,
                false // Sem consentimento
        );

        mockMvc.perform(post("/api/appointments")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.title").value("Dados Inválidos"))
                .andExpect(jsonPath("$.fieldErrors.name").exists())
                .andExpect(jsonPath("$.fieldErrors.email").exists())
                .andExpect(jsonPath("$.fieldErrors.phone").exists());
    }

    @Test
    @DisplayName("GET /api/appointments deve retornar 200 OK com lista de agendamentos")
    void listAppointments_returns200() throws Exception {
        AppointmentResponse item = new AppointmentResponse(
                1L,
                "Carlos Andrade",
                "carlos@exemplo.com",
                "(21) 97777-6666",
                "dr-glauber-marinho",
                "Protocolo Reposição Hormonal Masculina",
                LocalDate.now().plusDays(3),
                "TARDE",
                null,
                AppointmentStatus.PENDENTE,
                OffsetDateTime.now()
        );

        Mockito.when(appointmentService.listAllAppointments())
                .thenReturn(List.of(item));

        mockMvc.perform(get("/api/appointments"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Carlos Andrade"))
                .andExpect(jsonPath("$[0].doctor").value("dr-glauber-marinho"));
    }
}
