import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import MyModelsPage from './pages/MyModelsPage';
import ProgramPage from './pages/ProgramPage';
import CoursePage from './pages/CoursePage';
import DegreePage from './pages/DegreePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <AuthProvider>
            <div className="flex flex-col min-h-screen mx-auto text-center">
                <Router>
                    <Navbar />
                    <div className="flex-grow py-10 px-8 ">
                        <Routes>
                            <Route path="/" element={<MyModelsPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/programs" element={<ProgramPage />} />
                            <Route path="/courses" element={<CoursePage />} />
                            <Route path="/degrees" element={<DegreePage />} />
                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </div>
        </AuthProvider>
    );
}

export default App;