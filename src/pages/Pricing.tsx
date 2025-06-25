
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with AI-powered testing",
      features: [
        "Up to 10 test generations per month",
        "Basic AI analysis",
        "Community support",
        "VS Code extension",
        "Local processing only"
      ],
      limitations: [
        "Advanced AI features",
        "Team collaboration",
        "Priority support",
        "Custom integrations"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: { monthly: 29, yearly: 290 },
      description: "For professional developers and small teams",
      features: [
        "Unlimited test generations",
        "Advanced AI analysis",
        "Priority support",
        "All IDE integrations",
        "Team collaboration (up to 5 members)",
        "CI/CD integration",
        "Custom test templates",
        "Advanced reporting"
      ],
      limitations: [
        "Enterprise security features",
        "Custom deployment",
        "SLA guarantees"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Enterprise security & compliance",
        "Custom deployment options",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom integrations",
        "Advanced analytics",
        "Priority feature requests",
        "On-premises deployment"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const allFeatures = [
    { name: "Test Generations", free: "10/month", pro: "Unlimited", enterprise: "Unlimited" },
    { name: "AI Analysis", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
    { name: "IDE Support", free: "VS Code", pro: "All IDEs", enterprise: "All IDEs" },
    { name: "Team Members", free: "1", pro: "5", enterprise: "Unlimited" },
    { name: "CI/CD Integration", free: false, pro: true, enterprise: true },
    { name: "Priority Support", free: false, pro: true, enterprise: true },
    { name: "Custom Templates", free: false, pro: true, enterprise: true },
    { name: "Advanced Reporting", free: false, pro: true, enterprise: true },
    { name: "Enterprise Security", free: false, pro: false, enterprise: true },
    { name: "SLA Guarantees", free: false, pro: false, enterprise: true },
    { name: "On-premises", free: false, pro: false, enterprise: true },
    { name: "Dedicated Support", free: false, pro: false, enterprise: true }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. Start free and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isYearly ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Yearly
              <span className="ml-1 text-sm text-green-400">(Save 17%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-cyan-500 bg-slate-800/70 shadow-2xl shadow-cyan-500/20'
                    : 'border-slate-700 bg-slate-800/50'
                } backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {typeof plan.price.monthly === 'number' ? '$' : ''}
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && (
                      <span className="text-slate-400 ml-1">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-8">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-slate-500">
                      <X className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Compare All Features</h2>
            <p className="text-xl text-slate-300">
              See what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Free</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Pro</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-4 px-6 text-slate-300">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-300">{feature.free}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-300">{feature.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-300">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "Is there a free trial for Pro plans?",
                answer: "Yes, we offer a 14-day free trial for all Pro features. No credit card required to start."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data remains accessible for 30 days after cancellation. You can export all your data during this period."
              },
              {
                question: "Do you offer volume discounts?",
                answer: "Yes! Enterprise plans include volume discounts for large teams. Contact our sales team for custom pricing."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
