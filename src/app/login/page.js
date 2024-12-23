// pages/login.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import "./login.css"
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import TypingEffect from '@/components/typingEffect';
import SocialMediaIcons from '@/components/footerIcons';

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <Head>
        <title>Login - Crypto Platform</title>
      </Head>

      <video autoPlay muted loop playsInline className="backgroundVideo">
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Flex Container for image and login form */}
      <div className="mainContainer">
        {/* Image Section */}
        <div className="imageContainer">
          <img src="/logo.png" className='logo' />
          <span style={{paddingLeft:70}}><TypingEffect size={32} /> </span>
        </div>

        {/* Form Section */}
        <div className="formSection">
          <div className="container">
            <div className="hideLargeScreen">
              <Image src="/logo.png" width="300" height="52" />
              <TypingEffect size={24} />
            </div>
          
            {/* Login Form Section */}
            <div className="formContainer">
              <h2 className="title">Login</h2>
              <form>
                {/* Email Field */}
                <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                    <div className='inputWithIcon'>
                      <FaRegUserCircle className='icon' />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="inputField"
                        placeholder="Enter your email"
                      />
                    </div>
                </div>

                {/* Password Field */}
                <div className="inputGroup">
                  <label htmlFor="password">Password</label>
                  <div className='inputWithIcon'>
                  <MdOutlineLock className='icon' />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="inputField"
                      placeholder="Enter your password"
                    />
                    <i className="togglePassword fa fa-eye-slash"></i>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submitButton">
                  Login
                </button>
              </form>

              <div className="or-separator">
                <hr className="line" />
                <span className="or-text">or</span>
                <hr className="line" />
              </div>

              <button className="google-signin-button">
                <img
                  src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png"
                  alt="Google icon"
                  className="google-icon"
                />
                <span className="button-text">Sign in with Google</span>
              </button>


              {/* Register Link */}
              <div className="registerLink">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
              </div>
            </div>

            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
