import "./About.css";
import AboutIMG from "../../assets/about.jpg";
import AssistIMG from "../../assets/request-workshop 1.png";
import LocationIMG from "../../assets/mechanics_roadside_assistance 1.png";
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <section id="about">
            <div id="nav-button">
                <Link to="/"><i className='bx bx-home-alt'></i></Link>
            </div>

            <header>
                <h1 id="fitter">About Us</h1>
                <img src={AboutIMG} alt="about" loading="eager"/>
            </header>

            <article>
                <h1>Elevate Your Mechanical Experience With FITTER</h1>
                <p>This revolutionary application is designed to redefine how you navigate mechanical challenges. At <span id="fitter">FITTER</span>, we are dedicated to providing a seamless and efficient platform that ensures convenient access to professional assistance and simplifies the process of locating nearby mechanical shops. With a sleek design and an array of features, <span id="fitter">FITTER</span> is here to transform your experience of dealing with unexpected car troubles.</p>
            </article>

            <div id="services">
                <h1 className="title">Our Services</h1>
                <div className="tab">
                    <div className="img">
                        <img src={AssistIMG} alt="assistance" />
                    </div>
                    <p>You can submit request for professional mechanical assistance through the app. When you make the request, your location is identified and professionals are sent your way.</p>
                </div>
                <div className="tab">
                    <div className="img">
                        <img src={LocationIMG} alt="location" />
                    </div>
                    <p>With the aid of geolocation, you can find nearby mechanical shops and select preferred shop. You are then guided with directions to selected shop.</p>
                </div>
            </div>

            <div id="mission">
                <h1 className="title">Our Mission</h1>
                <p>At the core of <span id="fitter">FITTER</span> is a mission to provide 24/7 reliable solutions, ensuring you can address mechanical issues with ease, regardless of your location or the urgency of the situation. Our application's intuitive interface and comprehensive functionalities are crafted to deliver prompt assistance and a stress-free resolution to your mechanical problems.</p>
            </div>

            <div id="subscribe">

            </div>

        </section>
    );
}
 
export default About;