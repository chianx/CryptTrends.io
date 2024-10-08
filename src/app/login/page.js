// pages/login.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import "./login.css"
import TypingEffect from '@/components/typingEffect';
import SocialMediaIcons from '@/components/footerIcons';

export default function LoginPage() {
  return (
    <div className="loginContainer">
      <Head>
        <title>Login - Crypto Platform</title>
      </Head>

      <video autoPlay muted loop playsInline className="backgroundVideo">
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Flex Container for image and login form */}
      <div className="mainContainer">
        {/* Image Section */}
        <div className="imageContainer">
          <Image src="/logo.png" width="600" height="105" />
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
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="inputField"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div className="inputGroup">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="inputField"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="submitButton">
                  Login
                </button>
              </form>

              {/* Register Link */}
              <div className="registerLink">
                <p>Don't have an account? <a href="/register">Register here</a></p>
              </div>
            </div>

            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
