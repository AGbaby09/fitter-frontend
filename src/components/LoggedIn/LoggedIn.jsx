import "./LoggedIn.css";
import Navbar from '../Navbar/Navbar';
import Options from '../Options/Options';
import Profile from '../Profile/Profile';
import Shops from "../Shops/Shops";
import Request from "../Request/Request";
import { Routes, Route } from 'react-router-dom';
import UpProfile from "../UpdatedProfile/UpProfile";

const LoggedIn = () => {
    return ( 
        <section id="loggedIn">
            <Navbar />
            <Routes>
                <Route path="/" element={<Options />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/profile/update" element={<UpProfile />}/>
                <Route path="/request" element={<Request />}/>
                <Route path="/location" element={<Shops />}/>
            </Routes>
        </section>
    );
}
export default LoggedIn;