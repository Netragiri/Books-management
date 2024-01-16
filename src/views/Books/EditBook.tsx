import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ManageBook from '../../Shared/generic/MangeBook'
import { BookAddValues } from '../../types/global'
import { BookContext } from '../../Shared/Context/BookContext'
import { TITLES } from '../../Shared/constant'
import { successToast } from '../../Shared/helper'

function EditBook() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { bookList }: any = useContext(BookContext)
    const [books, setBooks] = bookList
    const [initialFormData, setInitialFormData] = useState({
        name: '',
        author: '',
        year: '',
        genre: ''
    });

    useEffect(() => {
        if (books?.length > 0) {
            const data = books?.find((i: BookAddValues) => i.id === id)
            setInitialFormData({ name: data?.name, author: data?.author, year: data?.year, genre: data.genre })
        }
    }, [id, books])

    const handleFormSubmit = (values: BookAddValues) => {
        const updatedBooks = books.map((book: BookAddValues) =>
            book.id === id
                ? { ...book, name: values.name, author: values.author, year: values.year, genre: values.genre }
                : book
        );
        setBooks(updatedBooks)
        localStorage.setItem("bookData", JSON.stringify(updatedBooks))
        navigate("/dashboard")
        successToast("Update Successfully")
    };

    return (
        <ManageBook title={TITLES.book.edit} initialValues={initialFormData} handleFormSubmit={handleFormSubmit} />
    )
}

export default EditBook
