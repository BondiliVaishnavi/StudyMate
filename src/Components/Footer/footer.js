import React from 'react';
import '../Footer/footer.css';

const Footer =()=>{
    return (
        <>
        <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} StudyMate. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms</a>
        </div>
      </div>
    </footer>
        </>
    )
}
export default Footer;