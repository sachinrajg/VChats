import React, { useState } from "react";
import "../style.scss";
import addAvatar from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  
    setLoading(true);
    try {
      // Create user
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
  
      // Get the UID of the newly created user
      const userId = user.uid;
  
      // Upload avatar image to storage
      const storageRef = ref(storage, `${userId}/${displayName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress, if needed
        },
        (error) => {
          setError("Error uploading avatar image: " + error.message);
          setLoading(false);
        },
        async () => {
          // Upload successful, update user profile
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(user, {
            displayName,
            photoURL: downloadURL,
          });
  
          // Create user document in Firestore
          await setDoc(doc(db, "users", userId), {
            uid: userId,
            displayName,
            email,
            photoURL: downloadURL,
          });
  
          // Create user chats document in Firestore
          await setDoc(doc(db, "userChats", userId), {});
  
          // Navigate to home page
          navigate("/home");
        }
      );
    } catch (error) {
      setError("Registration failed: " + error.message);
      setLoading(false);
    }
  };
  

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">VChats</span>
        <span className="register-title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="file" id="file" style={{ display: "none" }} />

          <label htmlFor="file">
            <img src={addAvatar} alt="" />
            <span>Add an avatar</span>
          </label>

          <button type="submit" disabled={loading}>
            Sign up
          </button>

          {error && <span className="error">{error}</span>}
        </form>
        <p>
<<<<<<< HEAD
        You do have an account? <Link to="/login">Login</Link>
=======
        You do have an account? <Link to="/home">Login</Link>
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
        </p>
      </div>
    </div>
  );
};

export default Register;
