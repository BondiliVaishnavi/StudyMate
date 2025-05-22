import React, { useEffect, useState } from "react";
import "./index.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const StudyMatch = () => {
    const [matchedPartners, setMatchedPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMatchedPartners = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('http://localhost:5001/auth/matched-partners', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (response.data && response.data.length > 0) {
                    setMatchedPartners(response.data);
                } else {
                    setError('No matched partners found. Try updating your profile preferences.');
                }
                setLoading(false);
            } catch (err) {
                if (err.response?.status === 401) {
                    navigate('/login');
                } else {
                    setError(err.response?.data?.message || 'Failed to load matched partners');
                }
                setLoading(false);
            }
        };

        fetchMatchedPartners();
    }, [navigate]);

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Implement feedback submission logic here
        console.log('Feedback submitted:', feedback);
        alert('Thank you for your feedback!');
        setFeedback('');
    };

    if (loading) return (
        <div className="match-container">
            <div className="loading-spinner"></div>
            <p>Finding your perfect study partners...</p>
        </div>
    );

    if (error) return (
        <div className="match-container">
            <h1>Matched Study Partners</h1>
            <p className="error-message">{error}</p>
        </div>
    );

    return (
        <>
            <div className="match-container">
                <h1>Matched Study Partners</h1>
                <div className="partner-list">
                    {matchedPartners.length > 0 ? (
                        matchedPartners.map((partner, index) => (
                            <div key={index} className="partner-card">
                                <h2>{partner.name}</h2>
                                <p><strong>University:</strong> {partner.college}</p>
                                <p><strong>Year:</strong> {partner.year}</p>
                                <p><strong>Goal:</strong> {partner.goal}</p>
                                {partner.linkedin && (
                                    <a
                                        href={partner.linkedin.startsWith('http') ? partner.linkedin : `https://${partner.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="linkedin-btn"
                                    >
                                        View LinkedIn
                                    </a>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No matched partners found.</p>
                    )}
                </div>
            </div>
            
            <div className="feedback-section">
                <h2>📢 We Value Your Feedback</h2>
                <p>Tell us how your match experience went!</p>
                <form onSubmit={handleFeedbackSubmit}>
                    <textarea
                        placeholder="Write your feedback here..."
                        rows="4"
                        className="feedback-input"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                    <br />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </>
    );
};

export default StudyMatch;