// EditBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EditBook.css';

function EditBook({ books, onUpdate }) {
    const navigate = useNavigate();
    const [searchTitle, setSearchTitle] = useState('');
    const [bookToEdit, setBookToEdit] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        price: '',
        quantity: '',
        coverImage: '',
        pages: '',
        encuadernacion: '',
        language: '',
    });

    const handleSearch = () => {
        const book = books.find((b) => b.title.toLowerCase() === searchTitle.toLowerCase());
        if (book) {
            setBookToEdit(book);
            setFormData({ ...book }); 
        } else {
            alert('Libro no encontrado');
            setBookToEdit(null);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        if (bookToEdit) {
            onUpdate(formData); 
            navigate('/'); 
        }
    };

    return (
        <div className="edit-book-page">
            <h2>Libro a editar</h2>
            <input
                type="text"
                placeholder="Título del libro a modificar"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button onClick={handleSearch} className="search-btn">Buscar</button>
            
            {bookToEdit && (
                <div className="edit-book-form">
                    <h2>Formulario para editar libro</h2>
                    <label>Título</label>
                    <input name="title" value={formData.title} onChange={handleChange} />
                    <label>Autor</label>
                    <input name="author" value={formData.author} onChange={handleChange} />
                    <label>Categoría</label>
                    <input name="category" value={formData.category} onChange={handleChange} />
                    <label>Precio</label>
                    <input name="price" type="number" value={formData.price} onChange={handleChange} />
                    <label>Cantidad</label>
                    <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} />
                    <label>Portada</label>
                    <input name="coverImage" value={formData.coverImage} onChange={handleChange} />
                    <label>Páginas</label>
                    <input name="pages" type="number" value={formData.pages} onChange={handleChange} />
                    <label>Encuadernación</label>
                    <input name="encuadernacion" value={formData.encuadernacion} onChange={handleChange} />                    
                    <label>Lenguaje</label>
                    <input name="language" value={formData.language} onChange={handleChange} />
                    <button onClick={handleUpdate} className="update-btn">Actualizar</button>
                </div>
            )}
        </div>
    );
}

export default EditBook;
