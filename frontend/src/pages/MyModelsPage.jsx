import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyModel from '../components/MyModel/myModel';
import logo from '../assets/logo.svg';

function MyModelPage() {
    return (
        <div className="flex flex-wrap justify-center items-center bg-white-800 p-4 shadow-lg rounded-lg">
            <a href="https://github.com/jackbullen/Simple-Express-React" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <MyModel />
        </div>
    );
}

export default MyModelPage;
