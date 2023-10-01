
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-beige-50 to-beige-100 pt-16 pb-24 overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-primary">Honor</span> their story.
              <br />
              <span className="text-primary">Preserve</span> their memory.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Create beautiful, interactive memorial pages for your loved ones. 
              Share memories, photos, and celebrate their legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/create">
                <Button className="btn-primary text-lg py-6 px-8 rounded-full w-full sm:w-auto">
                  Create a Memorial
                </Button>
              </Link>
              <Link to="/search">
                <Button variant="outline" className="border-primary text-primary text-lg py-6 px-8 rounded-full hover:bg-primary-50 w-full sm:w-auto">
                  Find a Memorial
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-primary rounded-2xl transform rotate-3"></div>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-teal-400 rounded-2xl transform -rotate-3"></div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-white shadow-xl rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529946179074-87642f6204d7?q=80&w=987&auto=format&fit=crop" 
                alt="Memorial page example" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-100 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-teal-100 rounded-full opacity-60 blur-3xl"></div>
    </section>
  );
};

export default Hero;
