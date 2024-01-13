import { useNavigate } from 'react-router-dom';

interface PublicRouteProps {
  element: any;
}

function PublicRoute({ element: Component }: PublicRouteProps) {
  const navigate = useNavigate()
  const isLoggdIn = localStorage.getItem("isLoggdIn")

  if (isLoggdIn === "true") {
    setTimeout(() => {
      navigate("/dashboard")
    }, 500)
  } else {
    return Component;
  }
}

export default PublicRoute;
