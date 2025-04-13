import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Check authentication status from localStorage
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    
    if (authStatus) {
      setUserType(localStorage.getItem('userType') || '');
      setUserEmail(localStorage.getItem('userEmail') || '');
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-blue-500 text-3xl">□</span>
          <span className="text-xl font-bold">JobHub</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-blue-400">Inicio</a>
          <a href="/empleos" className="hover:text-blue-400">Empleos</a>
          <a href="/empresas" className="hover:text-blue-400">Empresas</a>
          
          {isAuthenticated && (
            <a href="/configuracion" className="hover:text-blue-400">Configuración</a>
          )}
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-gray-300 mr-2">
                  {userType === 'company' ? 'Empresa:' : 'Candidato:'} 
                </span>
                <span>{userEmail}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Cerrar Sesión
              </button>
              <a 
                href="/dashboard" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Dashboard
              </a>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <a 
                href="/login" 
                className="hover:text-blue-400"
              >
                Iniciar Sesión
              </a>
              <a 
                href="/register" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Registrarse
              </a>
            </div>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-3">
          <a href="/" className="block py-2 px-4 hover:bg-gray-800">Inicio</a>
          <a href="/empleos" className="block py-2 px-4 hover:bg-gray-800">Empleos</a>
          <a href="/empresas" className="block py-2 px-4 hover:bg-gray-800">Empresas</a>
          
          {isAuthenticated && (
            <a href="/configuracion" className="block py-2 px-4 hover:bg-gray-800">Configuración</a>
          )}
          
          {isAuthenticated ? (
            <div className="space-y-2 px-4">
              <div className="py-2">
                <span className="text-gray-300 mr-2">
                  {userType === 'company' ? 'Empresa:' : 'Candidato:'} 
                </span>
                <span className="block text-sm">{userEmail}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <a 
                  href="/dashboard" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-center"
                >
                  Dashboard
                </a>
                <button 
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 px-4">
              <a 
                href="/login" 
                className="block py-2 hover:text-blue-400"
              >
                Iniciar Sesión
              </a>
              <a 
                href="/register" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-center"
              >
                Registrarse
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}