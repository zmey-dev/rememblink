
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FuneralHomes = () => {
  const funeralHomes = [
    {
      id: 1,
      name: "Grace Memorial Funeral Home",
      location: "Chicago, IL",
      phone: "(312) 555-0123",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    },
    {
      id: 2,
      name: "Eternal Peace Funeral Services",
      location: "New York, NY",
      phone: "(212) 555-0124",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800"
    },
    {
      id: 3,
      name: "Serenity Funeral Chapel",
      location: "Los Angeles, CA",
      phone: "(323) 555-0125",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-primary py-12">
          <div className="container-custom mx-auto text-center text-white">
            <h1 className="font-serif text-4xl font-bold mb-4">Partner Funeral Homes</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              We work with trusted funeral homes across the country to provide compassionate service
            </p>
          </div>
        </div>
        <div className="container-custom mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funeralHomes.map((home) => (
              <div key={home.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={home.image} alt={home.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{home.name}</h3>
                  <p className="text-gray-600 mb-2">{home.location}</p>
                  <p className="text-gray-600 mb-4">{home.phone}</p>
                  <Button className="w-full">Contact Funeral Home</Button>
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

export default FuneralHomes;
