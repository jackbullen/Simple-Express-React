import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post(`http://127.0.0.1:3000/api/auth/login`, formData);

            const token = response.data.token;
            const Id = response.data.userId;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', Id);
            console.log('Login response:', response.data);
            login();
            setIsLoading(false);
            navigate('/profile');
        } catch (error) {
            setError("Login failed.");
            setIsLoading(false);
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                {error && <div className="text-red-600 mb-2">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging In...' : 'Login'}

                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;
