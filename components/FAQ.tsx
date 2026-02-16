import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        {question}
        <div className="faq-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="faq-answer">
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: "how much does the service cost?", a: "the cost depends on the complexity and scope of your project. please contact me directly, and i'll provide a custom quote tailored to your specific needs." },
    { q: "what do i need to get started?", a: "to get started, simply provide your content, brand guidelines, and any references you have in mind. i'll take care of the rest!" },
    { q: "how long does it take to complete a project?", a: "i ensure efficient delivery without compromising quality, and turnaround times vary based on project complexity." },
    { q: "can i request revisions?", a: "yes! i offer revisions to ensure the final product aligns perfectly with your vision." },
    { q: "what formats will i receive?", a: "you'll receive high-quality optimized files in the required formats, ensuring seamless use across platforms." },
    { q: "do you provide custom designs?", a: "absolutely! every project is uniquely crafted to match your brand and audience." },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header-col">
          <div className="faq-badge"><span className="badge-dot">•</span> faq</div>
          <h2 className="faq-title">frequently<br/><em>asked questions</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;