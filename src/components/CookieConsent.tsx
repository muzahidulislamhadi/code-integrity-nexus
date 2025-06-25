
import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Cookie className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  We value your privacy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We use cookies to enhance your experience, analyze site usage, and assist in marketing efforts. 
                  By continuing to browse, you consent to our use of cookies.
                </p>
              </div>
            </div>
            <button
              onClick={handleReject}
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {showDetails && (
            <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    Essential Cookies
                  </h4>
                  <p className="text-slate-400">
                    Required for basic site functionality and security. Cannot be disabled.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                  <p className="text-slate-400">
                    Help us understand how visitors interact with our website to improve user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                  <p className="text-slate-400">
                    Used to deliver personalized ads and measure campaign effectiveness.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <Settings className="w-4 h-4 mr-2" />
              {showDetails ? 'Hide Details' : 'Cookie Details'}
            </button>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptNecessary}
                className="px-6 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all text-sm font-medium"
              >
                Accept All Cookies
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-4">
            Learn more in our{' '}
            <a href="/privacy-policy" className="text-cyan-400 hover:text-cyan-300">
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="/terms-of-service" className="text-cyan-400 hover:text-cyan-300">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
