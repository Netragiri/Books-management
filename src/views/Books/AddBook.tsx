import { useContext } from 'react';
import { BookContext } from '../../Shared/Context/BookContext';
import { useNavigate } from 'react-router-dom';
import { successToast } from '../../Shared/Helper';
import ManageBook from '../../Shared/Generic/MangeBook';
import { BookAddValues } from '../../types/global';
import { TITLES } from '../../Shared/Constant';

const AddBook = () => {
  const { bookList }: any = useContext(BookContext)
  const [books, setBooks] = bookList
  const navigate = useNavigate()

  const initialValues = {
    name: '',
    author: '',
    genre: "",
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
