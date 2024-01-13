import React, { useContext } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { BookAddValues } from '../../types/global';
import { bookSchema } from '../../Shared/Utills/validationSchema';
import { BookContext } from '../../Shared/Context/BookContext';
import { useNavigate } from 'react-router-dom';
import { successToast } from '../../Shared/helper';

const AddBook = () => {
    const {bookList}:any = useContext(BookContext)
    const [books,setBooks] = bookList
    const navigate = useNavigate()
  const initialValues = {
    name: '',
    author: '',
    price: '',
  };


  console.log(books)
  const handleFormSubmit = (values: BookAddValues) => {
    const updatedBooks = [...books,{
        name:values.name,
        author:values.author,
        price:values.price,
        id: Date.now(),
    }]
    setBooks(updatedBooks)
    localStorage.setItem("bookData",JSON.stringify(updatedBooks))
    navigate("/dashboard")
    successToast("Book Added")
    console.log(values);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Add Book</h2>
          <Formik initialValues={initialValues} validationSchema={bookSchema} onSubmit={handleFormSubmit}>
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FormField label="Name" name="name" type="text" />
                <FormField label="Author" name="author" type="text" />
                <FormField label="Price" name="price" type="text" />

                <Button type="submit" variant="primary" className='mt-3'>
                  Add Book
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

const FormField = ({ label, name, type }:{label:string,name:string,type:string}) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label className='fw-bold'>{label}</Form.Label>
    <Field type={type} name={name} className="form-control" />
    <ErrorMessage name={name} component="div" className="text-danger" />
  </Form.Group>
);

export default AddBook;
