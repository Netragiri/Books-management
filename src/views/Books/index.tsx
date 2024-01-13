import React from 'react';
import { Button } from 'react-bootstrap';
import { BookInterface } from '../../Shared/constant';
import { useNavigate } from 'react-router-dom';

interface BookProps {
  books: BookInterface[];
}

function Books({ books }: BookProps) {
  const navigate = useNavigate()
  return (
    <tbody>
      {books?.map((book,index) => (
        <tr key={book?.id}>
          <td>{index+1}</td>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>₹{book.price}</td>
          <td>
            <Button variant="primary" size="sm" onClick={()=>navigate(`/edit-book/${book.id}`)}>
              Edit
            </Button>{" "}
            <Button variant="danger" size="sm">
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Books;
