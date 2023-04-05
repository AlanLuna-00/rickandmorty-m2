import { useState } from "react";
import './Form.css';
import validation from "./validation";

const Form = ({ login }) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [property]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form);
        setError(validation(form));
    }

    return (
        <div className="login-page">
            <div className="form">
                <form onSubmit={handleSubmit} className="register-form">
                    <input placeholder="username" className="formInput" type="text" name="email" value={form.email} onChange={handleChange} />
                    {error.email && <p className="error">{error.email}</p>}
                    <input placeholder="password" className="formInput" type="password" name="password" value={form.password} onChange={handleChange} />
                    {error.password && <p className="error">{error.password}</p>}
                    <button className="buttonLogin" type="submit">Login</button>
                </form>
            </div>
        </div>

    );
}

export default Form