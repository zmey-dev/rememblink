
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Write a Meaningful Obituary",
      excerpt: "Tips and guidelines for crafting a heartfelt obituary that honors your loved one's memory.",
      date: "2025-04-20",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800"
    },
    {
      id: 2,
      title: "Planning a Memorial Service: A Complete Guide",
      excerpt: "Everything you need to know about organizing a memorial service that celebrates life.",
      date: "2025-04-18",
      image: "https://images.unsplash.com/photo-1490122417551-6ee9691429d0?w=800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="container-custom mx-auto py-12">
          <h1 className="font-serif text-4xl font-bold mb-8">Memorial Resources & Guides</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h2 className="font-serif text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="text-primary hover:text-primary-700">
                    Read More →
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

export default Blog;
