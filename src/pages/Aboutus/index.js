import React from "react";
import '../Aboutus/index.css';
const Aboutus =()=>{
  return(
    <>
 
    <div className="about-container">
      <h1>About StudyMate</h1>
      <p className="intro">
        StudyMate is a platform designed to help students preparing for competitive exams like <strong>GATE</strong> find compatible study partners.
        Whether you're looking to share resources, stay accountable, or discuss tough concepts – we make it easier.
      </p>

      <div className="section">
        <h2>🎯 Our Aim</h2>
        <p>
          Our mission is to connect like-minded learners across universities to build strong, goal-oriented study collaborations.
          We believe preparation is better together – and StudyMate is here to make that connection simple and meaningful.
        </p>
      </div>

      <div className="section">
        <h2>💡 Features</h2>
        <ul>
          <li>Match with students preparing for the same goal</li>
          <li>View LinkedIn profiles of your matched partners</li>
          <li>Track goals and stay accountable</li>
          <li>No unnecessary chat – just focused learning!</li>
        </ul>
      </div>

      <div className="section">
        <h2>🚀 Future Plans</h2>
        <p>
          We're working to integrate personalized study timelines, resource sharing, and progress tracking. 
          The goal? Help every student prep smarter, not harder.
        </p>
      </div>
    </div>
    <div className="feedback-section">
  <h2>📢 We Value Your Feedback</h2>
  <p>Let us know your thoughts, suggestions, or issues – we’re constantly improving!</p>
  <form>
    <textarea
      placeholder="Write your feedback here..."
      rows="4"
      className="feedback-input"
    ></textarea>
    <br />
    <button type="submit" className="submit-btn">Submit Feedback</button>
  </form>
</div>

  

    </>
  );

};
export default Aboutus;