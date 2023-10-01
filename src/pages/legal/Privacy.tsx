
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>Last updated: April 25, 2025</p>
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us...</p>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
