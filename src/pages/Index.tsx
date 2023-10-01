
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import FeaturedMemorials from "@/components/FeaturedMemorials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <SearchSection />
        <section className="py-16 bg-white">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-beige-50 rounded-xl p-8 text-center animate-fade-up">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">AI Obituary Writer</h3>
                <p className="text-gray-600">
                  Our AI assistant helps create meaningful obituaries by transforming your memories into beautiful tributes.
                </p>
              </div>
              
              <div className="bg-beige-50 rounded-xl p-8 text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Easy Sharing</h3>
                <p className="text-gray-600">
                  Share memorial pages with friends and family across social media platforms to gather memories.
                </p>
              </div>
              
              <div className="bg-beige-50 rounded-xl p-8 text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Memorial Gifts</h3>
                <p className="text-gray-600">
                  Honor your loved one with meaningful memorial gifts like trees, flowers, or charitable donations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FeaturedMemorials />
        <section className="py-16 bg-primary text-white">
          <div className="container-custom mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Create a Lasting Memorial Today
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Honor your loved one with a beautiful digital memorial that celebrates their life and preserves their legacy.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <a href="/create" className="inline-block bg-white text-primary font-medium rounded-full px-8 py-3 text-lg hover:bg-beige-100 transition-colors">
                Create a Memorial
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
