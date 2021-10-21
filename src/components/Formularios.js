import React, { useState, useEffect } from "react";

// Manejando el estado de los inputs mediante varias variables.
// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado correctamente.");
//   };

//   return (
//     <div>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elije tu Sabor JS Favorito</p>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="React"
//           name="sabor"
//           value="React"
//           onChange={(e) => setSabor(e.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>
//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="svelte">Svelte</label>
//         <br />
//         <br />
//         <p>Elije tu lenguaje favorito</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue={lenguaje}
//         >
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">Go</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <br />
//         <label htmlFor="terminos">Acepto Términos y Condiciones</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />
//         <br />
//         <input type="submit" value="Enviar" />
//       </form>
//     </div>
//   );
// }

// Controlando el estado del formulario con una sola variable.
export default function Formularios() {
  const [form, setForm] = useState({});

  // Esta funcion toma todos los nombres de las variables y las guarda como
  // claves del objeto formulario, y el valor de dicho objeto sera el valor del input.
  // Si la key ya se encuentra dentro del objeto form, su valor será actualizado por el nuevo.
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Para los select, debo generar un handleChecked
  const handleChecked = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado correctamente.");
  };

  return (
    <div>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije tu Sabor JS Favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="React"
          name="sabor"
          value="React"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <br />
        <br />
        <p>Elije tu lenguaje favorito</p>
        <select
          name="lenguaje"
          onChange={handleChecked}
          defaultValue={form.lenguaje}
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <br />
        <label htmlFor="terminos">Acepto Términos y Condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
