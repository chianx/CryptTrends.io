import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import "./signup.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import TypingEffect from '@/components/typingEffect';
import SocialMediaIcons from '@/components/footerIcons';

export default function SignupPage() {
  return (
    <div className="signupContainer">
      <Head>
        <title>Signup - Crypto Platform</title>
      </Head>

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="backgroundVideo">
        <source src="/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Flex Container for image and signup form */}
      <div className="mainContainer">
        {/* Image Section */}
        <div className="imageContainer">
          <img src="/logo.png" className="logo" alt="Logo" />
            <TypingEffect size={32} />
        </div>

        {/* Form Section */}
        <div className="formSection">
          <div className="container">
            <div className="hideLargeScreen">
              <Image src="/logo.png" width="300" height="52" alt="Logo" />
              <TypingEffect size={32} />
            </div>

            {/* Signup Form Section */}
            <div className="formContainer">
              <h2 className="title">Sign Up</h2>
              <form>
                {/* Full Name Field */}
                <div className="inputGroup">
                  <label htmlFor="fullName">Full Name</label>
                  <div className='inputWithIcon'>
                  <FiUserPlus className='icon' />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="inputField"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

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
                  </div>
                  
                </div>

                {/* Confirm Password Field */}
                <div className="inputGroup">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className='inputWithIcon'>
                    <MdOutlineLock className='icon' />
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      className="inputField"
                      placeholder="Confirm your password"
                    />
                    <i className="togglePassword fa fa-eye-slash"></i>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submitButton">
                  Sign Up
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
                <span className="button-text">Sign up with Google</span>
              </button>


              {/* Register Link */}
              <div className="registerLink">
                <p>Already have an account? <a href="/login">Login</a></p>
              </div>
            </div>

            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
}