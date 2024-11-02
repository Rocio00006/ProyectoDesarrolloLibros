// BookCard.js
import React from 'react';
import '../styles/BookCard.css';

function BookCard({ book, onAddToCart, onViewDetails }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-price">S/.{book.price}</p>
      <button className="book-btn add-btn" onClick={() => onAddToCart(book)}>
        Agregar
      </button>
      <button className="book-btn details-btn" onClick={() => onViewDetails(book)}>
        Ver detalle
      </button>
    </div>
  );
}
export default BookCard;
