import { useState } from "react";
import "./../styles/chat.css";

export default function App() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! 👋 I’m Tata Capital’s virtual loan assistant. What is your monthly income?"
    }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("income");
  const [userData, setUserData] = useState({});

  const addMessage = (from, text) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  // Worker Agents (Mock)
  const kycAgent = () => ({ status: "Verified" });
  const creditAgent = () => ({ score: 760 });
  const underwritingAgent = (score) =>
    score > 700 ? "Approved" : "Manual Review";

  const handleSend = () => {
    if (!input) return;

    addMessage("user", input);

    if (step === "income") {
      setUserData({ income: input });
      addMessage("bot", "Great! How much loan amount are you looking for?");
      setStep("loan");
    } else if (step === "loan") {
      setUserData((prev) => ({ ...prev, loan: input }));
      addMessage("bot", "Thanks! Verifying your KYC...");
      setTimeout(() => {
        const kyc = kycAgent();
        addMessage("bot", `KYC Status: ${kyc.status}`);
        addMessage("bot", "Checking credit score...");
        setStep("credit");
      }, 800);
    } else if (step === "credit") {
      setTimeout(() => {
        const credit = creditAgent();
        addMessage("bot", `Credit Score: ${credit.score}`);
        const decision = underwritingAgent(credit.score);
        addMessage("bot", `Loan Decision: ${decision}`);
        addMessage("bot", " Generating sanction letter...");
        setStep("done");
      }, 800);
    }

    setInput("");
  };

  return (
    <div className="app-container">
      <h2 className="title"> Agentic AI Loan Chatbot</h2>

      <div className="chat-box">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`message-row ${m.from === "bot" ? "bot" : "user"}`}
          >
            <span className={`message ${m.from}`}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      {step !== "done" && (
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here..."
            className="chat-input"
          />
          <button onClick={handleSend} className="send-btn">
            Send
          </button>
        </div>
      )}

      {step === "done" && (
        <div className="sanction-box">
          <h3>✅ Sanction Letter</h3>
          <p><b>Loan Amount:</b> ₹5,00,000</p>
          <p><b>Tenure:</b> 36 Months</p>
          <p><b>Interest Rate:</b> 10.5%</p>
          <p><b>Status:</b> Approved</p>
        </div>
      )}
    </div>
  );
}
