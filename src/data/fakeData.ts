import type { Job, Company, Candidate, Application } from '../interfaces';

export const FAKE_CANDIDATES: Candidate[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    experience: '5 años de experiencia en desarrollo web',
    education: 'Ingeniero en Sistemas, Universidad Nacional',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript'],
    cv: '#'
  },
  {
    id: '2',
    name: 'María López',
    email: 'maria@example.com',
    experience: '3 años de experiencia en diseño UX/UI',
    education: 'Diseñadora Gráfica, Universidad de Artes',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'HTML/CSS', 'Prototyping'],
    cv: '#'
  },
  {
    id: '3',
    name: 'Carlos Rodríguez',
    email: 'carlos@example.com',
    experience: '7 años de experiencia en ciencia de datos',
    education: 'PhD en Estadística, Universidad Tecnológica',
    skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Data Visualization'],
    cv: '#'
  }
];

export const FAKE_COMPANIES: Company[] = [
  {
    id: '1',
    name: 'TechSolutions',
    industry: 'Tecnología',
    location: 'Bogotá, Colombia',
    description: 'Empresa líder en desarrollo de software y soluciones tecnológicas.',
    jobs: ['1', '2']
  },
  {
    id: '2',
    name: 'Data Insights Corp.',
    industry: 'Análisis de Datos',
    location: 'Cali, Colombia',
    description: 'Somos una empresa de análisis de datos, que ayuda a las empresas a tomar decisiones basadas en datos.',
    jobs: ['3']
  },
  {
    id: '3',
    name: 'DesignHub',
    industry: 'Diseño',
    location: 'Medellín, Colombia',
    description: 'Agencia creativa especializada en diseño de experiencias digitales.',
    jobs: ['4', '5']
  }
];

export const FAKE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Desarrollador Frontend',
    company: 'TechSolutions',
    location: 'Bogotá, Colombia',
    description: 'Buscamos un desarrollador frontend con experiencia en React para unirse a nuestro equipo.',
    requirements: [
      'Experiencia con React y TypeScript',
      'Conocimientos de HTML, CSS y JavaScript',
      'Familiaridad con sistemas de control de versiones (Git)',
      'Capacidad para trabajar en equipo'
    ],
    salary: '$3,000,000 - $4,500,000 COP',
    datePosted: '2023-07-15',
    category: 'Desarrollo'
  },
  {
    id: '2',
    title: 'Desarrollador Backend',
    company: 'TechSolutions',
    location: 'Bogotá, Colombia (Remoto)',
    description: 'Estamos buscando un desarrollador backend con experiencia en Node.js y bases de datos.',
    requirements: [
      'Experiencia con Node.js y Express',
      'Conocimientos de bases de datos SQL y NoSQL',
      'Familiaridad con arquitecturas de microservicios',
      'Experiencia en desarrollo de APIs RESTful'
    ],
    salary: '$3,500,000 - $5,000,000 COP',
    datePosted: '2023-07-10',
    category: 'Desarrollo'
  },
  {
    id: '3',
    title: 'Analista de Datos',
    company: 'Data Insights Corp.',
    location: 'Cali, Colombia',
    description: 'Buscamos un/a analista de datos para extraer insights valiosos de nuestros datos. Trabajarás con grandes volúmenes de información y herramientas de análisis avanzadas.',
    requirements: [
      'Experiencia en análisis de datos y estadística',
      'Conocimientos de Python, R o herramientas similares',
      'Experiencia con SQL y bases de datos',
      'Capacidad para comunicar hallazgos de manera efectiva'
    ],
    salary: '$3,200,000 - $4,800,000 COP',
    datePosted: '2023-07-19',
    category: 'Análisis de Datos'
  },
  {
    id: '4',
    title: 'Diseñador UX/UI',
    company: 'DesignHub',
    location: 'Medellín, Colombia',
    description: 'Buscamos un diseñador UX/UI creativo para diseñar interfaces intuitivas y atractivas.',
    requirements: [
      'Experiencia en diseño de interfaces de usuario',
      'Dominio de herramientas como Figma, Adobe XD o Sketch',
      'Conocimientos de principios de usabilidad',
      'Portfolio que demuestre habilidades de diseño'
    ],
    salary: '$2,800,000 - $4,200,000 COP',
    datePosted: '2023-07-05',
    category: 'Diseño'
  },
  {
    id: '5',
    title: 'Diseñador Gráfico',
    company: 'DesignHub',
    location: 'Medellín, Colombia (Híbrido)',
    description: 'Estamos en busca de un diseñador gráfico talentoso para crear materiales visuales impactantes.',
    requirements: [
      'Experiencia en diseño gráfico y branding',
      'Dominio de Adobe Creative Suite',
      'Conocimientos de diseño para medios digitales e impresos',
      'Creatividad y atención al detalle'
    ],
    salary: '$2,500,000 - $3,800,000 COP',
    datePosted: '2023-07-12',
    category: 'Diseño'
  }
];

export const FAKE_APPLICATIONS: Application[] = [
  {
    id: '1',
    jobId: '1',
    candidateId: '1',
    dateApplied: '2023-07-16',
    status: 'revisada'
  },
  {
    id: '2',
    jobId: '3',
    candidateId: '1',
    dateApplied: '2023-07-20',
    status: 'enviada'
  },
  {
    id: '3',
    jobId: '2',
    candidateId: '3',
    dateApplied: '2023-07-11',
    status: 'entrevista'
  },
  {
    id: '4',
    jobId: '4',
    candidateId: '2',
    dateApplied: '2023-07-06',
    status: 'aceptada'
  },
  {
    id: '5',
    jobId: '5',
    candidateId: '2',
    dateApplied: '2023-07-13',
    status: 'rechazada'
  }
];