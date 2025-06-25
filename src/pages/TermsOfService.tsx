
import React from 'react';
import Navigation from '../components/Navigation';
import { Scale, FileCheck, AlertTriangle, Users, CreditCard, Gavel } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              These terms govern your use of DevAccuracy's AI-powered testing platform.
            </p>
            <p className="text-sm text-slate-500 mt-4">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <FileCheck className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Acceptance of Terms</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>By accessing or using DevAccuracy's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">User Accounts</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>To access certain features, you must create an account. You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Subscription and Billing</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>For paid services:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Prices may change with 30 days notice</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>You're responsible for applicable taxes</li>
                  <li>Payment failures may result in service suspension</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Acceptable Use</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Use our services for illegal or unauthorized purposes</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Share your account credentials with others</li>
                  <li>Use our services to generate malicious code</li>
                  <li>Reverse engineer or attempt to extract our algorithms</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-4">
                <Gavel className="w-6 h-6 text-red-400 mr-3" />
                <h2 className="text-2xl font-bold text-white m-0">Limitation of Liability</h2>
              </div>
              <div className="text-slate-300 space-y-4">
                <p>DevAccuracy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
                <p>Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.</p>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <div className="text-slate-300 space-y-4">
                <p>For questions about these Terms of Service, please contact us:</p>
                <ul className="list-none space-y-2 text-slate-400">
                  <li>Email: legal@devaccuracy.com</li>
                  <li>Address: DevAccuracy Inc., San Francisco, CA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
