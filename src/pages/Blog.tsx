import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Blog</h1>
          <p className="mt-2 text-lg text-gray-400">
            Stay up-to-date with the latest news and insights from our team.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
