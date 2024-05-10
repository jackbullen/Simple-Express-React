import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="container mx-auto text-sm items-stretch">
        <p>
          Made with <span className="text-red-500">&hearts;</span>
        </p>
        {/* <div className="flex flex-row gap-3 justify-center">
          <a href="/">Home</a>
          <a href="/sessions">Sessions</a>
          <a href="/resources">Resources</a>
          <a href="/matches">Find Matches</a>
          <a href="/profile">Profile</a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Polyglot Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
