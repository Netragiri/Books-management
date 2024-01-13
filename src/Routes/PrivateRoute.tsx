import { useNavigate } from 'react-router-dom'

interface PrivateRouteProps {
    element: any; // Change the type to React.ReactNode
  }

  function PrivateRoute({ element: Component }: PrivateRouteProps) {
  const navigate = useNavigate()
  const isLoggdIn = localStorage.getItem("isLoggdIn")

  if (isLoggdIn !== "true") {
    setTimeout(() => {
      navigate("/")
    }, 500)
  } else {
    return Component
  }
}

export default PrivateRoute
