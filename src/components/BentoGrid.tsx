
import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Target, Heart, Puzzle, Lock, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const BentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "10x Development Velocity",
      description: "Eliminate testing bottlenecks and accelerate your entire development pipeline with AI-powered automation that works seamlessly with your existing workflow.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      size: "col-span-1 md:col-span-2 row-span-1",
      stats: "+150% productivity boost"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Predictive Issue Detection",
      description: "Advanced machine learning algorithms analyze your codebase patterns to identify and prevent critical issues before they reach production.",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      size: "col-span-1 row-span-2",
      stats: "87% issues prevented"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "99.7% Code Coverage",
      description: "Achieve unprecedented test coverage with intelligent test generation that covers edge cases human developers typically miss.",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      size: "col-span-1 row-span-1",
      stats: "Industry-leading coverage"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Developer Experience First",
      description: "Designed by developers, for developers. Every feature is crafted to enhance your workflow, not disrupt it.",
      gradient: "from-pink-400 via-rose-500 to-red-500",
      size: "col-span-1 row-span-1",
      stats: "98% developer satisfaction"
    },
    {
      icon: <Puzzle className="w-10 h-10" />,
      title: "Universal Integration",
      description: "Seamlessly connects with your entire tech stack - from IDEs to CI/CD pipelines, version control to deployment platforms.",
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      size: "col-span-1 md:col-span-2 row-span-1",
      stats: "200+ integrations"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, SOC 2 compliance, and zero-trust architecture ensure your code remains completely secure.",
      gradient: "from-red-400 via-pink-500 to-rose-600",
      size: "col-span-1 row-span-1",
      stats: "SOC 2 Type II certified"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-sm text-cyan-400 font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Platform Capabilities
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Why Choose
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              DevAccuracy?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the next evolution of software development with AI-powered insights 
            that transform your entire engineering workflow from concept to deployment.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.size} group relative overflow-hidden rounded-3xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-8 hover:bg-slate-800/80 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl cursor-pointer opacity-0`}
            >
              {/* Enhanced Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-700`}></div>
              
              {/* Icon with enhanced styling */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg relative z-10`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-7 mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  {feature.description}
                </p>
                
                {/* Stats badge */}
                <div className="inline-flex items-center px-3 py-1 bg-slate-700/50 backdrop-blur-sm rounded-full text-sm text-slate-400 border border-slate-600/50">
                  <Clock className="w-3 h-3 mr-2" />
                  {feature.stats}
                </div>
              </div>

              {/* Enhanced hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Border glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r ${feature.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-3xl bg-slate-800/60 backdrop-blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/30">
            Experience the Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
