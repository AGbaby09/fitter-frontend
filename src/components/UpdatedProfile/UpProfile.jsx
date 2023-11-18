import "./UpProfile.css";
const UpProfile = () => {
    return ( 
        <section id="profileUpdate">
            <h1>Update Profile</h1>

            <form action="" method="post">
            <label>Name<input type="text" placeholder="Full Name"/></label>
                <label>Email<input type="email" placeholder="example@exam.com"/></label>
                <label>Mobile<input type="number" placeholder="+1 (234) 456 7890"/></label>
            </form>

            <button>Update Profile</button>
        </section>
    );
}
 
export default UpProfile;