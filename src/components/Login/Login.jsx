import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";


const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(false)
    const [mechanic, setMechanic] = useState(false)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [route, setRoute] = useState("");

    axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user:",user)
        console.log("mechanic:",mechanic)
        console.log("route:", route)

        axios.post(`http://localhost:5555/login/${route}/`, {email, password})
        .then(res => {
            console.log("fitter success:", res);
            setEmail(""); setPassword("");
            if(res.data === "success"){
                navigate("/user");
            }
        })
        .catch(err => console.log("fitter error:", err));
    }

    const handleUser = () => {
        setUser(true)
        setMechanic(false)
        setRoute("user")
    }
    const handleMechanic = () => {
        setUser(false)
        setMechanic(true)
        setRoute("mechanic")
    }

    
    

    return ( 
        <section id="login">
            <div id="back-button">
                <Link to="/"><i className='bx bx-chevron-left' ></i></Link>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-title">
                    <h1>Log In</h1>
                </div>

                <div className="radios">
                    <label>
                        <input 
                        type="radio" 
                        name="user" 
                        id="user" 
                        value="user" 
                        checked={user} 
                        onChange={handleUser}
                        /> User
                    </label>
                    <label>
                        <input 
                        type="radio" 
                        name="mechanic" 
                        id="mechanic" 
                        value="mechanic" 
                        checked={mechanic} 
                        onChange={handleMechanic}
                        /> Mechanic
                    </label>
                </div>

                <div className="inputs">
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

                <div className="forgot">
                    <Link to="/forgot">Forgot Password?</Link>
                </div>
                
                <button type="submit">LOG IN</button> 

                <div id="toRegister">
                    <p>Don't have an account?</p>
                    <Link to="/register">Register</Link>
                </div>

            </form>
        </section>
    );
}
 
export default Login;