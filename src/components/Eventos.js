import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Enlazo el elemento bind para poder interactuar con el componente.
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({ contador: this.state.contador + 1 });
  }

  restar(e) {
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Con las properties Initializers no es necesario
// inicializar las propiedades dentro del constructor.
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Las arrow functino reconocen el this del entorno
  // en el que se encuentran. En este caso, será el de la clase.
  sumar = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  };

  restar = (e) => {
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Boton hecho componente</button>;
// }

const Boton = ({ myOnClick }) => (<button onClick={myOnClick}>Boton hecho componente</button>);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(e.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        {/* La arrow function es la que maneja el evento, no handleClick */}
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>
        {/*
          No funciona porque es un componente personalizado.
         <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        /> */}

        {/* Paso el evento como una propiedad al componente */}
        <Boton
          // Realmente esto es una prop
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}
