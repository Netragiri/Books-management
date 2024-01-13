import { useNavigate } from 'react-router-dom'
import MainLayout from '../views/MainLayout';

interface PrivateRouteProps {
  element: JSX.Element; // Change the type to React.ReactNode
  }

  function PrivateRoute({ element: Component }: PrivateRouteProps) {
  const navigate = useNavigate()
  const isLoggdIn = localStorage.getItem("isLoggdIn")

  if (isLoggdIn !== "true") {
    setTimeout(() => {
      navigate("/")
    }, 500)
    return null;
  } else {
    return <MainLayout> {Component} </MainLayout>
  }
}

export default PrivateRoute
