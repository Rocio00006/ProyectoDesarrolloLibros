// BookDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import booksData from '../components/booksData';
import '../styles/BookDetails.css';


function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = booksData.find((book) => book.id === parseInt(id));
  
    if (!book) {
      return <p>Libro no encontrado.</p>;
    }
  
    return (
      <div className="book-details-page">
        <Header />
        <div className="book-details-container">
          <img src={book.image} alt={book.title} className="book-details-image" />
          <div className="book-details-info">
            <h2 className="book-details-title">{book.title}</h2>
            <p className="book-details-author">Autor: {book.author}</p>
            <p className="book-details-price">Precio: S/.{book.price}</p>
            <p>Idioma: {book.language}</p>
            <p>N° páginas: {book.pages}</p>
            <p>Encuadernación: {book.encuadernacion}</p>
            <p>Disponible: {book.cantidad > 0 ? 'Sí' : 'No'}</p>
            <div className="book-details-actions">
              <button className="quantity-btn">Cantidad: {book.cantidad}</button>
              <button className="buy-btn">Comprar</button>
            </div>
            <button onClick={() => navigate(-1)} className="back-btn">
              Volver
            </button>
          </div>
        </div>
      </div>
    );
  }
export default BookDetails;
