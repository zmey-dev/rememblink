
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Accessibility Statement</h1>
          <div className="prose max-w-none">
            <p>Last updated: April 25, 2025</p>
            <h2>Our commitment to accessibility</h2>
            <p>RemembrLink is committed to making our website accessible to all users, including those with disabilities...</p>
            <h2>Conformance status</h2>
            <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA...</p>
            <h2>Measures taken</h2>
            <p>We have taken the following measures to ensure accessibility:</p>
            <ul>
              <li>Providing text alternatives for non-text content</li>
              <li>Ensuring content is accessible through keyboard navigation</li>
              <li>Providing clear navigation mechanisms</li>
              <li>Using sufficient color contrast</li>
              <li>Allowing users to resize text without loss of functionality</li>
              <li>Making forms accessible</li>
            </ul>
            <h2>Contact us</h2>
            <p>We welcome feedback on the accessibility of RemembrLink. Please contact us if you encounter accessibility barriers...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
