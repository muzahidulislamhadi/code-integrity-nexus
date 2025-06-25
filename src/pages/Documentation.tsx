import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-white mb-6">Documentation</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore our comprehensive documentation to get the most out of DevAccuracy.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
            <p>Follow these steps to integrate DevAccuracy into your development workflow:</p>
            <ol>
              <li>Install the DevAccuracy plugin for your IDE.</li>
              <li>Configure your project settings.</li>
              <li>Run the AI-powered test generation.</li>
              <li>Review and customize the generated tests.</li>
              <li>Integrate the tests into your CI/CD pipeline.</li>
            </ol>

            <h2 className="text-3xl font-bold text-white mb-4">Plugin Installation</h2>
            <p>You can install the DevAccuracy plugin from the following sources:</p>
            <ul>
              <li><a href="https://devaccuracy.com/latest/Devaccuracy-AI-Test-Coder-2.0.1.zip">Download Plugin</a></li>
              <li>IDE Plugin Marketplace (coming soon)</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-4">Configuration</h2>
            <p>Configure your project by setting the following parameters:</p>
            <ul>
              <li>API Key: Your unique API key for accessing DevAccuracy services.</li>
              <li>Project ID: The ID of your project in DevAccuracy.</li>
              <li>Codebase Path: The path to your codebase.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Test Generation</h2>
            <p>Run the AI-powered test generation with the following command:</p>
            <pre><code>devaccuracy generate-tests --api-key YOUR_API_KEY --project-id YOUR_PROJECT_ID --codebase-path YOUR_CODEBASE_PATH</code></pre>

            <h2 className="text-3xl font-bold text-white mb-4">Customization</h2>
            <p>Customize the generated tests by:</p>
            <ul>
              <li>Adding more test cases.</li>
              <li>Modifying existing test cases.</li>
              <li>Setting up test data.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-4">Integration</h2>
            <p>Integrate the tests into your CI/CD pipeline by:</p>
            <ul>
              <li>Adding the test execution command to your CI/CD script.</li>
              <li>Setting up test reporting.</li>
              <li>Configuring test failure alerts.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
