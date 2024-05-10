import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyModel from '../components/MyModel/myModel'; 

function MyModelPage() {
  return (
    <div className="model-container">
      {/* <Navbar /> */}
      <MyModel />
      {/* <Footer /> */}
    </div>
  );
}

export default MyModelPage;
