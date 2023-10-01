
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create a Memorial",
      description: "Start by providing basic information about your loved one"
    },
    {
      title: "Add Photos & Memories",
      description: "Upload photos and share special memories"
    },
    {
      title: "Share with Family & Friends",
      description: "Invite others to contribute their memories"
    },
    {
      title: "Keep the Memory Alive",
      description: "Continue to honor and remember together"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-primary py-12">
          <div className="container-custom mx-auto text-center text-white">
            <h1 className="font-serif text-4xl font-bold mb-4">How RemembrLink Works</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Creating and sharing memories has never been easier
            </p>
          </div>
        </div>
        <div className="container-custom mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
