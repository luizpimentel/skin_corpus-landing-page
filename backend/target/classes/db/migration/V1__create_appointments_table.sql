CREATE TABLE appointments (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    doctor VARCHAR(80) NOT NULL,
    interest VARCHAR(150) NOT NULL,
    preferred_date DATE NOT NULL,
    preferred_period VARCHAR(20) NOT NULL,
    message TEXT,
    consent BOOLEAN NOT NULL DEFAULT TRUE,
    status VARCHAR(30) NOT NULL DEFAULT 'PENDENTE',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE INDEX idx_appointments_doctor ON appointments (doctor);
CREATE INDEX idx_appointments_date ON appointments (preferred_date);
CREATE INDEX idx_appointments_status ON appointments (status);
