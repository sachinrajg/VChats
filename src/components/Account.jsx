// Account.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { db } from '../firebase';
//import { Link } from 'react-router-dom';
import '../style.scss';

const Account = () => {
  const { currentUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(currentUser.displayName);
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL);
  const [error, setError] = useState(null);

  const handleDisplayNameChange = async () => {
    try {
      // Update user profile in Firebase Authentication
      await updateProfile(currentUser, {
        displayName: displayName,
        photoURL: photoURL
      });

      // Update user document in Firestore
      await db.collection('users').doc(currentUser.uid).set({
        displayName: displayName,
        photoURL: photoURL
      }, { merge: true });

      setError(null); // Reset error if previous submission caused an error
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePhotoURLChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhotoURL(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleDisplayNameChange();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="account-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Display Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label>Change Photo:</label>
          <input type="file" onChange={handlePhotoURLChange} />
        </div>
        <div className='profile-container'> 
          {/* Display the profile image */}
          <img src={photoURL} alt="Profile" className="profile-image" />
        </div>
        <button type="submit">Save</button>
      </form>
      {/* Show error message if there's an error */}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Account;
