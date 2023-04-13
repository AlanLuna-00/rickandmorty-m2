import "./App.css";
import Cards from "./components/Cards.jsx";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [Characters, setCharacters] = useState([]);

  const URL = "https://be-a-rym.up.railway.app/api/character/";
  const API_KEY = "1f7733c3f7cc.673ee192101ab1b561a7";
  const onSearch = (id) => {
    fetch(`${URL}/${id}?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (Characters.find((value) => value.id === data.id)) {
          toast.error("El dato es invalido o ya fue agregado");
        } else if (id === "" || id > 826 || id < 1) {
          toast.error('El dato es invalido o ya fue agregado');
        } else {
          setCharacters([...Characters, data]);
        }
      });
  };

  const onClose = (id) => {
    setCharacters(Characters.filter((_value, i) => i !== parseInt(id)));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "alanluna@gmail.com";
  const PASSWORD = "alan05";

  const login = (form) => {
    if (form.email === EMAIL && form.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else {
      setAccess(false);
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              characters={Characters}
              onClose={onClose}
              onSearch={onSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {location.pathname !== "/" && (
        <Footer className="footer">Alan Luna</Footer>
      )}
      <Toaster position="top-left" />
    </div>
  );
}

export default App;
