import { Table } from 'react-bootstrap';
import { BookInterface } from '../../Shared/constant';
import { useNavigate } from 'react-router-dom';
import editIcon from '../../assets/icons/pencil-line.svg'
import deleteIcon from '../../assets/icons/delete-bin-line.svg'
import "../../assets/css/layout/layout.css"
import ConfirmModal from '../../Shared/ConfirmModal';
import { useContext, useState } from 'react';
import { BookContext } from '../../Shared/Context/BookContext';

interface BookProps {
  books: BookInterface[];
}

function Books({ books }: BookProps) {
  const navigate = useNavigate()
  const [show, setShow] = useState<boolean>(false)
  const handleClose = () => setShow(false)
  const [id, setId] = useState<string | number>("");
  const { bookList }: any = useContext(BookContext)
  const [allBooks, setAllBooks] = bookList

  const handleDelete = (id?:string | number) => {
    if (id) {
      const updatedBooks = allBooks.filter((i:BookInterface)=>i.id !== id)
      setAllBooks(updatedBooks)
      localStorage.setItem("bookData", JSON.stringify(updatedBooks))
      setShow(false)
    }
  }

  const handleShow = (id:string | number) => {
    setId(id)

    setShow(true)
  }
  return (
    <Table striped bordered hover  className="mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books?.map((book, index) => (
          <tr key={book?.id}>
            <td>{index + 1}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.genre}</td>
            <td>
              <button className="action-btns" onClick={() => navigate(`/edit-book/${book.id}`)}>
              <img src={editIcon} alt="edit-icon" />
              </button>{" "}
              <button className='action-btns' onClick={() => book?.id && handleShow(book.id)}>
              <img src={deleteIcon} alt="delet-icon" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <ConfirmModal title="Are you sure to delete this book?" btnTitle="Delete" show={show} id={id} handleClose={handleClose} handleDelete={handleDelete} />
    </Table>
  );
}

export default Books;
