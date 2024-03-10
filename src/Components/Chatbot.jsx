import React, { useState } from 'react';
import backgroundImage from '../images/home-bg.jpeg';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [legalAdvice, setLegalAdvice] = useState('');

  const getLegalAdvice = async () => {
    const response = await fetch('http://localhost:8000/get_legal_advice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setLegalAdvice(data.legal_advice);
  };

  const formatHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="container p-4 bg-white bg-opacity-70 rounded-md"
        style={{ width: '60%', overflowY: 'auto' }}
      >
        <h1 className="text-3xl font-bold mb-4">Legal Advice Chatbot</h1>
        <textarea
          className="border p-2 mb-4 w-full"
          placeholder="Ask a legal question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button className="bg-black text-white p-2" onClick={getLegalAdvice}>
          Get Legal Advice
        </button>
        {legalAdvice && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Legal Advice:</h2>
            <div
              className="overflow-auto"
              style={{ maxHeight: '200px' }}
              dangerouslySetInnerHTML={formatHTML(legalAdvice)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Chatbot;
