import React, { useState, useEffect } from "react";

function Reloj({ hour }) {
  return <h3>{ hour }</h3>;
}

export default function RelojHooks() {
  let [hour, setHour] = useState(new Date().toLocaleTimeString());
  let [visible, setVisible] = useState(false);

  // Solo cuando se cambie el valor de la variable visible
  useEffect(() => {
    let temporizador;
    // No es optima esta forma, porque renderiza de nuevo el reloj cada segundo
    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      // Limpio el intervalo del temporizador
      clearInterval(temporizador);
    }
    return () => {
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <div>
      {visible && <Reloj hour={hour} />}
      <h2>Reloj con Hooks</h2>
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </div>
  );
}
