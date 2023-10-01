
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <p>Last updated: April 25, 2025</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using RemembrLink's services, you agree to be bound by these Terms of Service...</p>
            <h2>2. Description of Service</h2>
            <p>RemembrLink provides a platform for creating and sharing memorial pages, obituaries, and related content...</p>
            <h2>3. User Accounts</h2>
            <p>To use certain features of our Service, you may be required to create an account...</p>
            <h2>4. Content Guidelines</h2>
            <p>You are solely responsible for the content you post to RemembrLink...</p>
            <h2>5. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are owned by RemembrLink...</p>
            <h2>6. Limitation of Liability</h2>
            <p>In no event shall RemembrLink be liable for any indirect, incidental, special, consequential or punitive damages...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
