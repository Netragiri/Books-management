import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookContext } from './Shared/Context/BookContext';
import { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem("bookData");
    try {
      if (storedData) {
        const bookData = JSON.parse(storedData);
        setBooks(bookData);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);

  useEffect(() => {
    document.title = 'Book Management';
  }, []); 

  return (
    <>
      <BrowserRouter>
        <BookContext.Provider value={{ bookList: [books, setBooks] }}>
          <ToastContainer />
          <AllRoutes />
        </BookContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
