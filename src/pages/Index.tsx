
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import HowItWorks from '../components/HowItWorks';
import { Star, Quote, ArrowRight, Play } from 'lucide-react';

const Index = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      content: "DevAccuracy has transformed our testing workflow. We've reduced testing time by 60% while improving coverage. It's like having a senior QA engineer on the team 24/7.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b62b90d2?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Engineer at StartupX",
      content: "The AI-generated tests are incredibly thorough. DevAccuracy catches edge cases we never would have thought of. Our production bugs have dropped by 80%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "CTO at InnovateLabs",
      content: "Best investment we've made for our development team. The time saved on manual testing allows our developers to focus on building features that matter.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Developers Using DevAccuracy" },
    { number: "1M+", label: "Tests Generated" },
    { number: "95%", label: "Average Code Coverage" },
    { number: "75%", label: "Time Saved on Testing" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <BentoGrid />
      <HowItWorks />
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of development teams who have revolutionized their testing workflow with DevAccuracy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Developers Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real feedback from developers who have transformed their testing workflow with DevAccuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See DevAccuracy in Action
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Watch how DevAccuracy analyzes your code and generates comprehensive test suites in seconds.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 aspect-video flex items-center justify-center group cursor-pointer hover:bg-slate-800/70 transition-all duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Interactive Demo</h3>
                <p className="text-slate-300">See the magic happen in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Workflow?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are shipping better code faster with AI-powered testing. 
            Start your free trial today and experience the future of software development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
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

          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
