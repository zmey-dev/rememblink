
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flower } from "lucide-react";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm py-3">
      <div className="container-custom mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Flower className="h-8 w-8 text-primary" />
          <span className="font-serif text-2xl font-bold text-primary">RemembrLink</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/search" className="text-gray-700 hover:text-primary transition-colors">
            Search
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link to="/funeral-homes" className="text-gray-700 hover:text-primary transition-colors">
            Funeral Homes
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/store" className="text-gray-700 hover:text-primary transition-colors">
            Memorial Gifts
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/create">
            <Button className="bg-primary hover:bg-primary-700 text-white">
              Create Memorial
            </Button>
          </Link>
          <Link to="/login" className="hidden md:block text-gray-700 hover:text-primary transition-colors">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
