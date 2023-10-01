import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MemorialPage from "./pages/MemorialPage";
import FuneralHomes from "./pages/FuneralHomes";
import Blog from "./pages/Blog";
import Store from "./pages/Store";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CreateMemorial from "./pages/CreateMemorial";
import Search from "./pages/Search";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import Accessibility from "./pages/legal/Accessibility";
import Featured from "./pages/memorials/Featured";
import Team from "./pages/about/Team";
import FAQ from "./pages/support/FAQ";
import GriefSupport from "./pages/resources/GriefSupport";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/memorial/:id" element={<MemorialPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<CreateMemorial />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/funeral-homes" element={<FuneralHomes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/store" element={<Store />} />
            
            <Route path="/memorials/featured" element={<Featured />} />
            <Route path="/memorials/recent" element={<Featured />} />
            <Route path="/memorials/veterans" element={<Featured />} />
            <Route path="/memorials/teachers" element={<Featured />} />
            <Route path="/memorials/artists" element={<Featured />} />
            <Route path="/memorials/musicians" element={<Featured />} />
            
            <Route path="/resources/coping" element={<GriefSupport />} />
            <Route path="/resources/funeral-planning" element={<GriefSupport />} />
            <Route path="/resources/bereavement" element={<GriefSupport />} />
            <Route path="/resources/support-groups" element={<GriefSupport />} />
            <Route path="/resources/counseling" element={<GriefSupport />} />
            
            <Route path="/about/team" element={<Team />} />
            <Route path="/support/faq" element={<FAQ />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/accessibility" element={<Accessibility />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
