
import React from "react";
import { useParams } from "react-router-dom";
import { memorials } from "../data/memorials";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const MemorialPage = () => {
  const { id } = useParams();
  const memorial = memorials.find(m => m.id === id);

  if (!memorial) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Memorial Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">
            The memorial you're looking for doesn't exist or has been removed.
          </p>
          <a href="/" className="text-primary hover:text-primary-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {/* Cover Image */}
        <div className="relative h-[400px]">
          <img
            src={memorial.coverImage}
            alt={`${memorial.name} cover`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Section */}
        <div className="container-custom mx-auto -mt-20 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={memorial.photo}
                  alt={memorial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
                  {memorial.name}
                </h1>
                <p className="text-gray-600 mb-4">
                  {memorial.birthDate} - {memorial.deathDate}
                </p>
                <p className="text-gray-600 mb-6">{memorial.location}</p>
                <div className="flex gap-4">
                  <Button className="bg-primary">
                    <Heart className="mr-2" />
                    Share a Memory
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="mr-2" />
                    Leave Condolences
                  </Button>
                  <Button variant="outline">
                    <Share className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container-custom mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Obituary */}
              <Card className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-4">Obituary</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{memorial.obituary}</p>
              </Card>

              {/* Memories Feed */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold">Memories & Condolences</h2>
                {memorial.memories.map((memory) => (
                  <Card key={memory.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={memory.authorPhoto}
                        alt={memory.authorName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{memory.authorName}</h3>
                        <p className="text-gray-500 text-sm mb-2">{memory.date}</p>
                        <p className="text-gray-700 mb-4">{memory.content}</p>
                        {memory.type === "photo" && memory.mediaUrl && (
                          <img
                            src={memory.mediaUrl}
                            alt="Memory"
                            className="rounded-lg w-full mb-4"
                          />
                        )}
                        <div className="flex items-center gap-4 text-gray-500">
                          <button className="flex items-center gap-1 hover:text-primary">
                            <Heart className="w-4 h-4" />
                            {memory.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary">
                            <MessageSquare className="w-4 h-4" />
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Family Section */}
              <Card className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-4">Family</h2>
                <ul className="space-y-2">
                  {memorial.familyMembers.map((member, index) => (
                    <li key={index} className="text-gray-700">{member}</li>
                  ))}
                </ul>
              </Card>

              {/* Memorial Gifts */}
              <Card className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-4">Honor Their Memory</h2>
                <div className="space-y-4">
                  <Button className="w-full">Send Flowers</Button>
                  <Button variant="outline" className="w-full">Plant a Memorial Tree</Button>
                  <Button variant="outline" className="w-full">Make a Donation</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MemorialPage;
