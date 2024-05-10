import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth/AuthContext';


function Navbar() {
    const { logout } = useAuth();
    const token = localStorage.getItem('token');
    let isAuthenticated = false;
    if (token) {
        isAuthenticated = true;
    }
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
        <nav className="bg-blue-500 p-4 overflow-auto">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    Home
                </Link>
                <ul className="flex flex-wrap text-center md:flex-row xl:flex-row flex-col md:space-x-6 xl:space-x-6">
                    <li>
                        <NavLink to="/models" className='text-white hover:text-slate-100'>
                            Models
                        </NavLink>
                    </li>
                    <li>
                        {isAuthenticated ? (
                            <>
                                <ul className='flex space-x-3 md:ml-10 lg:ml-10'>
                                    <li>
                                        <NavLink to="/profile" className='text-white hover:text-slate-100 font-semibold'>
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button className="text-white hover:text-slate-100 font-semibold" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <ul className='flex space-x-3 md:ml-10 lg:ml-10'>
                                    <li>
                                        <NavLink to="/login" className='text-white hover:text-slate-100 font-semibold'>
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/register" className='text-white hover:text-slate-100 font-semibold'>
                                            Register
                                        </NavLink>
                                    </li>
                                </ul>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
