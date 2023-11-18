import "./Home.css";
import Car from "../../assets/car.jpg"
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <main id="home">
            <div className="texts">
                <h1>FITTER</h1>

                <h3>WELCOME</h3>
                <p>Let's Get Started</p>
            </div>
            <div className="carImage-container">
                <img src={Car} alt="vehicle" loading="eager"/>
            </div>
            <div className="log-links">
                <div className="links">
                    <div className="link login">
                        <Link to="/login">LOG IN</Link>
                    </div>
                    <div className="link register">
                        <Link to="/register">REGISTER</Link>
                    </div>
                </div>
                <div className="aboutLink">
                    <Link to="/about"><i className='bx bx-link' ></i>Learn About Us...</Link>
                </div>
            </div>
        </main>
    );
}
 
export default Home;