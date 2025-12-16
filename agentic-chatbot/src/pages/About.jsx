import React from "react";
import Navbar from "../components/Navbar";
import "./../styles/about.css";
import about1 from './../assets/about1.png'
import about2 from './../assets/about2.png'
import about3 from './../assets/about3.png'
import about4 from './../assets/about4.png'
import about5 from './../assets/about5.png'

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="about-container">
        <h1>About the Agentic AI Loan Chatbot</h1>
        
        <div className="para">
        <p>
          The Agentic AI Loan Chatbot is an intelligent, rule-driven conversational
          system designed to automate the end-to-end loan application process.
          It simulates real-world financial workflows used by banks and NBFCs
          while maintaining transparency, explainability, and scalability.
        </p>
        <div className="about-img">
            <img src={about1} alt="" />
        </div>

        </div>

        <div className="para">
            <div className="about-img">
                <img src={about2} alt="" />
            </div>
         <p>
          Unlike traditional chatbots that rely only on scripted responses, this
          system follows an agentic architecture where multiple specialized
          agents collaborate to complete a loan decision. Each agent is
          responsible for a specific task such as requirement gathering,
          identity verification, credit evaluation, underwriting, and sanctioning.
        </p>

        </div>
        
        <div className="para">
        <p>
          A master agent orchestrates the entire flow, ensuring that every step
          follows defined business rules and compliance constraints. This
          approach mirrors enterprise-grade loan processing systems while
          remaining lightweight and easy to extend.
        </p>
        <div className="about-img">
            <img src={about3} alt="" />
        </div>
        </div>


        <div className="para">
            <div className="about-img">
                <img src={about4} alt="" />
            </div>
        <p>
          To keep the system simple and testable, mock APIs are used to simulate
          external services such as customer databases, credit bureaus, and
          offer-mart systems. This allows the chatbot to function without relying
          on a database or third-party integrations.
        </p>
        </div>

        <div className="para">
            <p>
          The project is built with a clear separation between frontend and
          backend, making it suitable for future enhancements such as real API
          integrations, database support, or AI-powered decision models.
        </p>
            <div className="about-img">
                <img src={about5} alt="" />
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
