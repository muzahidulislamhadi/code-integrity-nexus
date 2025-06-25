
import React, { useEffect, useRef } from 'react';
import { Shield, Zap, Target, Heart, Puzzle, Lock } from 'lucide-react';

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
              }, index * 100);
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
      icon: <Zap className="w-8 h-8" />,
      title: "Boost Productivity by 40%",
      description: "Automate repetitive testing tasks and focus on what matters most - building great features.",
      gradient: "from-yellow-400 to-orange-500",
      size: "col-span-1 row-span-1"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predict & Prevent Flaws",
      description: "AI-powered analysis identifies potential issues before they become costly problems in production.",
      gradient: "from-cyan-400 to-blue-500",
      size: "col-span-2 row-span-1"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Achieve 95% Code Coverage",
      description: "Comprehensive test generation ensures every critical path is covered.",
      gradient: "from-green-400 to-emerald-500",
      size: "col-span-2 row-span-1"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Loved by Developers",
      description: "Join thousands of developers who trust DevAccuracy for their testing needs.",
      gradient: "from-pink-400 to-rose-500",
      size: "col-span-1 row-span-1"
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Works with your existing workflow - VS Code, JetBrains, GitHub, GitLab, and more.",
      gradient: "from-purple-400 to-indigo-500",
      size: "col-span-1 row-span-1"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Fortified Security",
      description: "Enterprise-grade security ensures your code stays protected throughout the analysis process.",
      gradient: "from-red-400 to-pink-500",
      size: "col-span-2 row-span-1"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose DevAccuracy?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the next generation of automated testing with AI-powered insights that transform your development workflow.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.size} group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer opacity-0`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
