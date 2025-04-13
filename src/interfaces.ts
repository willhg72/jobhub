export interface Candidate {
  id: string;
  name: string;
  email: string;
  experience: string;
  education: string;
  skills: string[];
  cv?: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  description: string;
  jobs: Job[] | string[]; // Allow both Job objects and job IDs
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  datePosted: string;
  category: string;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  dateApplied: string;
  status: 'enviada' | 'revisada' | 'entrevista' | 'rechazada' | 'aceptada';
}