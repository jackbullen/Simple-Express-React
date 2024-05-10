import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-300 w-full text-white py-6">
            <div className="container text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;