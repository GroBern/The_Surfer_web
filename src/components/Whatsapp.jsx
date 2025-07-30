import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MessageCircleMore } from "lucide-react";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* WhatsApp Button */}
      <div className="whatsapp" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircleMore className="text-white" size={24} />
      </div>

      {/* WhatsApp Form */}
      <div className={`whatsapp-form ${isOpen ? "open" : ""}`}>
        <h3>WhatsApp Inquiry</h3>
        <form>
          <input className="text-black" type="text" placeholder="Enter your name" required/>
          <input className="text-black" type="email" placeholder="Enter your email" required/>
          <input className="text-black" type="text" placeholder="Enter your country" required/>
          <input className="text-black" type="text" placeholder="Enter your whatsapp number" required/>
          <textarea className="text-black" placeholder="Enter your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Whatsapp;
