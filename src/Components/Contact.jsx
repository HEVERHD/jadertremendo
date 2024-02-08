import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    const message = `Hola me llamo ${formData.name}\n y esta es la descripcion de lo que quiero, desdeo mas información : ${formData.message}`;
    const whatsappMessage = encodeURIComponent(message);
    const phoneNumber = '573145235053'; // Tu número de WhatsApp

    // Construye el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Abre la ventana de WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <div id='contact' style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0.0, 0, 0.8)), url("https://i.ibb.co/LP03mPf/slider9.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <h1>Para contratos</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre de quien solicita el show"
          value={formData.name}
          onChange={handleChange}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid #fff', color: '#000', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}
        /><br />
    
        <textarea
          name="message"
          rows="5"
          cols="30"
          placeholder="Descripción"
          value={formData.message}
          onChange={handleChange}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', border: '1px solid #fff', color: '#000', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}
        ></textarea><br />
        <button className='send' type="submit">Enviar por WhatsApp</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};
