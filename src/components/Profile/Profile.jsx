import "./Profile.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [isOn, setIsOn] = useState(false);
    const turnOn = () => {
        if(isOn === false){
            setIsOn(true);
        }else{
            setIsOn(false);
        }
    }

    return ( 
        <section id="profile">
            <h1>Profile</h1>

            <form action="" method="post">
                <label>Name<p>Full Name</p></label>
                <label>Email<p>example@exam.com</p></label>
                <label>Mobile<p>+1 (234) 456 7890</p></label>
            </form>

            <h2>Notifictaions</h2>
            <div className="notif">
                <p>Turn on/off Notification</p>
                <button onClick={turnOn}>
                    <div className={isOn ? "circle notif-open" : "circle notif-close"}></div>
                </button>
            </div>

            <button><Link to="/user/profile/update">Edit Profile</Link></button>
        </section>
    );
}
 
export default Profile;