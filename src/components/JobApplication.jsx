import { useState, useEffect } from 'react';

export default function JobApplication({ jobId }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);
  
  const handleApplyNow = () => {
    if (isAuthenticated) {
      // Process the application
      console.log(`Applying for job ${jobId}`);
      alert('¡Aplicación enviada con éxito!');
    } else {
      // Store current URL for redirect after login
      const currentPath = window.location.pathname;
      localStorage.setItem('redirectAfterLogin', currentPath);
      
      // Direct navigation to login page
      window.location.href = '/login';
    }
  };
  
  return (
    <button 
      onClick={handleApplyNow}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
    >
      Aplicar Ahora
    </button>
  );
}