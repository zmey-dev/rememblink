
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Help = () => {
  const faqs = [
    {
      question: "How do I create a memorial?",
      answer: "Click the 'Create Memorial' button and follow the guided process..."
    },
    {
      question: "Can I edit a memorial after publishing?",
      answer: "Yes, you can edit the memorial at any time..."
    },
    {
      question: "How do I share memories?",
      answer: "Visit the memorial page and click 'Share a Memory'..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-primary py-12">
          <div className="container-custom mx-auto text-center text-white">
            <h1 className="font-serif text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find answers to common questions and get support
            </p>
          </div>
        </div>
        <div className="container-custom mx-auto py-12">
          <div className="grid gap-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
