
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, Bolt, ShieldCheck, TrendingUp, Code, HelpCircle, Cloud, Lock, Download, Star, Gem } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-white mb-6">Choose the Perfect Plan</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Unlock the full potential of AI-powered code testing with our flexible pricing plans.
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {/* Free Plan */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">Free</h2>
                <p className="text-slate-400">Perfect for exploring DevAccuracy</p>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-5xl font-black text-white">$0</span>
                  <span className="text-xl text-slate-400">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>500 Test Cases / Month</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Basic AI Test Generation</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Community Support</span>
                </li>
                <li className="flex items-center text-slate-500">
                  <XCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span>Advanced Code Analysis</span>
                </li>
                <li className="flex items-center text-slate-500">
                  <XCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500 rounded-2xl p-8 scale-105">
              <div className="text-center mb-6">
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <div className="px-3 py-1 bg-cyan-500 text-white rounded-full text-xs font-bold">
                    Popular
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Pro</h2>
                <p className="text-slate-400">For professional developers</p>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-5xl font-black text-white">$49</span>
                  <span className="text-xl text-slate-400">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>5,000 Test Cases / Month</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Advanced AI Test Generation</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Code Coverage Reports</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Email Support</span>
                </li>
                <li className="flex items-center text-slate-500">
                  <XCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                  Start Pro Trial
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">Enterprise</h2>
                <p className="text-slate-400">Custom solutions for large teams</p>
                <div className="flex items-center justify-center mt-4">
                  <span className="text-5xl font-black text-white">Custom</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Unlimited Test Cases</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Advanced AI Test Generation</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Dedicated Support</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Custom Integrations</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>SOC 2 Compliance</span>
                </li>
              </ul>
              <div className="text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-bold hover:from-purple-400 hover:to-pink-500 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>

          </div>

          {/* Additional Features Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Unlock Even More Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Bolt className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Faster Test Generation
                </h3>
                <p className="text-slate-400">
                  Generate test cases up to 10x faster with our optimized AI engine.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Enhanced Security
                </h3>
                <p className="text-slate-400">
                  Protect your code with advanced encryption and security protocols.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Performance Insights
                </h3>
                <p className="text-slate-400">
                  Gain valuable insights into your code's performance with detailed reports.
                </p>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Seamless Integrations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Code className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  CI/CD Integration
                </h3>
                <p className="text-slate-400">
                  Integrate with your favorite CI/CD tools for automated testing workflows.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <HelpCircle className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Team Collaboration
                </h3>
                <p className="text-slate-400">
                  Collaborate with your team on test case creation and management.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Cloud className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cloud-Based Platform
                </h3>
                <p className="text-slate-400">
                  Access your test cases and reports from anywhere with our secure cloud platform.
                </p>
              </div>
            </div>
          </div>

          {/* Security and Compliance Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Security and Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Lock className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Data Encryption
                </h3>
                <p className="text-slate-400">
                  We use industry-standard encryption to protect your code and data.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Download className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  SOC 2 Compliance
                </h3>
                <p className="text-slate-400">
                  Our platform is SOC 2 compliant, ensuring the highest level of security.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Star className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-slate-400 mb-4">
                  "DevAccuracy has revolutionized our testing process. We've seen a significant improvement in code quality and a reduction in bugs."
                </p>
                <p className="text-white font-semibold">- John Doe, CTO</p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                <Star className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-slate-400 mb-4">
                  "The AI-powered test generation is incredibly accurate and saves us a ton of time. Highly recommended!"
                </p>
                <p className="text-white font-semibold">- Jane Smith, Lead Developer</p>
              </div>
            </div>
          </div>

          {/* Satisfaction Guarantee Section */}
          <div className="mt-24 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 text-center">
            <Gem className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              100% Satisfaction Guarantee
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              We're confident you'll love DevAccuracy. If you're not satisfied, we offer a full refund within the first 30 days.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
