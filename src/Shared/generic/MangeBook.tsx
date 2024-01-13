import React, { useContext } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { bookSchema } from '../../Shared/Utills/validationSchema';
import { BookContext } from '../../Shared/Context/BookContext';
import { BookAddValues } from '../../types/global';

interface ManageBookProps {
    handleFormSubmit: (values: BookAddValues) => void;
    initialValues: BookAddValues,
    title: string
}

const ManageBook = ({ handleFormSubmit, initialValues, title }: ManageBookProps) => {
    const { bookList }: any = useContext(BookContext)
    const [books] = bookList

    return (
        <Container className="mt-3">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>{title}</h2>
                    <Formik initialValues={initialValues} validationSchema={bookSchema} onSubmit={handleFormSubmit} enableReinitialize={true}>
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className='mt-4'>
                                <FormField label="Book name" name="name" type="text" />
                                <FormField label="Author name" name="author" type="text" />
                                <FormField label="Price" name="price" type="text" />

                                <Button type="submit" variant="primary" className='mt-3'>
                                    {title}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

const FormField = ({ label, name, type }: { label: string, name: string, type: string }) => (
    <Form.Group controlId={`form${name}`}>
        <Form.Label className='fw-bold'>{label}</Form.Label>
        <Field type={type} name={name} className="form-control" />
        <ErrorMessage name={name} component="div" className="text-danger" />
    </Form.Group>
);

export default ManageBook;
