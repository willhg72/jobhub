import React from 'react';
import type { Job } from '../interfaces';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="mb-4 transition-transform transform hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{job.company} - {job.location}</p>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-700 dark:text-gray-300">{job.description.substring(0, 100)}...</p>
        <div className="mt-2">
          <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2">
            {job.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Publicado: {new Date(job.datePosted).toLocaleDateString('es-CO')}
        </p>
        <a 
          href={`/jobs/${job.id}`} 
          className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Ver Detalles
        </a>
      </div>
    </div>
  );
};