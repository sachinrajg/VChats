import React, { useState } from "react";
import "../style.scss";
import { useNavigate ,Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch (error) {
            setErr(true);
            console.error("Error signing in:", error.message);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
<<<<<<< HEAD
                <span className="logo">Vchats</span>
=======
                <span className="logo">VChats</span>
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
                <span className="register-title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log in</button>
                </form>
                {err && <p className="error">Failed to log in. Please check your credentials.</p>}
                <p>You do not have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
