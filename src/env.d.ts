/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Add React component props types
interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    requirements: string[];
    salary: string;
    datePosted: string;
    category: string;
  };
}

// Add fake data types
interface Candidate {
  id: string;
  name: string;
  email: string;
  experience: string;
  education: string;
  skills: string[];
  cv?: string;
}

interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  description: string;
  jobs: string[];
}

interface Job {
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

interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  dateApplied: string;
  status: 'enviada' | 'revisada' | 'entrevista' | 'rechazada' | 'aceptada';
}