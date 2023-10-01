
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const CreateMemorial = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom mx-auto">
          <Card className="max-w-3xl mx-auto p-8">
            <h1 className="font-serif text-3xl font-bold text-center mb-8">
              Create a Memorial Page
            </h1>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Birth Date</label>
                  <Input type="date" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Death Date</label>
                  <Input type="date" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Obituary</label>
                <Textarea 
                  placeholder="Share their story..."
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex justify-end">
                <Button>Create Memorial</Button>
              </div>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateMemorial;
