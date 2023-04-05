import './App.css';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About';
import Form from './components/Form/Form';

function App() {
  const [Characters, setCharacters] = useState([]);

  const URL = 'https://be-a-rym.up.railway.app/api/character/'
  const API_KEY = '1f7733c3f7cc.673ee192101ab1b561a7'
  const onSearch = (id) => {
    fetch(`${URL}/${id}?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (Characters.find((value) => value.id === data.id)) {
          alert('El personaje con ese id ya fue agregado');
        } else if (id === '' || id > 826 || id < 1)  {
          alert('El personaje con ese id no existe');
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
  
  const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    const EMAIL = 'alanluna@gmail.com';
    const PASSWORD = 'alan05';

    const login = (form) => {
        if (form.email === EMAIL && form.password === PASSWORD) {
            setAccess(true);
            navigate('/home');
        } else {
            setAccess(false);
        }
    }

    const logout = () => {
        setAccess(false);
        navigate('/');
    }

    useEffect(() => {
        !access && navigate('/');
     }, [access, navigate]);

  return (
    <div className="App">
      <NavBar onSearch={onSearch} randomCharacter={randomCharacter} logout={logout} />
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={Characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

