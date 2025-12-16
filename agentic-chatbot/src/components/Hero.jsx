import { useNavigate } from "react-router-dom";
import "./../styles/hero.css";
import chatbotvideo from './../assets/chatbot.mp4'

export default function App() {
    const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="landing-left">
      <div className="landing-title">
        <h1>Agentic AI Loan</h1>
        <h1>Assistant</h1>

      </div>

      <p className="landing-subtitle">
        An AI-driven conversational platform that automates the entire personal loan lifecycle—from intelligent lead generation and customer engagement to real-time eligibility checks, credit evaluation, and instant sanction letter generation. The system uses agent-based AI to deliver a seamless, personalized, and human-like loan experience while significantly reducing manual effort, turnaround time, and operational costs for financial institutions.
      </p>
      <button className="cta-button" 
      onClick={() => navigate('/chat')}>
         Start Loan Chatbot
      </button>
        </div>
      
      <div className="landing-right">
  <video
    src={chatbotvideo}
    autoPlay
    loop
    muted
    playsInline
  />
</div>
    </div>
  );
}
