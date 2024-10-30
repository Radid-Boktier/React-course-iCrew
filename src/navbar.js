import React from 'react';

const Navbar = () => {
  return (
    <div className="ud-header">
      <div className="container">
        <a href="index.html" className="navbar-logo">
          <img src="/images/logo/ICrew.png" alt="logo" className="header-logo" />
        </a>

        <ul className="navbar-list">
          <li className="group">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="group">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="group">
            <a href="#pricing" className="nav-link">Pricing</a>
          </li>
          <li className="group">
            <a href="blog-grids.html" className="nav-link">Blog</a>
          </li>
        </ul>

        {/* Sign In / Sign Up Buttons */}
        <div className="auth-buttons">
          <a href="signin.html" className="loginBtn">Sign In</a>
          <a href="signup.html" className="signUpBtn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
