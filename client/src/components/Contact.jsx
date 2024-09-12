import React, { useState } from "react";

const Contact = ({ contactActive }) => {
  const [textCopied, setTextCopied] = useState(false);

  const copyText = () => {
    setTextCopied(true);
    navigator.clipboard.writeText("bryanmm212@gmail.com");
    setTimeout(() => {
      setTextCopied(false);
    }, 2000);
  };
  return (
    <>
      <div
        className={`contact-container ${
          contactActive ? "contact-active" : "contact-out"
        }`}
      >
        {textCopied && <p className="text-copied">¡Copied!</p>}
        <button onClick={copyText}>
          <p>
            bryanmm212@gmail.com <i className="fa-solid fa-copy"></i>
          </p>
        </button>
        <a
          target="_blank"
          href="http://www.linkedin.com/in/bryan-martinez-mesa"
          className="linkedin-a"
        >
          <i className="fa-brands fa-linkedin linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Contact;
