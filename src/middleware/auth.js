// Client-side authentication utilities

// Check if user is authenticated and has admin role
export function isAdmin() {
  if (typeof window === 'undefined') return false;
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userType = localStorage.getItem('userType');
  
  if (!isAuthenticated || userType !== 'admin') {
    // Redirect to login page
    window.location.href = '/login';
    return false;
  }
  
  return true;
}

// Check if user is authenticated
export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    // Redirect to login page
    window.location.href = '/login';
    return false;
  }
  
  return true;
}

// Check if user is a company
export function isCompany() {
  if (typeof window === 'undefined') return false;
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userType = localStorage.getItem('userType');
  
  if (!isAuthenticated || userType !== 'company') {
    // Redirect to login page
    window.location.href = '/login';
    return false;
  }
  
  return true;
}

// Check if user is a candidate
export function isCandidate() {
  if (typeof window === 'undefined') return false;
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userType = localStorage.getItem('userType');
  
  if (!isAuthenticated || userType !== 'candidate') {
    // Redirect to login page
    window.location.href = '/login';
    return false;
  }
  
  return true;
}