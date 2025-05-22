import React from "react";
import 'primeicons/primeicons.css';
import '../Home/index.css';
import  hero1 from '../../assets/images/hero1.png';
import {Link } from "react-router-dom";

const Home = () => {
  return (<>
     <div className="bodysection">
      <div className="hero-section">
        
      {/* <div className="hero1"><img src={hero1}/></div> */}
        <center> 
        <h1 > Find Your Perfect Study Partner in Seconds</h1>
        <h3>Connect with motivated students who share your academic goals and learning style</h3>
          <Link to='/Signup'><button id='login'>Start Free Now →</button></Link>
        </center>
      </div>
      <div className="working">
  <h2>How it works?</h2>
  
  <div className="steps-container"> 
    <div className="step">
      <span className="pi pi-user" style={{ fontSize: '3.5rem', color: 'black' }}></span>
      <h2>SignUp/Login</h2>
      <p>Create your Study Mate profile in minutes.</p>
    </div>
    
    <div className="step">
      <span className="pi pi-check-square" style={{ fontSize: '3.5rem', color: 'black' }}></span>
      <h2>Choose your Interests</h2>
      <p>Select your subjects, goals, and availability.</p>
    </div>
    
    <div className="step">
      <span className="pi pi-users" style={{ fontSize: '3.5rem', color: 'black' }}></span>
      <h2>Get Matched</h2>
      <p>Get paired with a compatible study partner.</p>
    </div>
    
    <div className="step">
      <span className="pi pi-linkedin" style={{ fontSize: '3.5rem', color: 'black' }}></span>
      <h2>Connect & Collaborate</h2>
      <p>View their LinkedIn, connect, and start learning.</p>
    </div>
  </div>
</div>
  <center>
  <div className="features">
    <h2>Why StudyMate?</h2>
    <ul>
      <li>Smart Matching System</li>
      <li>No chat.Just Connection</li>
      <li>Focus on Learning Together</li>
      <li>Supports Diverse Learning Goals</li>
    </ul>
  </div>
  
     <div className="body-end">
      <h2>Ready to Find your Study Partner?</h2>
      <p> Join StudyMate and make Studying more productive & fun.</p>
      <button  src='/Login'id='login'>get started now</button>
     </div>
     </center>
     </div>
  </>);
};

export default Home;
