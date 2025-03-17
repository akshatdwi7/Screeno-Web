import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  Brain, 
  LineChart as ChartLineUp,
  Smartphone,
  Shield,
  ArrowRight,
  Apple,
  Play,
  DollarSign,
  Star,
  Clock,
  Bell,
  Rocket,
  Gift,
  Crown
} from 'lucide-react';

function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <Rocket className="h-16 w-16 text-purple-500 mx-auto mb-4 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          You're Early! 🎉
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Thanks for your interest in Screeno. We're putting the finishing touches on something amazing.
        </p>
        <div className="bg-purple-900/30 rounded-xl p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-8 w-8 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-semibold">Early Access Benefits</h2>
          </div>
          <ul className="text-left space-y-4 mb-6">
            <li className="flex items-center">
              <Gift className="h-5 w-5 text-purple-400 mr-2" />
              <span>3 months of Premium features for free</span>
            </li>
            <li className="flex items-center">
              <Star className="h-5 w-5 text-purple-400 mr-2" />
              <span>Priority access to new features</span>
            </li>
            <li className="flex items-center">
              <Brain className="h-5 w-5 text-purple-400 mr-2" />
              <span>Exclusive AI trading workshops</span>
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <p className="text-gray-400 mb-4">Created with ❤️ by Akshat</p>
          <button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
            onClick={() => window.location.href = 'https://forms.gle/yourGoogleFormLink'}
          >
            Join the Waitlist
          </button>
        </div>
        <div className="text-sm text-gray-500">
          <p>We'll notify you as soon as Screeno is ready!</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isIOS, setIsIOS] = useState(false);
  const [downloadCount, setDownloadCount] = useState(24367);
  const [showWaitlist, setShowWaitlist] = useState(false);
  
  useEffect(() => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const interval = setInterval(() => {
      setDownloadCount(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (showWaitlist) {
    return <WaitlistPage />;
  }

  const handleDownload = (platform: 'ios' | 'android') => {
    setShowWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <img 
              src="public/logo.png"
              alt="Screeno Logo" 
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold">Screeno</span>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => handleDownload('ios')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center space-x-2"
            >
              <Apple className="h-4 w-4" />
              <span>App Store</span>
            </button>
            <button
              onClick={() => handleDownload('android')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center space-x-2"
            >
              <Play className="h-4 w-4" />
              <span>Play Store</span>
            </button>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Your AI-Powered Stock Market Companion
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join {downloadCount.toLocaleString()}+ traders who've discovered the power of AI-driven stock screening
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <button
              onClick={() => handleDownload('ios')}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2 shadow-lg shadow-purple-500/20"
            >
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </button>
            <button
              onClick={() => handleDownload('android')}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center space-x-2 shadow-lg shadow-purple-500/20"
            >
              <Play className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </button>
          </div>
          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>24/7 Market Analysis</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <Brain className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
            <p className="text-gray-400">Our advanced AI analyzes millions of data points to predict market trends with unprecedented accuracy.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <Bell className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Real-Time Alerts</h3>
            <p className="text-gray-400">Get instant notifications for market opportunities and price movements that match your strategy.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <DollarSign className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Smart Portfolio</h3>
            <p className="text-gray-400">Track your investments with intelligent portfolio management and risk analysis tools.</p>
          </div>
        </div>

        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-8">Trusted by Professional Traders</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-black/20 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=faces"
                  alt="User"
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-500"
                />
                <p className="text-gray-300 mb-4">"Made $127,493 in profits last quarter using Screeno's AI signals. Best investment tool I've ever used."</p>
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-gray-400">Senior Portfolio Manager</p>
              </div>
              <div className="p-6 bg-black/20 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=faces"
                  alt="User"
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-500"
                />
                <p className="text-gray-300 mb-4">"The AI predictions are scary accurate. Caught multiple breakout stocks before they exploded."</p>
                <p className="font-semibold">Michael Roberts</p>
                <p className="text-sm text-gray-400">Day Trader</p>
              </div>
              <div className="p-6 bg-black/20 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"
                  alt="User"
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-purple-500"
                />
                <p className="text-gray-300 mb-4">"Finally quit my 9-5 thanks to Screeno's trading signals. The AI analysis is worth every penny."</p>
                <p className="font-semibold">Emily Thompson</p>
                <p className="text-sm text-gray-400">Full-time Trader</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4">Start Trading Smarter Today</h2>
            <p className="text-xl mb-8">Join thousands of successful traders who've already discovered the power of AI-driven market analysis</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleDownload('ios')}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all flex items-center space-x-2"
              >
                <Apple className="h-6 w-6" />
                <span>Download for iOS</span>
              </button>
              <button
                onClick={() => handleDownload('android')}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all flex items-center space-x-2"
              >
                <Play className="h-6 w-6" />
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center text-gray-400">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Shield className="h-5 w-5" />
            <span>Bank-grade security. Your data is always protected.</span>
          </div>
          <p>© 2024 Screeno. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;