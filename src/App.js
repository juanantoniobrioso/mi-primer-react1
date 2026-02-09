import logo from './logo.svg';
import './App.css';

function Contenedor(props) {
return (
<div style={{ border: '2px solid #000', padding: '10px' }}>
<h3>Contenedor</h3>
{props.children}
</div>
);
}
function Header(){
  return(
    <div>Header</div>
  ) 
}

function Footer(){
  return(
    <div>Footer</div>
  ) 
}

function App(){
  return(
    <Contenedor>
      <p>Este es un contenido dentro del contenedor.</p>
      <button>Click aquí</button>
    </Contenedor>
  ) 
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>

      <div>
        <Saludo nombre="Ana" apellido1="García" />
        <Saludo nombre="Luis" apellido1="Pérez"/>
      </div>

      <Contenedor>
        <p>Este es un contenido dentro del contenedor.</p>
        <button>Click aquí</button>
      </Contenedor>
    </div>
  );
}
  */

export {App, Header, Footer, Contenedor};

