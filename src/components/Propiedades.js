import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <ul>
        <li>{props.porDefecto}</li>
        <li>{props.cadena}</li>
        <li>{props.number}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(",")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(",")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

// Puedo definir propiedades por defecto
// Tambien podría definirlos en los parametros de la función.
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

// Le puedo dar tipos y mas restricciones a las propiedades que agregue
Propiedades.propTypes = {
    number: PropTypes.number.isRequired,
};
