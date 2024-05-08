import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { set } from 'mongoose'



function BooksDetailPage() {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`https://softwium.com/api/books/${id}`)
            .then((response) => {
                setBook(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [id])

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>
    return (
        <div>
            <h1> Title : {book.title}</h1>
            <p>ISBN: {book.isbn}</p>
            <p>Page Count: {book.pageCount}</p>
            <p>Authors: {book.authors.join(', ')}</p>
        </div>


    )
}

export default BooksDetailPage