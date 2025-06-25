
import React, { useEffect, useRef } from 'react';
import { GitBranch, Brain, TestTube, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = entry.target.querySelectorAll('.step-item');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Connect Your Repo",
      description: "Seamlessly integrate with your existing Git workflow. Support for GitHub, GitLab, Bitbucket, and more.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analyzes Your Code",
      description: "Our advanced AI engine scans your codebase, understanding patterns, dependencies, and potential edge cases.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Tests Are Generated",
      description: "Comprehensive unit tests, integration tests, and edge case scenarios are automatically created and optimized.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Review & Deploy",
      description: "Review generated tests in our intuitive interface, customize as needed, and deploy with confidence.",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From connection to deployment in minutes. Our streamlined process makes automated testing effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-item relative opacity-0">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-600 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-700 text-slate-300 font-bold text-lg mb-6 group-hover:bg-slate-600 transition-colors duration-300">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
