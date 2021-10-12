import logo from './logo.svg';
import './App.css';
import Propiedades from './components/Propiedades';
import Componente from './components/Componente';
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
      <section className="App-header">
        <Propiedades
          cadena="Esto es una cadena de texto"
          number={1}
          boolenano={true}
          arreglo={[1,2,3]}
          objeto={{ nombre:'juan', correo:'juanperez1@hotmail.com' }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como Prop"/>
          }
        />
        <hr />
        <Estado />
        <hr/>
        <RenderizadoCondicional />
        <hr/>
        <RenderizadoElementos />
        <hr/>
        <Eventos />
      </section>
    </div>
  );
}

export default App;
