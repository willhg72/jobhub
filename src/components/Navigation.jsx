import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null);
  
  useEffect(() => {
    // Check authentication status on component mount
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    const userRole = localStorage.getItem('userType');
    setIsAuthenticated(authStatus);
    setUserType(userRole);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
  };
  
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-blue-500 text-2xl">□</span>
              <span className="text-xl font-bold text-white">JobHub</span>
            </a>
            
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="/empleos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Empleos</a>
              <a href="/empresas" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Empresas</a>
              
              {isAuthenticated && userType === 'admin' && (
                <a href="/admin/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              )}
              
              {isAuthenticated && userType === 'admin' && (
                <a href="/admin/configuracion" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Configuración</a>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            {!isAuthenticated ? (
              <>
                <a href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Iniciar Sesión</a>
                <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">Registrarse</a>
              </>
            ) : (
              <>
                {userType === 'candidate' && (
                  <a href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mi Perfil</a>
                )}
                {userType === 'company' && (
                  <a href="/company/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Panel Empresa</a>
                )}
                <button 
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cerrar Sesión
                </button>
              </>
            )}
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="/empleos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Empleos</a>
            <a href="/empresas" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Empresas</a>
            
            {isAuthenticated && userType === 'admin' && (
              <a href="/admin/dashboard" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            )}
            
            {isAuthenticated && userType === 'admin' && (
              <a href="/admin/configuracion" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Configuración</a>
            )}
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-700">
            {!isAuthenticated ? (
              <div className="flex flex-col space-y-3">
                <a href="/login" className="text-base py-3 border-b border-gray-700 hover:text-blue-400 text-center">Iniciar Sesión</a>
                <a href="/register" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center mx-4">Registrarse</a>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                {userType === 'candidate' && (
                  <a href="/dashboard" className="text-base py-3 border-b border-gray-700 hover:text-blue-400 text-center">Mi Perfil</a>
                )}
                {userType === 'company' && (
                  <a href="/company/dashboard" className="text-base py-3 border-b border-gray-700 hover:text-blue-400 text-center">Panel Empresa</a>
                )}
                <button 
                  onClick={handleLogout}
                  className="text-base py-3 border-b border-gray-700 hover:text-blue-400 text-center"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}