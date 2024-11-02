// RegisterBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterBook.css';

function RegisterBook({ onSave }) {
    const navigate = useNavigate();
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(formData);
        navigate('/'); // Redirige a la página de inicio
    };

    return (
        <div className="register-book-page">
            <h2>Formulario para registrar nuevo libro</h2>
            <div className="register-book-form">
                <label>Título</label>
                <input name="title" value={formData.title} onChange={handleChange} placeholder="Ingresar título del libro" />
                <label>Autor</label>
                <input name="author" value={formData.author} onChange={handleChange} placeholder="Ingresar autor del libro" />
                <label>Categoría</label>
                <input name="category" value={formData.category} onChange={handleChange} placeholder="Ingresar categoría del libro" />
                <label>Precio</label>
                <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Ingresar precio del libro" />
                <label>Cantidad</label>
                <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Ingresar cantidad disponible" />
                <label>Portada</label>
                <input name="coverImage" type="text" value={formData.coverImage} onChange={handleChange} placeholder="URL de la imagen" />
                <label>Páginas</label>
                <input name="pages" type="number" value={formData.pages} onChange={handleChange} placeholder="Ingresar número de páginas" />
                <label>Encuadernación</label>
                <input name="encuadernacion" value={formData.encuadernacion} onChange={handleChange} placeholder="Ingresar tipo de encuadernación" />
                <label>Lenguaje</label>
                <input name="language" value={formData.language} onChange={handleChange} placeholder="Ingresar idioma" />
                <button onClick={handleSave} className="save-btn">Guardar</button>
            </div>
        </div>
    );
}

export default RegisterBook;
