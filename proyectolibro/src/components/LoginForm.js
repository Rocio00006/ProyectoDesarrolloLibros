import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';

function LoginForm() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/');
      };

  return (
    <div className="login-container">
      <div className="logo-section">
        <img src="logolibrohub.png" alt="LibroHub Logo" className="logo" />
      </div>
      <div className="login-form-section">
        <h2 className="welcome-text">BIENVENIDO</h2>
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />
        <button className="login-button" onClick={handleLogin}>INGRESAR</button>
        <p className="register-text">No tiene cuenta?</p>
        <button className="register-button">REGISTRARSE</button>
      </div>
    </div>
  );
}

export default LoginForm;
