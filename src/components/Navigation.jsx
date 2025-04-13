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
    <nav className="bg-gray-900 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 z-20">
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
        <div className="md:hidden z-20">
          <button 
            onClick={toggleMobileMenu} 
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-10 overflow-y-auto">
          <div className="pt-20 pb-6 px-6 flex flex-col h-full">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-lg py-3 border-b border-gray-700 hover:text-blue-400">Inicio</a>
              <a href="/empleos" className="text-lg py-3 border-b border-gray-700 hover:text-blue-400">Empleos</a>
              <a href="/empresas" className="text-lg py-3 border-b border-gray-700 hover:text-blue-400">Empresas</a>
              
              {isAuthenticated && (
                <a href="/configuracion" className="text-lg py-3 border-b border-gray-700 hover:text-blue-400">Configuración</a>
              )}
            </div>
            
            <div className="mt-auto pt-6">
              {isAuthenticated ? (
                <div className="space-y-4">
                  <div className="py-3 border-t border-gray-700">
                    <span className="text-gray-300 block mb-1">
                      {userType === 'company' ? 'Empresa:' : 'Candidato:'} 
                    </span>
                    <span className="text-lg font-medium">{userEmail}</span>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="/dashboard" 
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded text-center text-white font-medium"
                    >
                      Dashboard
                    </a>
                    <button 
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded text-white font-medium"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 border-t border-gray-700 pt-4">
                  <a 
                    href="/login" 
                    className="text-lg py-3 hover:text-blue-400"
                  >
                    Iniciar Sesión
                  </a>
                  <a 
                    href="/register" 
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded text-center text-white font-medium"
                  >
                    Registrarse
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}