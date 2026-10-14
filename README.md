# SkinCorpus — Clínica Médica e Estética
> Landing page premium responsiva e focada em conversão para a clínica médica **SkinCorpus** (Barra da Tijuca, Rio de Janeiro), desenvolvida em **React 19 + TypeScript (Vite)** e integrada a uma REST API em **Spring Boot 3 (Java) com persistência SQL**.

## ⚙️ Arquitetura & Produtividade
Toda a arquitetura do projeto foi desenhada visando escalabilidade e aderência às regras de negócio do ambiente médico (gestão de leads e fluxo de atendimento). 

Foram aplicados padrões de projeto corporativos no backend (Repository Pattern, DTOs, MVC) e componentização modular no frontend. Para maximizar a produtividade e focar na resolução do problema de negócio em vez da digitação de código repetitivo (boilerplate), o ambiente de desenvolvimento foi integrado a ferramentas modernas de IA (Google Antigravity e ecossistema Gemini) atuando estritamente como code-assistants para refatoração e testes.

## 🏛️ Identidade Visual & Design System

Baseada na identidade oficial da clínica com layout alinhado ao wireframe:
- **Fundo Predominante:** Off-White / Creme texturizado (`#F8F5F0`)
- **Superfícies & Cards:** Branco Puro (`#FFFFFF`) com borda dourada translúcida (`rgba(156, 122, 78, 0.18)`)
- **Dourado Médio (Principal):** `#9C7A4E` (logo, títulos, destaques)
- **Dourado Claro (Brilho do degradê):** `#CBA768`
- **Dourado Escuro (Sombra e hover):** `#7D5F36`
- **Tipografia:** *Cormorant Garamond* (títulos e monogramas de luxo) + *Inter* (corpo de texto)

---

## 📁 Estrutura do Projeto

```
landing_page/
├── assets/                  # Wireframe original de referência
├── docker-compose.yml       # Banco PostgreSQL opcional para produção
│
├── frontend/                # React 19 + TypeScript + Vite
│   ├── public/images/       # Fotos oficiais dos profissionais e da clínica
│   └── src/
│       ├── app/             # Rotas SPA (React Router v7)
│       ├── components/
│       │   ├── layout/      # Header, Footer, WhatsAppButton, Layout
│       │   ├── home/        # Hero, MedicalTeam, MultidisciplinarySupport, Testimonials, Experience, Faq
│       │   ├── doctor/      # DoctorHero, DermaMethod, TreatmentsList, CombinedTherapy, ProtocolSelector, CtaBanner
│       │   ├── appointment/ # AppointmentModal, AppointmentForm
│       │   └── ui/          # Button, SectionTitle, Reveal, SegmentedTabs, Accordion, Modal, Carousel
│       ├── context/         # AppointmentContext (gerencia modal e pré-seleção)
│       ├── data/            # Dados clínicos tipados (Dra. Fernanda, Dr. Glauber, Apoio, FAQ, etc.)
│       ├── hooks/           # useAppointmentForm, useInView, etc.
│       ├── services/        # Cliente REST api.ts para Spring Boot
│       ├── styles/          # tokens.css e global.css
│       └── types/           # Interfaces TypeScript completas
│
└── backend/                 # Spring Boot 3.4 + Java 21+ (Maven Wrapper)
    ├── mvnw / mvnw.cmd      # Maven Wrapper (não necessita instalação prévia de Maven)
    ├── pom.xml              # Dependências: Web, Validation, Data JPA, Flyway, H2, PostgreSQL
    └── src/
        ├── main/
        │   ├── java/com/skincorpus/api/
        │   │   ├── config/              # CorsConfig (habilita frontend local e produção)
        │   │   ├── controller/          # AppointmentController (REST endpoints)
        │   │   ├── dto/                 # AppointmentRequest e AppointmentResponse (records)
        │   │   ├── exception/           # GlobalExceptionHandler (RFC 7807 ProblemDetail)
        │   │   ├── model/               # Appointment (@Entity) e AppointmentStatus (enum)
        │   │   ├── repository/          # AppointmentRepository (Spring Data JPA)
        │   │   └── service/             # AppointmentService (regras e persistência)
        │   └── resources/
        │       ├── application.yml      # Configuração base
        │       ├── application-dev.yml  # H2 em memória com console web para desenvolvimento
        │       ├── application-prod.yml # PostgreSQL com variáveis de ambiente
        │       └── db/migration/        # Flyway V1__create_appointments_table.sql
        └── test/                        # Testes unitários e de integração WebMvc
```

## 📊 Estratégia de MVP e Visão de Negócio
Para validar o produto e gerar valor imediato para a clínica, o MVP (Minimum Viable Product) foi desenhado com foco na conversão direta via **API do WhatsApp**, acelerando a captação de pacientes. 
A base do backend em **Spring Boot + PostgreSQL** já se encontra 100% arquitetada (Migrations, DTOs, Controllers, Tratamento de Exceções) para uma futura evolução, permitindo a criação rápida de um painel administrativo próprio de agendamentos sem a necessidade de refatoração do zero.

## 🚀 Como Executar o Projeto

### 1. Frontend (React + TypeScript)

Requisitos: **Node.js 18+**

```powershell
# Acesse o diretório do front-end
cd frontend

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em seu navegador: **`http://localhost:5173`**

Para validar o build de produção:
```powershell
npm run build
```

---

### 2. Backend (Spring Boot 3 + SQL)

Requisitos: **Java 17 ou superior** (compatível com Java 21 e 27).  
*Nota: Não é necessário ter o Maven instalado no computador, o projeto utiliza o **Maven Wrapper** que se autoconfigura na primeira execução.*

```powershell
# Acesse o diretório do backend
cd backend

# Execute a API em modo desenvolvimento (H2 Database em memória)
.\mvnw.cmd spring-boot:run
```

A API estará rodando em: **`http://localhost:8080`**

- **Console do Banco H2:** `http://localhost:8080/h2-console`  
  - *JDBC URL:* `jdbc:h2:mem:skincorpus_db`  
  - *User:* `sa`  
  - *Password:* (em branco)

Para executar os testes automatizados do backend:
```powershell
.\mvnw.cmd test
```

---

### 3. Banco de Dados PostgreSQL (Produção ou Docker)

Caso queira subir um banco PostgreSQL via Docker:

```powershell
docker compose up -d
```

E rode a aplicação Spring Boot com o profile `prod`:
```powershell
.\mvnw.cmd spring-boot:run -Dspring-boot.run.profiles=prod
```

---

## 📡 Endpoints da REST API

| Método | Endpoint | Descrição |
|---|---|---|
| `POST` | `/api/appointments` | Registra nova solicitação de agendamento (validação de campos, telefone, e-mail, data futura) |
| `GET` | `/api/appointments` | Retorna lista de todas as solicitações registradas ordenadas por data de criação |
| `GET` | `/api/appointments/{id}` | Retorna os detalhes de um agendamento específico por ID |

### Exemplo de Payload (`POST /api/appointments`)
```json
{
  "name": "Mariana Silveira",
  "email": "mariana@exemplo.com",
  "phone": "(21) 98888-7777",
  "doctor": "dra-fernanda-almeida",
  "interest": "Ultraformer MPT",
  "preferredDate": "2026-10-25",
  "preferredPeriod": "MANHA",
  "message": "Gostaria de avaliar contorno mandibular e estímulo de colágeno.",
  "consent": true
}
```

---

## 👩‍⚕️👨‍⚕️ Corpo Clínico & Seções Especiais

- **Dra. Fernanda Almeida (CRM 52.98567-8):** Página dedicada (`/dra-fernanda-almeida`) detalhando a consulta de 2 horas, os 5 passos do **Método D.E.R.M.A.** e o catálogo com os 5 procedimentos/tecnologias (Ultraformer MPT, Bioestimuladores de Colágeno, Toxina Botulínica natural, Ácido Hialurônico e Laser Etherea).
- **Dr. Glauber Marinho (CRM 5290000-1):** Página unificada (`/dr-glauber-marinho`) apresentando a **Terapia Combinada** e o componente interativo **`ProtocolSelector`**, que permite alternar dinamicamente entre os protocolos:
  - ♀ *Emagrecimento & Menopausa (Para Mulheres 30-50 anos)*
  - ♂ *Reposição Hormonal (Para Homens 30-50 anos)*
- **Apoio Multidisciplinar:** Apresentação elegante e informativa de **Dr. Helder Barroso** (Cardiologia), **Vanessa Brandi** (Nutrição) e **Dr. Glaucio Marinho** (Cirurgia Vascular), sem botões dispersivos, preservando o foco de conversão da página inicial.
- **Formulário Modal de Agendamento:** Acionado por qualquer botão de CTA da aplicação, pré-preenchendo automaticamente o médico e o tratamento/protocolo de interesse selecionado pelo paciente.
