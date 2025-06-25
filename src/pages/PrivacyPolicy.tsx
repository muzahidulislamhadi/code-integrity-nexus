
import React from 'react';
import Navigation from '../components/Navigation';
import { Shield, Eye, Lock, Database, Globe, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your privacy is our priority. Here's how we protect and handle your data.
            </p>
            <p className="text-sm text-slate-500 mt-4">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Information We Collect</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>We collect information to provide better services to our users. This includes:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Account information (name, email address) when you register</li>
                  <li>Code repository metadata and structure (never the actual source code)</li>
                  <li>Usage analytics and performance metrics</li>
                  <li>Device and browser information for optimization</li>
                  <li>Communication preferences and support interactions</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">How We Use Your Information</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>Your information helps us:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Provide and improve our AI-powered testing services</li>
                  <li>Generate accurate test cases for your codebase</li>
                  <li>Send important updates about your account and our services</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Data Security</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>We implement industry-leading security measures:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>SOC 2 Type II compliance and regular security audits</li>
                  <li>Zero-knowledge architecture for sensitive code analysis</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular penetration testing and vulnerability assessments</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Data Sharing</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>We never sell your personal data. We may share information only:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With trusted service providers under strict agreements</li>
                  <li>To protect the rights and safety of our users</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Your Rights</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Access and download your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
                <p className="mt-6 text-cyan-400">
                  For any privacy concerns, contact us at privacy@devaccuracy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
