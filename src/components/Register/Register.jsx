import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(`https://fitter-backend.vercel.app/register`, {username, email, password})
        .then(res => {
            console.log("fitter success:", res);
            setUsername(""); setEmail(""); setPassword("");
            navigate("/login");
        })
        .catch(err => console.log("fitter error:", err));
    }



    return ( 
        <section id="register">
            <div id="back-button">
                <Link to="/"><i className='bx bx-chevron-left' ></i></Link>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="form-title">
                    <h1>Registration</h1>
                </div>

                <div className="inputs">
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Username (abcdefg)" 
                        autoComplete="off" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        autoComplete="off" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Register</button>

                <div id="toLogin">
                    <p>Already have an account?</p>
                    <Link to="/login">Login here</Link>
                </div>

            </form>
        </section>
    );
}
 
export default Register;