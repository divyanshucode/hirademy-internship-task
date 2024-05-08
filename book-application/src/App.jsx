import React from "react"
import BooksPage from "./components/BooksPage"
import BooksDetailPage from "./components/BooksDetailPage"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/books" element={<BooksPage />}/>
        <Route path="/books/:id" element={<BooksDetailPage />}/>
      </Routes>
     
    </Router>
  )
}

export default App
