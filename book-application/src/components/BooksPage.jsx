import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function BooksPage() {
    const [books,setBooks] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)

    useEffect(()=>{
        axios.get('https://softwium.com/api/books')
        .then((response)=>{
            
            setBooks(response.data)
            setLoading(false)
        
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false)
        
        })

    },[])
    
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error: {error}</h1>


  return (
    <div>
      <h1>Books</h1>
      <ul style={{ listStyleType: 'none' }}>
        {
            books.map((book)=>{
                return ( 
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`} style={{textDecoration: "none" , color:"blue"}}>{book.id}: {book.title}</Link>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default BooksPage;