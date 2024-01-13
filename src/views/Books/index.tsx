import React from 'react';
import { Button } from 'react-bootstrap';
import { BookInterface } from '../../Shared/constant';

interface BookProps {
  books: BookInterface[];
}

function Books({ books }: BookProps) {
  return (
    <tbody>
      {books?.map((book) => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>${book.price}</td>
          <td>
            {/* Add your action buttons here */}
            <Button variant="primary" size="sm">
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
