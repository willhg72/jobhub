import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaSun, FaMoon } from 'react-icons/fa';

interface NavbarProps {
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'candidate' | 'company' | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Initialize theme and auth on component mount
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on localStorage or system preference
    const initialDarkMode = 
      savedTheme === 'dark' || 
      (!savedTheme && prefersDark);
    
    setIsDarkMode(initialDarkMode);
    
    // Apply theme to document
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Check if user is authenticated from localStorage
    const auth = localStorage.getItem('isAuthenticated');
    const type = localStorage.getItem('userType') as 'candidate' | 'company' | null;
    const email = localStorage.getItem('userEmail');
    
    if (auth === 'true' && type) {
      setIsAuthenticated(true);
      setUserType(type);
      if (email) {
        setUserEmail(email);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      
      // Update localStorage
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      
      // Update document class
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newMode;
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setUserEmail('');
    
    // Remove authentication from localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    
    // Navigate to home
    window.location.href = '/';
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold cursor-pointer flex items-center">
          <a href="/" className="flex items-center">
            <FaBriefcase className="inline-block mr-2 h-6 w-6 text-blue-500" />
            <span className="text-gray-900 dark:text-white">JobHub</span>
          </a>
        </h1>
        <nav className="flex items-center gap-4">
          <a href="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">
            Inicio
          </a>
          
          {/* Jobs link - visible to everyone */}
          <a href="/jobs" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">
            Empleos
          </a>
          
          {/* Candidates link - only visible to authenticated companies */}
          {(isAuthenticated && userType === 'company') && (
            <a href="/candidates" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">
              Candidatos
            </a>
          )}
          
          {/* Companies link - only visible to authenticated candidates */}
          {(isAuthenticated && userType === 'candidate') && (
            <a href="/companies" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">
              Empresas
            </a>
          )}
          
          {/* Settings link - only visible to authenticated users */}
          {isAuthenticated && (
            <a href="/settings" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">
              Configuración
            </a>
          )}
          
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded"
            title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
          </button>
          
          {isAuthenticated ? (
            <>
              <span className="text-gray-700 dark:text-gray-300">
                {userType === 'candidate' ? 'Candidato' : 'Empresa'}: {userEmail}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Cerrar Sesión
              </button>
              <a
                href="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Dashboard
              </a>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="border border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded"
              >
                Iniciar Sesión
              </a>
              <a
                href="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Registrarse
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};