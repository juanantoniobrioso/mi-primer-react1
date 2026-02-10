import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function Contenedor(props) {
return (
<div style={{ border: '2px solid #000', padding: '10px' }}>
<h3>Contenedor</h3>
{props.children}
</div>
);
}



/*
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Posts de prueba</h1>

      {posts.slice(0, 5).map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
*/
function App() {
  return (
    <Router>
      <Header /> {/* Siempre visible */}
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer /> {/* Siempre visible */}
    </Router>
  );
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

export {App, Contenedor};

