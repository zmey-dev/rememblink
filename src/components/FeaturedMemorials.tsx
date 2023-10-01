
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const memorials = [
  {
    id: "1",
    name: "Eleanor Johnson",
    photo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    dates: "1945 - 2023",
    location: "Chicago, IL",
    excerpt: "Beloved mother, grandmother, and community leader who touched countless lives."
  },
  {
    id: "2",
    name: "Robert Williams",
    photo: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    dates: "1938 - 2023",
    location: "Portland, OR",
    excerpt: "Veteran, teacher, and devoted family man who inspired generations."
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    photo: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    dates: "1952 - 2023",
    location: "San Diego, CA",
    excerpt: "Artist, entrepreneur, and loving wife whose creativity knew no bounds."
  },
];

const FeaturedMemorials = () => {
  return (
    <section className="py-16 bg-beige-50">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Memorials
          </h2>
          <p className="text-lg text-gray-600">
            Visit memorial pages to share memories, upload photos, and honor the lives of loved ones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {memorials.map((memorial, index) => (
            <Card 
              key={memorial.id} 
              className="memorial-card overflow-hidden border-0 shadow-lg animate-fade-up"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={memorial.photo} 
                  alt={memorial.name} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                  {memorial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {memorial.dates} • {memorial.location}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {memorial.excerpt}
                </p>
                <Link to={`/memorial/${memorial.id}`}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary-50">
                    Visit Memorial
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Link to="/search">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-50">
              View All Memorials
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemorials;
