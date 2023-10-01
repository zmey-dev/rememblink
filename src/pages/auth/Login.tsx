
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <Card className="w-full max-w-md p-8">
          <h1 className="font-serif text-3xl font-bold text-center mb-8">Login</h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input type="password" required />
            </div>
            <Button className="w-full">Sign In</Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-primary hover:text-primary-700">
              Register
            </a>
          </p>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
