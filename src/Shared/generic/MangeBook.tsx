// import React, { useContext } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { bookSchema } from "../../Shared/Utills/validationSchema";
// import { BookContext } from '../../Shared/Context/BookContext';
import { BookAddValues } from "../../types/global";
import Select from "react-select";
import { genreTypesBooks } from "../constant";
import { useEffect, useState } from "react";

interface ManageBookProps {
  handleFormSubmit: (values: BookAddValues) => void;
  initialValues: BookAddValues;
  title: string;
}

const ManageBook = ({
  handleFormSubmit,
  initialValues,
  title,
}: ManageBookProps) => {
  const [genre, setGenre] = useState({});

  useEffect(() => {
    if (initialValues.genre) {
      const data =
        genreTypesBooks.find((i) => i.value === initialValues.genre) || "";
      setGenre(data);
    }
  }, [initialValues]);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>{title}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={bookSchema}
            onSubmit={handleFormSubmit}
            enableReinitialize={true}
          >
            {({ handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit} className="mt-4">
                <FormField label="Book name" name="name" type="text" />
                <FormField label="Author name" name="author" type="text" />
                <FormField label="Published year" name="year" type="text" />
                <Form.Group>
                  <Form.Label className="fw-bold mt-3">Genre</Form.Label>
                  <Select
                    placeholder="Select Genre Type"
                    name="genre"
                    onChange={(selectedOption: any) => {
                      handleChange("genre")(selectedOption.value);
                      setGenre(selectedOption);
                    }}
                    options={genreTypesBooks}
                    value={genre}
                  />
                  <ErrorMessage
                    name="genre"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
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

const FormField = ({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) => (
  <Form.Group controlId={`form${name}`}>
    <Form.Label className="fw-bold mt-3">{label}</Form.Label>
    <Field type={type} name={name} className="form-control" />
    <ErrorMessage name={name} component="div" className="text-danger" />
  </Form.Group>
);

export default ManageBook;
