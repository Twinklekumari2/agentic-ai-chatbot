import { useState } from "react";
import "./../styles/chat.css";

export default function App() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome! I’m your AI Loan Assistant. What is your monthly salary?" }
  ]);

  const [input, setInput] = useState("");
  const [step, setStep] = useState("salary");

  const [data, setData] = useState({
    salary: 0,
    amount: 0,
    tenure: 0,
    creditScore: 0,
    preApproved: 500000
  });

  const add = (from, text) =>
    setMessages((m) => [...m, { from, text }]);

  /* -------------------- AGENTS -------------------- */

  const kycAgent = () => ({ status: "Verified" });

  const creditAgent = () => ({ score: 760 });

  const underwritingAgent = ({ salary, amount, creditScore, preApproved }) => {
    if (creditScore < 700) return { status: "REJECT", reason: "Low credit score" };

    if (amount <= preApproved) return { status: "INSTANT_APPROVAL" };

    if (amount > 2 * preApproved)
      return { status: "REJECT", reason: "Amount exceeds eligibility" };

    const emi = amount / 36;
    if (emi > salary * 0.5)
      return { status: "REJECT", reason: "EMI exceeds 50% salary" };

    return { status: "CONDITIONAL_APPROVAL" };
  };

  /* -------------------- CHAT FLOW -------------------- */

  const handleSend = () => {
    if (!input) return;
    add("user", input);

    /* SALES AGENT */
    if (step === "salary") {
      setData((d) => ({ ...d, salary: Number(input) }));
      add("bot", "How much loan amount do you need?");
      setStep("amount");
    }

    else if (step === "amount") {
      setData((d) => ({ ...d, amount: Number(input) }));
      add("bot", "What tenure do you prefer (months)?");
      setStep("tenure");
    }

    /* VERIFICATION AGENT */
    else if (step === "tenure") {
      setData((d) => ({ ...d, tenure: Number(input) }));
      add("bot", "Verifying KYC...");
      setTimeout(() => {
        const kyc = kycAgent();
        add("bot", `KYC Status: ${kyc.status}`);
        add("bot", "Checking credit score...");
        setStep("credit");
      }, 800);
    }

    /* UNDERWRITING AGENT */
    else if (step === "credit") {
      setTimeout(() => {
        const credit = creditAgent();
        add("bot", `Credit Score: ${credit.score}`);

        const decision = underwritingAgent({
          ...data,
          creditScore: credit.score
        });

        if (decision.status === "REJECT") {
          add("bot", `❌ Loan Rejected: ${decision.reason}`);
          setStep("done");
          return;
        }

        if (decision.status === "INSTANT_APPROVAL") {
          add("bot", "✅ Instant Approval! Generating sanction letter...");
          setStep("approved");
          return;
        }

        if (decision.status === "CONDITIONAL_APPROVAL") {
          add("bot", "📄 Please upload your salary slip for final approval.");
          setStep("salarySlip");
        }
      }, 1000);
    }

    /* CONDITIONAL APPROVAL */
    else if (step === "salarySlip") {
      add("bot", "Salary slip received ✅");
      add("bot", "Final approval granted. Generating sanction letter...");
      setStep("approved");
    }

    setInput("");
  };

  /* -------------------- UI -------------------- */

  return (
    <div className="app-container">
      <h2 className="title">🤖 Agentic AI Loan Chatbot</h2>

      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={`row ${m.from}`}>
            <span className={`msg ${m.from}`}>{m.text}</span>
          </div>
        ))}
      </div>

      {step !== "approved" && step !== "done" && (
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      )}

      {step === "approved" && (
        <div className="sanction-box">
          <h3>✅ Sanction Letter</h3>
          <p><b>Loan Amount:</b> ₹{data.amount}</p>
          <p><b>Tenure:</b> {data.tenure} months</p>
          <p><b>Interest Rate:</b> 10.5%</p>
          <p><b>Status:</b> Approved</p>
        </div>
      )}
    </div>
  );
}
