
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In the full implementation, this would redirect to search results
    console.log("Searching for:", searchTerm);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find a Memorial
          </h2>
          <p className="text-lg text-gray-600">
            Search for a loved one by name, city, or funeral home to visit their memorial page and share your memories.
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, city, or funeral home..." 
                className="pl-10 py-6 text-lg bg-gray-50 border-gray-200"
              />
            </div>
            <Button type="submit" className="btn-primary text-lg py-6 h-auto md:w-auto">
              Search
            </Button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-500">Popular searches:</span>
            <button 
              type="button" 
              onClick={() => setSearchTerm("Chicago")}
              className="text-sm text-primary hover:text-primary-700 hover:underline"
            >
              Chicago
            </button>
            <span className="text-gray-400">•</span>
            <button 
              type="button" 
              onClick={() => setSearchTerm("New York")}
              className="text-sm text-primary hover:text-primary-700 hover:underline"
            >
              New York
            </button>
            <span className="text-gray-400">•</span>
            <button 
              type="button" 
              onClick={() => setSearchTerm("Sunshine Funeral Home")}
              className="text-sm text-primary hover:text-primary-700 hover:underline"
            >
              Sunshine Funeral Home
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
