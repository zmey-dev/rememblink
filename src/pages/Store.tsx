
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Memorial Tree Planting",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      description: "Plant a tree in memory of your loved one"
    },
    {
      id: 2,
      name: "Memorial Flower Bouquet",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1490349708435-19d432984978?w=800",
      description: "Beautiful arrangement of seasonal flowers"
    },
    {
      id: 3,
      name: "Memorial Star Dedication",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      description: "Name a star in memory of your loved one"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="bg-primary py-12">
          <div className="container-custom mx-auto text-center text-white">
            <h1 className="font-serif text-4xl font-bold mb-4">Memorial Gifts</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Honor their memory with a meaningful tribute
            </p>
          </div>
        </div>
        <div className="container-custom mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">${product.price}</span>
                    <Button>Add to Cart</Button>
                  </div>
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

export default Store;
