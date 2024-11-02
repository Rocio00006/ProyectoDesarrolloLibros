// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import booksData from '../components/booksData';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import '../styles/HomePage.css';

function HomePage({ books, onViewDetails, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  /*const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );*/
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (book) => {
    onViewDetails(book);
    navigate(`/book/${book.id}`);
  };
  
  return (
    <div className="home-page">
      <Header onSearch={handleSearch} />
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onAddToCart={() => addToCart(book)}
              onViewDetails={() => handleViewDetails(book)}
            />
          ))
        ) : (
          <p>No hay libros disponibles para mostrar.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;


/*
  const handleAddToCart = (book) => {
    console.log('Agregar al carrito:', book);
  };
*/