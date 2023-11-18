import "./Options.css";
import AssistIMG from "../../assets/request-workshop 1.png";
import LocationIMG from "../../assets/mechanics_roadside_assistance 1.png";
import { useNavigate } from "react-router-dom";

const Options = () => {
    const navigate = useNavigate();
    const request = () => {
        navigate("/user/request");
    }
    const location = () => {
        navigate("/user/location");
    }

    return ( 
        <section id="options">
            <h1>Select Option</h1>

            <div className="select select-assistance">
                <div className="image">
                    <img src={AssistIMG} alt="vehicle" />
                </div>
                <button onClick={request}>Request Assistance</button>
            </div>

            <div className="select select-location">
                <div className="image">
                    <img src={LocationIMG} alt="location" />
                </div>
                <button onClick={location}>Find Nearby Shops</button>
            </div>
        </section>
    );
}
 
export default Options;