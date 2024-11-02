import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetails from './components/BookDetails';
import LoginForm from './components/LoginForm';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';
import RegisterBook from './components/RegisterBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import booksData from './components/booksData';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([...booksData]);

  const handleViewDetails = (book) => {
    setSelectedBook(book);
  };

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevCart, { ...book, cantidad: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const handleSaveBook = (newBook) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      { id: prevBooks.length + 1, ...newBook },
    ]);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks((prevBooks) => 
      prevBooks.map((book) => 
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };
  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/" element={<HomePage onViewDetails={handleViewDetails} addToCart={addToCart} books={books}/>} />
        <Route
          path="/book/:id"
          element={
             selectedBook ? (
              <BookDetails book={selectedBook} addToCart={addToCart} />
            ) : (<Navigate to="/" />)
          }
        />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/register-book" element={<RegisterBook onSave={handleSaveBook} />} />
        <Route path="/edit-book" element={<EditBook books={books} onUpdate={handleUpdateBook} />} />
        <Route path="/delete-book" element={<DeleteBook books={books} onDelete={handleDeleteBook} />} />
      </Routes>
    </Router>
  );
}

export default App;
