import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const { logout } = useAuth();
    useEffect(() => {

        const token = localStorage.getItem('token');

        if (!token) {
            console.log('No token found, redirecting to login');
            navigate('/login')
            return;
        }

        const userId = localStorage.getItem('userId');

        if (!userId) {
            console.error('User ID not available');
            return;
        }

        const headers = {
            Authorization: `Bearer ${token}`,
        }
        axios.get(`http://localhost:3000/api/users/profile/${userId}`, { headers })
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDeleteAccount = async () => {
        const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');

        if (confirmed) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (!token || !userId) {
                console.error('Token or User ID not available');
                logout();
                return;
            }

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            try {
                await axios.delete(`http://localhost:3000/api/users/profile/${userId}`, { headers });
                navigate('/login');
                logout();
            } catch (error) {
                console.error('Failed to delete user account:', error);
            }
        }
    };

    return (
        <div>
            {userData ? (
                <div>
                    <h1>{userData.username}'s Profile</h1>
                    <p>Email: {userData.email}</p>
                    <p>
                        Learning:
                        {userData.learning ? userData.learning.map((learning) => (
                            <p key={learning}>{learning}</p>
                        )) : null}
                    </p>
                    <p>
                        Teaching:
                        {userData.teaching ? userData.teaching.map((learning) => (
                            <p key={learning}>{learning}</p>
                        )) : null}
                    </p>
                    <button
                        onClick={handleDeleteAccount}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow-md"
                    >
                        Delete Account
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
