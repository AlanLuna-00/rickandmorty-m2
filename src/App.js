import './App.css';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';

function App() {
  const [Characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Characters.find((value) => value.id === data.id)) {
          alert('El personaje con ese id ya fue agregado');
        } else {
          setCharacters([...Characters, data]);
        }
      });
  };

  const onClose = (id) => {
    setCharacters(Characters.filter((_value, i) => i !== parseInt(id)));
  };

  const randomCharacter = () => {
    let randomNum = Math.floor(Math.random() * 826) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${randomNum}`)
      .then((res) => res.json())
      .then((data) => {
        if (Characters.find((value) => value.id === data.id)) {
          alert('El personaje random ya fue agregado');
        } else {
          setCharacters([...Characters, data]);
        }
      });
  };

  return (
    <div className="App">
      <NavBar onSearch={onSearch} randomCharacter={randomCharacter} />
      <Routes>
        <Route path="/home" element={<Cards characters={Characters} onClose={onClose} />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
