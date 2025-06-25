
import React from 'react';
import Navigation from '../components/Navigation';
import { Download, Code, Zap, Shield, Brain, Puzzle } from 'lucide-react';

const Product = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your code patterns and generate comprehensive test suites automatically.",
      details: [
        "Deep code understanding and pattern recognition",
        "Automatic edge case detection",
        "Intelligent test prioritization",
        "Continuous learning from your codebase"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Support for all major programming languages and frameworks with specialized testing strategies for each.",
      details: [
        "JavaScript/TypeScript, Python, Java, C#, Go, Rust",
        "React, Angular, Vue.js, Django, Spring Boot",
        "Framework-specific testing patterns",
        "Custom configuration for any language"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Generation",
      description: "Generate comprehensive test suites in seconds, not hours. Optimize your development workflow instantly.",
      details: [
        "Sub-second test generation",
        "Parallel processing for large codebases",
        "Incremental test updates",
        "Real-time feedback and suggestions"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Your code never leaves your environment. All analysis happens locally with optional cloud enhancements.",
      details: [
        "Local-first architecture",
        "End-to-end encryption",
        "SOC 2 Type II compliance",
        "Custom deployment options"
      ]
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Works with your existing tools and workflow. No setup required, just install and start testing.",
      details: [
        "VS Code, JetBrains IDEs, Vim, Emacs",
        "GitHub, GitLab, Bitbucket integration",
        "CI/CD pipeline support",
        "Team collaboration features"
      ]
    }
  ];

  const integrations = [
    { name: "VS Code", logo: "🔵" },
    { name: "JetBrains", logo: "🟡" },
    { name: "GitHub", logo: "⚫" },
    { name: "GitLab", logo: "🟠" },
    { name: "Bitbucket", logo: "🔷" },
    { name: "Azure DevOps", logo: "🔵" },
    { name: "Jenkins", logo: "🔴" },
    { name: "CircleCI", logo: "🟢" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DevAccuracy AI Test Coder
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              The most advanced AI-powered testing platform for modern development teams. 
              Generate comprehensive test suites automatically and ship with confidence.
            </p>
            
            {/* Download Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://devaccuracy.com/latest/Devaccuracy-AI-Test-Coder-2.0.1.zip"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download v2.0.1
              </a>
              <span className="text-slate-400">Free • No signup required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to revolutionize your testing workflow
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-slate-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <div className="text-cyan-400 scale-150">{feature.icon}</div>
                      </div>
                      <p className="text-slate-400">Interactive demo coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Integrations</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Works seamlessly with your favorite tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="text-white font-semibold">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of developers who are already shipping better code with DevAccuracy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://devaccuracy.com/latest/Devaccuracy-AI-Test-Coder-2.0.1.zip"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={20} />
              Download Now
            </a>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-xl font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-300 hover:bg-slate-800/30">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
