import { Button, Table } from 'react-bootstrap';
import { BookInterface } from '../../Shared/constant';
import { useNavigate } from 'react-router-dom';
import editIcon from '../../assets/icons/pencil-line.svg'
import deleteIcon from '../../assets/icons/delete-bin-line.svg'
import "../../assets/css/layout/layout.css"

interface BookProps {
  books: BookInterface[];
}

function Books({ books }: BookProps) {
  const navigate = useNavigate()
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books?.map((book, index) => (
          <tr key={book?.id}>
            <td>{index + 1}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>₹{book.price}</td>
            <td>
              <button className="action-btns" onClick={() => navigate(`/edit-book/${book.id}`)}>
              <img src={editIcon} alt="edit-icon" />
              </button>{" "}
              <button className='action-btns'>
              <img src={deleteIcon} alt="delet-icon" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Books;
