import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class ApisAjax extends Component {
  state = {
    pokemons: [],
  };

  // Cuando se renderice el componente, hago la peticion.
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((info) => {
              console.log(info);
              let pokemon = {
                id: info.id,
                name: info.name,
                avatar: info.sprites.front_default,
              };

              // Obtengo una copia del estado que guarda los pokemons
              // Y lo combino con la informacion del nuevo pokemon.
              let pokemons = [...this.state.pokemons, pokemon];

              // Actualizo la lista de pokemons
              this.setState({
                pokemons,
              });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones Asincronas en Componentes de clases</h2>
        {this.state.pokemons.length < 1 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              avatar={pokemon.avatar}
            />
          ))
        )}
      </>
    );
  }
}
