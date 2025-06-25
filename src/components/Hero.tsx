
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Code, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 5000);
    };

    const interval = setInterval(createParticle, 200);
    
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

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-cyan-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-800/90 transition-all duration-500 group cursor-pointer shadow-2xl hover:shadow-cyan-500/10">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              </div>
              <span className="font-medium">AI-Powered Code Analysis Platform</span>
            </div>
            <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          {/* Enhanced Main Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient relative">
                Developer Velocity
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 blur-2xl -z-10 animate-gradient bg-300%"></div>
              </span>
              <br />
              <span className="text-5xl md:text-7xl lg:text-8xl">Starts Here</span>
            </h1>

            {/* Enhanced Subtitle */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
                DevAccuracy's revolutionary AI platform eliminates testing bottlenecks, 
                predicts critical issues before they occur, and transforms your entire 
                development lifecycle with surgical precision.
              </p>
              
              {/* Key benefits highlights */}
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-medium">98% Faster Testing</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">Zero Configuration</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium">Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-xl hover:from-cyan-400 hover:to-purple-500 transform hover:scale-[1.02] transition-all duration-500 shadow-2xl hover:shadow-cyan-500/40 min-w-[280px]">
              <span className="flex items-center justify-center">
                Start Your Free Trial
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group flex items-center justify-center px-10 py-5 border-2 border-slate-600 text-slate-300 rounded-2xl font-bold text-xl hover:border-slate-400 hover:text-white transition-all duration-500 hover:bg-slate-800/40 backdrop-blur-sm min-w-[280px] hover:shadow-xl">
              <Play size={24} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              Watch Live Demo
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 max-w-5xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-5xl md:text-6xl font-black text-white group-hover:text-cyan-400 transition-colors duration-500 mb-3">
                60%
              </div>
              <div className="text-slate-400 text-lg font-medium group-hover:text-slate-300 transition-colors duration-300">
                Faster Development Cycles
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl md:text-6xl font-black text-white group-hover:text-purple-400 transition-colors duration-500 mb-3">
                99.7%
              </div>
              <div className="text-slate-400 text-lg font-medium group-hover:text-slate-300 transition-colors duration-300">
                Code Coverage Achieved
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl md:text-6xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500 mb-3">
                25k+
              </div>
              <div className="text-slate-400 text-lg font-medium group-hover:text-slate-300 transition-colors duration-300">
                Enterprise Developers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-slate-500 rounded-full flex justify-center p-2 backdrop-blur-sm bg-slate-800/20">
          <div className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
