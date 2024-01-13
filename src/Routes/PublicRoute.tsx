import { Navigate, useNavigate } from 'react-router-dom';

interface PublicRouteProps {
  element: any;
}

function PublicRoute({ element: Component }: PublicRouteProps) {
  const token = localStorage.getItem('token');
  const profile = JSON.parse(localStorage.getItem('profile') || 'null');
  const navigate = useNavigate()

  if (token && profile) {
    // Check your condition here and navigate accordingly
    // Example: If some condition is met, return <Navigate to="/dashboard" />;
    
    // If you want to render the original component, you can return it like this:
    return Component;
  } else {
    // Redirect to login or any other route if the conditions are not met
    console.log("hii");
// navigate("/login")
    return <Navigate to="/login" replace ={true}/>;
  }
}

export default PublicRoute;
