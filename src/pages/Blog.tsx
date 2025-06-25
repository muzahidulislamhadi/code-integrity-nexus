
import React from 'react';
import Navigation from '../components/Navigation';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI-Powered Testing: What Every Developer Needs to Know",
    excerpt: "Discover how artificial intelligence is revolutionizing software testing and why traditional approaches are becoming obsolete in modern development workflows.",
    author: "Alex Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    category: "AI & Testing"
  };

  const posts = [
    {
      title: "10 Best Practices for Automated Test Generation",
      excerpt: "Learn the essential practices that will help you get the most out of AI-generated tests and improve your code quality.",
      author: "Sarah Johnson",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Best Practices"
    },
    {
      title: "Integrating DevAccuracy with Your CI/CD Pipeline",
      excerpt: "Step-by-step guide to seamlessly integrate AI-powered testing into your existing development workflow.",
      author: "Mike Rodriguez",
      date: "December 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "Integration"
    },
    {
      title: "Case Study: How TechCorp Reduced Testing Time by 75%",
      excerpt: "Real-world success story of how a Fortune 500 company transformed their testing process with AI automation.",
      author: "Emily Davis",
      date: "December 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Case Study"
    },
    {
      title: "Understanding AI Test Coverage: Beyond Traditional Metrics",
      excerpt: "Explore new ways to measure and improve test coverage using AI-powered insights and analytics.",
      author: "David Park",
      date: "December 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Analytics"
    },
    {
      title: "The Evolution of Unit Testing: From Manual to AI-Driven",
      excerpt: "A comprehensive look at how unit testing has evolved and what the future holds for automated test generation.",
      author: "Lisa Wong",
      date: "December 3, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      category: "Industry Trends"
    },
    {
      title: "Debugging AI-Generated Tests: Tips and Techniques",
      excerpt: "Master the art of reviewing, debugging, and optimizing AI-generated test cases for maximum effectiveness.",
      author: "Tom Anderson",
      date: "December 1, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "Development"
    }
  ];

  const categories = ["All", "AI & Testing", "Best Practices", "Integration", "Case Study", "Analytics", "Industry Trends", "Development"];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DevAccuracy Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights, tutorials, and thought leadership on AI-powered testing, 
              development best practices, and the future of software quality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-slate-400 text-sm mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button className="flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300 group/btn">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-slate-400 text-sm space-x-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{post.date}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with DevAccuracy
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get the latest insights on AI-powered testing, development best practices, 
              and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
