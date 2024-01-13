import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <BrowserRouter>
   <ToastContainer />
   <AllRoutes />
   </BrowserRouter>
   </>
  );
}

export default App;
