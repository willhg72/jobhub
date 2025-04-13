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

export interface Candidate {
    id: string;
    name: string;
    email: string;
    skills: string[];
    experience: string;
    education: string;
    cv: string; // URL o contenido del CV
}

export interface Company {
    id: string;
    name: string;
    industry: string;
    location: string;
    description: string;
    jobs: Job[]; // Ofertas de empleo de la empresa
}

export interface Application {
    id: string;
    candidateId: string;
    jobId: string;
    status: 'enviada' | 'revisada' | 'entrevista' | 'rechazada' | 'aceptada';
    dateApplied: string;
}