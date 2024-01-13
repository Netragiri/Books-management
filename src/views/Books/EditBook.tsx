import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ManageBook from '../../Shared/generic/MangeBook'
import { BookAddValues } from '../../types/global'
import { BookContext } from '../../Shared/Context/BookContext'
import { TITLES } from '../../Shared/constant'

function EditBook() {
    const { id } = useParams()
    const { bookList }: any = useContext(BookContext)
    const [books] = bookList
    const [initialFormData, setInitialFormData] = useState({
        name: '',
        author: '',
        price: '',
    });

    useEffect(() => {
        if (books?.length > 0) {
            const data = books?.find((i: BookAddValues) => i.id === id)
            setInitialFormData({ name: data?.name, author: data?.author, price: data?.price })
        }
    }, [id,books])

    const handleFormSubmit = (values: BookAddValues) => {
        // const updatedBooks = [...books,{
        //     name:values.name,
        //     author:values.author,
        //     price:values.price,
        //     id: Date.now(),
        // }]
        // setBooks(updatedBooks)
        // localStorage.setItem("bookData",JSON.stringify(updatedBooks))
        // navigate("/dashboard")
        // successToast("Book Added")
    };

    return (
        <ManageBook title={TITLES.book.edit} initialValues={initialFormData} handleFormSubmit={handleFormSubmit} />
    )
}

export default EditBook
