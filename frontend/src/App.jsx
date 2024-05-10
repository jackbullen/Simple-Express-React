import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyModelsPage from './pages/MyModelsPage';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col min-h-screen mx-auto text-center">
            <Router>
                {/* <Navbar /> */}
                <div className="flex-grow py-20 px-8 ">
                    <Routes>
                        <Route path="/models" element={<MyModelsPage />} />
                    </Routes>
                </div>
                {/* <Footer /> */}
            </Router>
        </div>
    );
}

export default App;