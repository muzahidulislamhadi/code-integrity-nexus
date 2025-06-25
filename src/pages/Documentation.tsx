
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Search, Book, Code, Zap, Settings, HelpCircle, ArrowRight } from 'lucide-react';

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-5 h-5" />,
      items: [
        'Quick Start Guide',
        'Installation',
        'First Test Generation',
        'Configuration'
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      icon: <Book className="w-5 h-5" />,
      items: [
        'Best Practices',
        'Advanced Configuration',
        'Team Collaboration',
        'CI/CD Integration'
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: <Code className="w-5 h-5" />,
      items: [
        'REST API',
        'GraphQL API',
        'Webhooks',
        'Authentication'
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: <Settings className="w-5 h-5" />,
      items: [
        'VS Code Extension',
        'JetBrains Plugin',
        'GitHub Integration',
        'CI/CD Platforms'
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        'Common Issues',
        'Error Messages',
        'Performance Tips',
        'Support'
      ]
    }
  ];

  const quickStartSteps = [
    {
      title: "1. Download and Install",
      description: "Download the DevAccuracy plugin for your IDE",
      code: `# For VS Code
code --install-extension devaccuracy.ai-test-coder

# For JetBrains IDEs
# Install via Plugin Marketplace`
    },
    {
      title: "2. Configure Your Project",
      description: "Set up DevAccuracy in your project root",
      code: `# Create configuration file
touch .devaccuracy.json

# Basic configuration
{
  "language": "typescript",
  "testFramework": "jest",
  "outputDir": "./tests/generated"
}`
    },
    {
      title: "3. Generate Your First Tests",
      description: "Right-click on any file and select 'Generate Tests'",
      code: `// Example generated test
import { calculateSum } from '../src/utils';

describe('calculateSum', () => {
  it('should add two positive numbers', () => {
    expect(calculateSum(2, 3)).toBe(5);
  });
  
  it('should handle negative numbers', () => {
    expect(calculateSum(-1, 1)).toBe(0);
  });
});`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Everything you need to get started with DevAccuracy and master AI-powered testing.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <div key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                          activeSection === section.id
                            ? 'bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400'
                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                        }`}
                      >
                        {section.icon}
                        <span className="ml-2">{section.title}</span>
                      </button>
                      {activeSection === section.id && (
                        <div className="ml-6 mt-2 space-y-1">
                          {section.items.map((item, index) => (
                            <button
                              key={index}
                              className="block w-full text-left px-3 py-1 text-sm text-slate-400 hover:text-slate-300 transition-colors duration-200"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                {activeSection === 'getting-started' && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Quick Start Guide</h2>
                    <p className="text-lg text-slate-300 mb-8">
                      Get up and running with DevAccuracy in minutes. Follow these simple steps to start generating AI-powered tests for your code.
                    </p>

                    <div className="space-y-8">
                      {quickStartSteps.map((step, index) => (
                        <div key={index} className="border-l-2 border-cyan-500 pl-6">
                          <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                          <p className="text-slate-300 mb-4">{step.description}</p>
                          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                            <pre className="text-sm text-slate-300 overflow-x-auto">
                              <code>{step.code}</code>
                            </pre>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                      <h3 className="text-xl font-semibold text-white mb-3">What's Next?</h3>
                      <p className="text-slate-300 mb-4">
                        Now that you have DevAccuracy set up, explore advanced features and integrations.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button className="flex items-center px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-colors duration-200">
                          Advanced Configuration
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                        <button className="flex items-center px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-colors duration-200">
                          CI/CD Integration
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection !== 'getting-started' && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Book className="w-12 h-12 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {sections.find(s => s.id === activeSection)?.title} Documentation
                    </h3>
                    <p className="text-slate-300 mb-6">
                      Comprehensive documentation for this section is coming soon. 
                      We're working hard to provide you with detailed guides and examples.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                      Request Documentation
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
