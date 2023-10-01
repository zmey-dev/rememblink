
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose max-w-none">
            <p>Last updated: April 25, 2025</p>
            <h2>What are cookies?</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website...</p>
            <h2>How we use cookies</h2>
            <p>RemembrLink uses cookies for various purposes, including:</p>
            <ul>
              <li>Essential cookies: These are necessary for the website to function properly...</li>
              <li>Performance cookies: These help us understand how visitors interact with our website...</li>
              <li>Functionality cookies: These enable enhanced functionality and personalization...</li>
              <li>Targeting cookies: These cookies record your visit to our website, the pages you visit, and the links you follow...</li>
            </ul>
            <h2>Managing cookies</h2>
            <p>You can control and manage cookies in various ways. Most web browsers allow some control of cookies through browser settings...</p>
            <h2>Changes to our cookie policy</h2>
            <p>We may update our Cookie Policy from time to time. We encourage you to periodically review this page...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
