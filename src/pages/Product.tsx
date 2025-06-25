import React from 'react';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-white mb-6">Product</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore our AI-powered testing platform.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
