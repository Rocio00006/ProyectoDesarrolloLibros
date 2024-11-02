// AdminPanel.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import adminData from '../components/adminData';
import Header from './Header';
import '../styles/AdminPanel.css';

function AdminPanel() {
    const navigate = useNavigate();

    return (
        <div className="admin-panel-page">
            <Header />
            <div className="admin-panel-container">
                <div className="admin-info">
                    <h2>Datos del administrador</h2>
                    <div className="admin-avatar">
                        <span role="img" aria-label="avatar">👤</span>
                    </div>
                    <p>Nombre: {adminData.name}</p>
                    <p>Correo: {adminData.email}</p>
                    <p>Celular: {adminData.phone}</p>
                    <p>Edad: {adminData.age}</p>
                    <p>Rol: {adminData.role}</p>
                </div>
                <div className="admin-options">
                    <h2>Opciones para el administrador</h2>
                    <button className="admin-btn" onClick={() => navigate('/register-book')}>
                        Registrar libro
                    </button>
                    <button className="admin-btn" onClick={() => navigate('/edit-book')}>
                        Editar libro
                    </button>
                    <button className="admin-btn" onClick={() => navigate('/delete-book')}>
                        Eliminar libro
                    </button>
                    <button className="admin-btn back-btn" onClick={() => navigate('/')}>
                        Regresar al inicio
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
