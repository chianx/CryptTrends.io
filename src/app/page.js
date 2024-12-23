"use client";
import React, { useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Image from "next/image";
import "./page.css"
import Layout from "@/components/layout";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const containerStyle = {
    position: 'relative',
    // width: '30%', 
    // minWidth: '266px',
    backgroundColor: '#1C1C1E',
    color: '#fff', 
    marginRight: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    padding: '12px 15px 5px 15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'height 0.3s ease',
    overflow: 'hidden', 
    border: "2px solid #33CDD3",
  };

  const titleStyle = {
    position: 'absolute',
    top: '10px',
    left: '14px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const contentStyle = {
    marginTop: '32px',
    fontSize: '14px',
  };

  function showContent(text, wordLimit) {
    const wordsArray = text.split(' ');
    const slicedArray = wordsArray.slice(0, wordLimit);
    return slicedArray.join(' ');
  }
  return (
    <div style={containerStyle}>
      {/* About Title */}
      <span style={titleStyle}>About</span>

      {/* About Content */}
      <div style={contentStyle}>
        <p>
          {showContent("This is a brief description about the component. You can provide an overview or introductory text here. The rest of the content will be visible when you click on the Read More button. introductory text here. The rest of the content will be visible when you click on the Read More button. introductory text here. The rest of the content will be visible when you click on the Read More button.", expanded? 100000 : 25 )} 
          <span onClick={toggleExpand} style={{color:"#33CDD3"}}>{expanded? " read less" : " ...read more"}</span>
        </p>
      </div>
    </div>
  );
};

export function EmbedVideo() {
  const videoId = 'rqt1hLrLzrA'; // Replace with your YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // YouTube thumbnail URL

  const videoContainer = {
    position: 'relative',
    display: 'flex',
    // width: '30%',
    // minWidth: '300px',
    backgroundColor: '#1C1C1E',
    height: 'auto',
    cursor: 'pointer',
    marginRight: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const playButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (

      <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      style={videoContainer}
    >
      <img
        src={thumbnailUrl}
        alt="YouTube Thumbnail"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={titleStyle}>Walkthrough</div>
      <div style={playButtonStyle}>
        <i className="fa fa-play" aria-hidden="true"></i>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <Layout>
      <Script
        src="https://code.highcharts.com/highcharts.js"
        strategy="afterInteractive" 
      />
      <Script
        src="https://code.highcharts.com/modules/accessibility.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://code.highcharts.com/stock/modules/exporting.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://code.highcharts.com/stock/modules/export-data.js"
        strategy="afterInteractive"
      />
      <Script
        src="/marketDepthScript.js"
        strategy="afterInteractive"
      />
      <Script
        src="/orderBookScript.js"
        strategy="afterInteractive"
      />
      <div className="orderBookContainer">
        <div style={{display:"flex"}}>
          <div style={{width:"40%"}}>
            <EmbedVideo />
            <About />
          </div>
          <div style={{width:"60%"}}>
            <div id="orderBook"></div>
            <button id="animation-toggle" class="highcharts-demo-button">Stop animation</button>
          </div>
        </div>
        <div id="container"></div>
        

        
      </div>
    </Layout>
  );
}
