// Cart.js
import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  const navigate = useNavigate();
  const handleVerMasLibros = () => {
    navigate('/');
};


  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h2>Carrito de compras</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.cantidad}</td>
                <td>S/. {item.price}</td>
                <td>S/. {item.price * item.cantidad}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Quitar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>TOTAL: S/. {total}</p>
          <button onClick={() => alert("Pago realizado")}>Pagar</button>
          <button onClick={handleVerMasLibros}>Ver más libros</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
