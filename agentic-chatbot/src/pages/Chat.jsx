import { useState } from "react";
import axios from "axios";
import "./../styles/chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome. Please enter your Customer ID." }
  ]);

  const [input, setInput] = useState("");
  const [step, setStep] = useState("customerId");

  const [formData, setFormData] = useState({
    customerId: "",
    salary: 0,
    amount: 0,
    tenure: 0
  });

  const [sanction, setSanction] = useState(null);

  const addMessage = (from, text) => {
    setMessages((prev) => [...prev, { from, text }]);
  };

  const handleSend = async () => {
    if (!input) return;

    addMessage("user", input);

    /* CUSTOMER ID */
    if (step === "customerId") {
      setFormData((d) => ({ ...d, customerId: input }));
      addMessage("bot", "Enter your monthly salary.");
      setStep("salary");
    }

    /* SALARY */
    else if (step === "salary") {
      setFormData((d) => ({ ...d, salary: Number(input) }));
      addMessage("bot", "Enter required loan amount.");
      setStep("amount");
    }

    /* LOAN AMOUNT */
    else if (step === "amount") {
      setFormData((d) => ({ ...d, amount: Number(input) }));
      addMessage("bot", "Enter preferred tenure in months.");
      setStep("tenure");
    }

    /* TENURE → BACKEND CALL */
    else if (step === "tenure") {
      const payload = { ...formData, tenure: Number(input) };
      setFormData(payload);

      addMessage("bot", "Processing your loan application.");

      try {
        const response = await axios.post(
          "http://localhost:5000/api/loan/apply",
          payload
        );

        const result = response.data;

        if (result.status === "REJECT") {
          addMessage("bot", `Loan rejected. Reason: ${result.reason}`);
          setStep("done");
        }

        else if (result.status === "CONDITIONAL_APPROVAL") {
          addMessage("bot", "Conditional approval granted.");
          addMessage("bot", "Please upload salary slip to proceed.");
          addMessage("bot", "Type 'uploaded' after upload.");
          setStep("salarySlip");
        }

        else if (result.status === "APPROVED") {
          addMessage("bot", "Loan approved. Generating sanction letter.");
          setSanction(result.sanction);
          setStep("approved");
        }

      } catch (error) {
        addMessage("bot", "Server error. Please try again later.");
        setStep("done");
      }
    }

    /* SALARY SLIP CONFIRMATION */
    else if (step === "salarySlip") {
      addMessage("bot", "Salary slip received.");
      addMessage("bot", "Final approval granted.");

      setSanction({
        loanAmount: formData.amount,
        tenure: formData.tenure,
        interestRate: "10.5%",
        status: "APPROVED"
      });

      setStep("approved");
    }

    setInput("");
  };

  return (
    <div className="app-container">
      <div className="container-upper">
      
       <FontAwesomeIcon icon={faBackward} onClick={() => navigate('/')} className="icon" />
      <h2 className="title">Agentic AI Loan Chatbot</h2>
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`row ${msg.from}`}>
            <span className={`msg ${msg.from}`}>{msg.text}</span>
          </div>
        ))}
      </div>

      {step !== "approved" && step !== "done" && (
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here"
          />
          <button onClick={handleSend}>Send</button>
        </div>
      )}

      {step === "approved" && sanction && (
        <div className="sanction-box">
          <h3>Sanction Letter</h3>
          <p><b>Loan Amount:</b> {sanction.loanAmount}</p>
          <p><b>Tenure:</b> {sanction.tenure} months</p>
          <p><b>Interest Rate:</b> {sanction.interestRate}</p>
          <p><b>Status:</b> {sanction.status}</p>
        </div>
      )}
    </div>
  );
}
