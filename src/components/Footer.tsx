
import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <div>
                <span className="text-white font-black text-xl">DevAccuracy</span>
                <span className="block text-cyan-400 text-xs font-medium -mt-1">AI PLATFORM</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transform your development workflow with AI-powered testing. Generate comprehensive test suites automatically and ship with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/devaccuracy" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/devaccuracy" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/devaccuracy" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/product" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-slate-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="https://devaccuracy.com/latest/Devaccuracy-AI-Test-Coder-2.0.1.zip" className="text-slate-400 hover:text-white transition-colors">
                  Download Plugin
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <a href="mailto:careers@devaccuracy.com" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:press@devaccuracy.com" className="text-slate-400 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal Section */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support & Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@devaccuracy.com" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:security@devaccuracy.com" className="text-slate-400 hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-slate-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <a href="mailto:hello@devaccuracy.com" className="hover:text-white transition-colors">
                    hello@devaccuracy.com
                  </a>
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start text-slate-400">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5" />
                  <span className="leading-relaxed">
                    123 Innovation Drive<br />
                    San Francisco, CA 94107
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © 2024 DevAccuracy Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-slate-500 text-sm">Made with ❤️ in San Francisco</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
