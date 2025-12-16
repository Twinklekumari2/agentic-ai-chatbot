import { useNavigate } from "react-router-dom";
import "./../styles/hero.css";

export default function App() {
    const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="landing-left">
      <div className="landing-title">
        <h3>Agentic</h3>
        <h2>AI Loan</h2>
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
      <section className="section">
        <h3> Key Features</h3>
        <ul>
          <li>Human-like conversational loan experience</li>
          <li>Master Agent coordinating multiple AI agents</li>
          <li>Instant eligibility & credit evaluation</li>
          <li>Automated sanction letter generation</li>
        </ul>
      </section>

      <section className="section">
        <h3> Who Is This For?</h3>
        <ul>
          <li>NBFCs & Financial Institutions</li>
          <li>Retail loan customers</li>
          <li>Sales & Operations teams</li>
        </ul>
      </section>
      </div>
    </div>
  );
}
