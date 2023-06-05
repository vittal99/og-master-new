
export const handleLogout = (navigate) => {
  // const navigate = useNavigate();

  // Clear session storage or any other necessary cleanup
  sessionStorage.removeItem('userData');

  // Reset the navigation state
  navigate('/', { replace: true });
};