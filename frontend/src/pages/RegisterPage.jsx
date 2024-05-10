import React from 'react';
import Register from '../components/Auth/Register';

function RegisterPage() {
  return (
    <div className='app flex flex-col h-screen justify-between'>
      <div>
        <Register />
      </div>
    </div>
  );
}

export default RegisterPage;
