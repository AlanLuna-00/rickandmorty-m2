import "./Landing.css";
import Cards from "../Cards.jsx";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Detail from "../Detail/Detail.jsx";
import About from "../About/About";
import Form from "../Form/Form";
import Favorites from "../Favorites/Favorites";
import Footer from "../Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


function Landing() {
  const [Characters, setCharacters] = useState([]);

  // const URL = "https://be-a-rym.up.railway.app/api/character/";
  // const API_KEY = "1f7733c3f7cc.673ee192101ab1b561a7";
  const onSearch = async (id) => {
    try {
      const response = await axios(`http://localhost:3001/rickandmorty/${id}`);
      const data = response.data;
      if (Characters.find((value) => value.id === data.id)) {
        toast.error("El dato es invalido o ya fue agregado");
      } else if (id === "" || id > 826 || id < 1) {
        toast.error("El dato es invalido o ya fue agregado");
      } else {
        setCharacters([data, ...Characters]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al procesar la solicitud");
    }
  };


  const onClose = (id) => {
    setCharacters(Characters.filter((_value, i) => i !== parseInt(id)));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (form) => {
    try {
      const { email, password } = form;
      const URL = "http://localhost:3001/rickandmorty/";
      const response = await axios.get(URL, {
        params: {
          email: email,
          password: password
        }
      });
      const { data } = response;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al procesar la solicitud");
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
    <div className="Landing">
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

export default Landing;
