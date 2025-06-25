
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Code Analysis Now Live
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Code Integrity
            </span>
            <br />
            is Here
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            DevAccuracy's AI-powered platform automates testing, predicts issues, 
            and transforms your development lifecycle with unprecedented precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">
              <span className="flex items-center">
                Start Your Free Trial
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button className="group flex items-center px-8 py-4 border border-slate-600 text-slate-300 rounded-xl font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-300 hover:bg-slate-800/30 backdrop-blur-sm">
              <Play size={20} className="mr-2 group-hover:scale-110 transition-transform duration-200" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">40%</div>
              <div className="text-slate-400 mt-2">Productivity Boost</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">95%</div>
              <div className="text-slate-400 mt-2">Code Coverage</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">10k+</div>
              <div className="text-slate-400 mt-2">Developers Trust Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
