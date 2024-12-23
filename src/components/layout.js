// components/Layout.js
"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TfiDashboard } from "react-icons/tfi";
import { FiBook } from "react-icons/fi";
import { MdCandlestickChart, MdOutlinePattern, MdOutlineAreaChart, MdOutlineAddchart   } from "react-icons/md";
import { TbBrandStocktwits } from "react-icons/tb";
import { FaRegFileCode, FaAt, FaRegStar, FaRegHeart   } from "react-icons/fa";

import "./layout.css"; // Regular CSS file

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
  
    return (
      <div className="layout">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="logo">
            <img src="/logo.png" className="logoImage" />
          </div>
          {/* Close button for small screens */}
          <button className="close-btn" onClick={closeSidebar}>
            &times; {/* Close icon */}
          </button>
          <nav>
            <ul>
              <li className="sideLink"><Link href="/"><TfiDashboard size={26} /><span>Dasboard</span></Link></li>
              <li className="activeSideLink sideLink"><Link href="/"><FiBook size={24} /><span>Order Book</span></Link></li>
              <li className="sideLink"><Link href="/services"><TbBrandStocktwits size={24} /><span>Net Volume</span></Link></li>
              <li className="sideLink"><Link href="/services"><MdCandlestickChart  size={24} /><span>Market Divergence</span></Link></li>
              <li className="sideLink"><Link href="/services"><MdOutlinePattern size={24} /><span>Pattern Recognition</span></Link></li>
              <li className="sideLink"><Link href="/services"><MdOutlineAreaChart  size={24} /><span>S&R Channels</span></Link></li>
              <li className="sideLink"><Link href="/services"><MdOutlineAddchart  size={24} /><span>Strategies</span></Link></li>
              <li className="sideLink"><Link href="/services"><FaRegHeart  size={24} /><span>Memecoins Socials</span></Link></li>
              <li className="sideLink"><Link href="/services"><FaRegFileCode size={24} /><span>API Documentation</span></Link></li>
              <li className="sideLink"><Link href="/services"><FaAt size={24} /><span>Contact Us</span></Link></li>
              <li className="sideLink"><Link href="/services"><FaRegStar size={24} /><span>Premium</span></Link></li>
            </ul>
          </nav>
        </aside>
  
        {/* Main content and navbar */}
        <div className="mainContent">
          <header className="navbar">
            <div className="hamburger" onClick={toggleSidebar}>
              &#9776; {/* Hamburger icon */}
            </div>
            <div className="links">
              <Link href="/profile">Profile</Link>
              <Link href="/settings">Settings</Link>
              {/* <Link href="/login"><div className="loginButton">Login</div></Link> */}
              <Link href="/login" className="loginButton">Login</Link>
            </div>
          </header>
          <main style={{padding: "30px 5%"}}>{children}</main>
        </div>
      </div>
    );
};
  
export default Layout;
