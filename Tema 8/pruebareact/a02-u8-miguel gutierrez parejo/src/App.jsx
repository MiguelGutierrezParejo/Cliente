import React, { useState, useEffect } from 'react';

function Temporizador() {
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  const [limite, setLimite] = useState(0);

  useEffect(() => {
    let intervalId;
    if (activo && tiempo < limite) {
      intervalId = setInterval(() => {
        setTiempo(tiempo => tiempo + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [activo, tiempo, limite]);

  const comienzo = () => {
    setActivo(true);
  };

  const handleLimitChange = (event) => {
    setLimite(parseInt(event.target.value, 10));
    setTiempo(0);
    setActivo(false);
  };

  const formatoTiempo = (tiempo) => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Introduce el tiempo que quieres contar en segundos</h1>
      <input type="number" value={limite} onChange={handleLimitChange} />
      <button onClick={comienzo} disabled={activo || tiempo >= limite}>Empezar</button>
      <button onClick={() => {setTiempo(0); setActivo(false)}}>Reiniciar</button>
      <h1>{formatoTiempo(tiempo)}</h1>
    </div>
  );
}

export default Temporizador;
