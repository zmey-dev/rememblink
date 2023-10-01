
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { memorials } from "@/data/memorials";

const Featured = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow py-12">
        <div className="container-custom mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Featured Memorials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memorials.map((memorial) => (
              <Card key={memorial.id} className="overflow-hidden">
                <img src={memorial.photo} alt={memorial.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{memorial.name}</h3>
                  <p className="text-gray-600">{memorial.location}</p>
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

export default Featured;
