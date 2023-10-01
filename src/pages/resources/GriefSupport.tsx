
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const GriefSupport = () => {
  const resources = [
    {
      title: "Professional Counseling",
      description: "Connect with licensed grief counselors who can help you navigate your journey.",
      link: "#"
    },
    {
      title: "Support Groups",
      description: "Find local and online support groups where you can share experiences with others.",
      link: "#"
    },
    {
      title: "Educational Resources",
      description: "Access articles, books, and videos about grief and healing.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Grief Support Resources</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href={resource.link} className="text-primary hover:text-primary-700">
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GriefSupport;
