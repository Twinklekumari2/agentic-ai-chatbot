import React from "react";
import Navbar from "../components/Navbar";
import './../styles/feature.css';
import features from './../assets/features.png'

const Features = () => {
  return (
    <div className="features-page">
      <Navbar />

      <div className="features-container">
        <div className="feature-left">
        <h1>Agentic AI Chatbot Features</h1>  
        <ul className="features-list">
          <li>
            <span className="text-bold">Multi-Agent</span> Architecture with a Master Agent coordinating all decisions
          </li>

          <li>
            <span className="text-bold">Sales Agent</span> to collect customer requirements such as salary, loan amount,
            and tenure through conversational flow
          </li>

          <li>
            <span className="text-bold">Verification Agent</span> that performs KYC validation using mock CRM data
          </li>

          <li>
            <span className="text-bold">Credit Agent</span> that fetches credit score from a simulated credit bureau
          </li>

          <li>
            <span className="text-bold">Offer Mart</span> integration to retrieve pre-approved loan limits
          </li>

          <li>
            <span className="text-bold">Underwriting Agent</span> that applies business rules and eligibility checks
          </li>

          <li>
            Rule-based <span className="text-bold">decision engine</span> supporting instant approval, conditional
            approval, and rejection
          </li>

          <li>
            Conditional approval flow requiring salary <span className="text-bold">slip verification</span>
          </li>

          <li>
            <span className="text-bold">Sanction Agent</span> that generates loan sanction details upon approval
          </li>

          <li>
             <span className="text-bold">Real-time chatbot</span> conversation with backend-driven decisioning
          </li>

          <li>
            Mock APIs simulating real <span className="text-bold">NBFC</span> systems without using a database
          </li>

          <li>
            <span className="text-bold">Frontend-backend</span> separation for scalable system design
          </li>

          <li>
            Deterministic, explainable decisions suitable for regulated financial
            systems
          </li>

          <li>
            Easy extensibility to plug in real APIs, databases, or AI models
          </li>
        </ul>
        </div>
      <div className="feature-img">
        <img src={features} alt="features" />
      </div>
      </div>
    </div>
  );
};

export default Features;
