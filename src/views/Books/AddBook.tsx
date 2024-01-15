import { useContext } from 'react';
import { BookContext } from '../../Shared/Context/BookContext';
import { useNavigate } from 'react-router-dom';
import { successToast } from '../../Shared/helper';
import ManageBook from '../../Shared/generic/MangeBook';
import { BookAddValues } from '../../types/global';
import { TITLES } from '../../Shared/constant';

const AddBook = () => {
  const { bookList }: any = useContext(BookContext)
  const [books, setBooks] = bookList
  const navigate = useNavigate()

  const initialValues = {
    name: '',
    author: '',
    genre: '',
    year:''
  };

  const handleFormSubmit = (values: BookAddValues) => {
    const updatedBooks = [
      {
        name: values.name,
        author: values.author,
        year: values.year,
        genre: values.genre,
        id: Date.now().toString(),
      },
      ...books,
    ];
    setBooks(updatedBooks)
    localStorage.setItem("bookData", JSON.stringify(updatedBooks))
    navigate("/dashboard")
    successToast("Book Added")
  };

  return (
    <ManageBook title={TITLES.book.add} initialValues={initialValues} handleFormSubmit={handleFormSubmit} />
  );
};

export default AddBook;
