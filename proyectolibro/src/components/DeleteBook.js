// DeleteBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DeleteBook.css';

function DeleteBook({ books, onDelete }) {
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = useState('');
    const [bookToDelete, setBookToDelete] = useState(null);

    const handleSearch = () => {
        const book = books.find((b) => b.title.toLowerCase() === searchTitle.toLowerCase());
        if (book) {
            setBookToDelete(book);
        } else {
            alert('Libro no encontrado');
            setBookToDelete(null);
        }
    };

    const handleDelete = () => {
        if (bookToDelete) {
            onDelete(bookToDelete.id); // Llama a la función de eliminación en App.js
            navigate('/'); // Redirige a la página de inicio después de eliminar
        }
    };

    return (
        <div className="delete-book-page">
            <h2>Libro a eliminar</h2>
            <input
                type="text"
                placeholder="Título del libro a eliminar"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button onClick={handleSearch} className="search-btn">Buscar</button>

            {bookToDelete && (
                <div className="confirmation">
                    <p>¿Eliminar libro <strong>{bookToDelete.title}</strong>?</p>
                    <button onClick={() => navigate('/admin')} className="cancel-btn">Cancelar</button>
                    <button onClick={handleDelete} className="delete-btn">Eliminar</button>
                </div>
            )}
        </div>
    );
}

export default DeleteBook;
