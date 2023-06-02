

export const handleLogout = (navigate) => {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  console.log('Stored Data:', userData);
  

  sessionStorage.removeItem('userData');
  console.log('After remove:', sessionStorage.getItem('userData'));

  

  navigate('/');

};