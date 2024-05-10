import React from 'react';
import Login from '../components/Auth/Login';

function LoginPage() {
    return (
        <div className='app flex flex-col h-screen justify-between'>
            <div>
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
