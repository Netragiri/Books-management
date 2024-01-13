import { useNavigate } from 'react-router-dom'

interface PrivateRouteProps {
    element: React.ReactNode; // Change the type to React.ReactNode
  }

  function PrivateRoute({ element: Component }: PrivateRouteProps) {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const profile = JSON.parse(localStorage.getItem('userProfile') || 'null');
  const isLoggdIn = localStorage.getItem("isLoggdIn")

  if (!isLoggdIn) {
    setTimeout(() => {
      navigate("/")
    //   localStorage.clear()
    }, 500)
  } else {
    return Component
  }
}

export default PrivateRoute
