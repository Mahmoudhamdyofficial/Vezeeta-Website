import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../signUp/firebase';
import styles from './Profile.module.css'; // Import custom styles if any

export default function Profile() {
  const { currentUser } = useContext(AuthContext); // Get the current user from context
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
  }); // User data state
  const [loading, setLoading] = useState(true); // Loading state

  // Function to fetch user data from Firestore
  const getUserData = async () => {
    try {
      const docRef = doc(db, 'User', currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    if (currentUser) getUserData();
  }, [currentUser]);

  // Handle input change and update the userData state dynamically
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Function to save the updated profile data to Firestore
  const handleSave = async () => {
    if (!currentUser) return;

    const docRef = doc(db, 'User', currentUser.uid);

    try {
      await updateDoc(docRef, userData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  if (loading) return <p>Loading user data...</p>; // Show loading state

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className={`${styles.card} shadow`}>
            <div className={`${styles['card-header']} bg-primary text-white`}>
              <h4 className="text-center p-2">Manage Profile</h4>
            </div>
            <div className="card-body p-3">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className={styles['form-label']}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className={styles['form-label']}>
                    Email Address
                  </label>
                  <input
                  
                    type="email"
                    className="form-control"
                    id="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className={styles['form-label']}>
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="birthDate" className={styles['form-label']}>
                    Birth Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthDate"
                    value={userData.birthDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex justify-content-around mt-4">
                  <button
                    type="button"
                    className={`${styles.btn} btn-danger`}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button type="button" className={`${styles.btn} btn-light`}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
