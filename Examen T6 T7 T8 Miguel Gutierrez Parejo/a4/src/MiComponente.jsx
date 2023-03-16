import React, { useState } from 'react';
import "./MiComponente.css";

function Conversor() {
  const [euros, setEuros] = useState(0);
  const [dolares, setDolares] = useState(0);
  const cambio = 1.21;
  
  const handleInputChange = (event) => {
    setEuros(event.target.value);
  }
  
  const convertir = () => {
    setDolares(euros * cambio);
  }

  return (
    <div className='MiComponente'>
      <label>Introduce la cantidad en euros:</label>
      <input type="number" value={euros} onChange={handleInputChange} />
      <button onClick={convertir}>Convertir</button><br />
      <p>El importe de {euros} euros son {dolares} dólares.</p>
    </div>
  );
}

export default Conversor;
