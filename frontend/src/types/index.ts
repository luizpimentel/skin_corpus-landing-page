export type DoctorId = 'dra-fernanda-almeida' | 'dr-glauber-marinho';

export interface Doctor {
  id: DoctorId;
  name: string;
  prefix: string;
  crm: string;
  specialty: string;
  focus: string;
  consultationDuration: string;
  image: string;
  link: string;
  education?: string[];
  approachTitle?: string;
  approachSubtitle?: string;
}

export interface SupportProfessional {
  id: string;
  name: string;
  prefix: string;
  registry: string;
  phone: string;
  specialty: string;
  focus: string;
  image: string;
}

export interface MethodStep {
  letter: string;
  title: string;
  description: string;
}

export interface Treatment {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  benefits: string[];
}

export interface Protocol {
  id: 'mulheres' | 'homens';
  title: string;
  tagline: string;
  genderLabel: string;
  targetAudience: string;
  goal: string;
  disclaimer: string;
  clinicalIndicationsTitle: string;
  clinicalIndications: string[];
  featuresTitle: string;
  features: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  doctorName: string;
  procedure: string;
  feedback: string;
  rating: number;
}

export interface AppointmentFormValues {
  name: string;
  email: string;
  phone: string;
  doctor: DoctorId | '';
  interest: string;
  preferredDate: string;
  preferredPeriod: 'MANHA' | 'TARDE' | '';
  message: string;
  consent: boolean;
}

export interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  doctor: string;
  interest: string;
  preferredDate: string;
  preferredPeriod: string;
  message?: string;
  consent: boolean;
}

export interface AppointmentResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  doctor: string;
  interest: string;
  preferredDate: string;
  preferredPeriod: string;
  message?: string;
  createdAt: string;
}

export interface ApiError {
  message: string;
  fieldErrors?: Record<string, string>;
}
