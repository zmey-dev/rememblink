
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a memorial?",
      answer: "Creating a memorial is simple. Click the 'Create Memorial' button in the navigation bar and follow our step-by-step guide."
    },
    {
      question: "Can I add multiple photos to a memorial?",
      answer: "Yes, you can add multiple photos to your memorial page. We support various image formats and provide tools for organizing your photo gallery."
    },
    {
      question: "How do I share a memorial with family and friends?",
      answer: "Each memorial has unique sharing options. You can share via email, social media, or copy the direct link to share with others."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
