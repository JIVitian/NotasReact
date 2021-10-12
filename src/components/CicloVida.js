import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  // Este metodo se ejecutará cuando el componente ya no exista.
  componentWillUnmount() {
    console.log(3, "El componente a sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se incializa, aun NO está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  // Puede recibir los parametros del componente antes de ser actualizados.
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente se han actualizado ");
    console.log(prevProps);
    console.log(prevState);
  }

  tiktak = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tiktak();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja o redibuja por algún cambio en el DOM"
    );
    return (
      <>
        <h2>Ciclo de Vida de Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
