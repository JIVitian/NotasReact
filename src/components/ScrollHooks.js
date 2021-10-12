import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  // Este codigo se ejecutaría en la fase de actualización.
  useEffect(() => {
    const detectarScroll = () => setScrollY(window.pageYOffset);
    
    window.addEventListener("scroll", detectarScroll);

    // Desuscribo el evento si ya no existe el componente.
    return () => window.removeEventListener("scroll", detectarScroll)
  }, [scrollY]);

  // Para que algo se ejecute en la fase de montaje
  // debería poner una lista de dependencias vacía
  useEffect(() => {console.log("Fase de montaje")}, []);

  // Para simular la fase de desmontaje
  useEffect(() => {
      return () => console.log("Fase de desmontaje")
  })

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del navegador: {scrollY}px</p>
    </>
  );
}
