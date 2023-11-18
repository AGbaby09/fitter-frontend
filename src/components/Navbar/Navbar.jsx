import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    const navigate = useNavigate();
    const profile = () => {
        navigate("/user/profile");
        setIsOpen(false);
    }
    const request = () => {
        navigate("/user/request");
        setIsOpen(false);
    }
    const location = () => {
        navigate("/user/location");
        setIsOpen(false);
    }
    const logout = () => {
        navigate("/login");
        setIsOpen(false);
    }

    return ( 
        <header id="navbar"  onBlur={closeMenu}>
            <button id="menu" onClick={openMenu}>
                <i className='bx bx-menu'></i>
            </button>
            <div id="links" className={isOpen ? "link-open" : "link-close"}>
                <div id="links-nav">
                    <button id="close" onClick={closeMenu}>
                        <i className='bx bx-x' ></i>
                    </button>
                </div>
                <div className="links">
                    <div className="link">
                        <button onClick={profile}><i className='bx bxs-user' ></i>Your profile</button>
                    </div>
                    <div className="link">
                        <button onClick={request}><i className='bx bxs-car-mechanic'></i>Request Assistance</button>
                    </div>
                    <div className="link">
                        <button onClick={location}><i className='large material-icons' >location_on</i>Find Nearby Shop</button>
                    </div>
                    <div className="link">
                        <button onClick={logout}><i className='bx bx-exit' ></i>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;