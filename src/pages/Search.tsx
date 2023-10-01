
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { memorials } from "../data/memorials";

const Search = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-primary py-12">
          <div className="container-custom mx-auto">
            <div className="max-w-2xl mx-auto">
              <h1 className="font-serif text-4xl font-bold text-white text-center mb-8">
                Search Memorials
              </h1>
              <div className="flex gap-4">
                <Input 
                  placeholder="Search by name or location" 
                  className="bg-white"
                />
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memorials.map((memorial) => (
              <Card key={memorial.id} className="overflow-hidden">
                <img 
                  src={memorial.photo} 
                  alt={memorial.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {memorial.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {memorial.birthDate} - {memorial.deathDate}
                  </p>
                  <p className="text-gray-600 mb-4">{memorial.location}</p>
                  <a 
                    href={`/memorial/${memorial.id}`}
                    className="text-primary hover:text-primary-700"
                  >
                    View Memorial →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
