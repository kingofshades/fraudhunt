import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import StatsCard from "@/components/ui/stats-card";
import { Brain, TrendingUp, Zap, Lock, Check, Shield, BarChart3, ArrowUpRight, Target, Star, Users, Clock, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="fintech-gradient-light pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                AI-Powered<br />
                <span className="fintech-gradient bg-clip-text text-transparent">
                  Fraud Detection
                </span><br />
                To Unlock Revenue
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automated payment optimization and fraud prevention built into the FraudHunt Intelligence with advanced AI algorithms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <Button className="fintech-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-2 border-fintech-blue text-fintech-blue px-8 py-3 rounded-lg font-semibold hover:bg-fintech-blue hover:text-white transition-all duration-300">
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2 w-4 h-4" />
                  <span>No setup fee</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2 w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Fraud detection dashboard" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-slide-up">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2 animate-pulse-slow">
                    <Lock className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">99.8% Accuracy</p>
                    <p className="text-xs text-gray-500">Fraud Detection Rate</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-fintech-blue rounded-lg shadow-lg p-3 animate-slide-up">
                <div className="flex items-center space-x-2">
                  <Target className="text-white w-4 h-4" />
                  <span className="text-white text-xs font-semibold">Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-medium mb-8">TRUSTED BY LEADING FINANCIAL INSTITUTIONS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex justify-center">
              <img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe" className="h-8" />
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.worldvectorlogo.com/logos/visa-2.svg" alt="Visa" className="h-8" />
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.worldvectorlogo.com/logos/mastercard-2.svg" alt="Mastercard" className="h-8" />
            </div>
            <div className="flex justify-center">
              <img src="https://cdn.worldvectorlogo.com/logos/paypal-2.svg" alt="PayPal" className="h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to fight fraud</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive fraud prevention tools built for modern financial operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="transform hover:scale-105 transition-all duration-300">
              <FeatureCard
                icon={<Brain className="text-fintech-blue text-xl w-6 h-6" />}
                title="AI Detection"
                description="Advanced machine learning algorithms detect fraudulent patterns in real-time"
                iconBgColor="bg-blue-100"
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <FeatureCard
                icon={<TrendingUp className="text-fintech-purple text-xl w-6 h-6" />}
                title="Analytics"
                description="Comprehensive reporting and insights to optimize your fraud prevention"
                iconBgColor="bg-purple-100"
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <FeatureCard
                icon={<Zap className="text-fintech-cyan text-xl w-6 h-6" />}
                title="Real-time"
                description="Instant fraud detection and prevention with millisecond response times"
                iconBgColor="bg-cyan-100"
              />
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <FeatureCard
                icon={<Lock className="text-green-600 text-xl w-6 h-6" />}
                title="Secure"
                description="Bank-level security with encryption and compliance standards"
                iconBgColor="bg-green-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how FraudHunt has helped businesses reduce fraud and increase revenue
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 border-l-4 border-fintech-blue">
              <div className="text-3xl font-bold text-fintech-blue mb-2">0.20%</div>
              <div className="text-gray-600 text-sm font-medium">False Positive Rate</div>
              <div className="text-xs text-gray-500 mt-1">Industry avg: 5%</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 border-l-4 border-fintech-purple">
              <div className="text-3xl font-bold text-fintech-purple mb-2">5%</div>
              <div className="text-gray-600 text-sm font-medium">Revenue Increase</div>
              <div className="text-xs text-gray-500 mt-1">Average across clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 border-l-4 border-fintech-cyan">
              <div className="text-3xl font-bold text-fintech-cyan mb-2">99.8%</div>
              <div className="text-gray-600 text-sm font-medium">Detection Accuracy</div>
              <div className="text-xs text-gray-500 mt-1">Continuously improving</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600 text-sm font-medium">Fraud Reduction</div>
              <div className="text-xs text-gray-500 mt-1">First 30 days</div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Detection Performance</h3>
                <div className="bg-fintech-blue/10 rounded-lg p-2">
                  <TrendingUp className="text-fintech-blue w-6 h-6" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Accuracy Rate</span>
                    <span className="text-sm font-bold text-fintech-blue">99.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-fintech-blue to-fintech-purple h-2 rounded-full" style={{width: '99.8%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Speed (ms)</span>
                    <span className="text-sm font-bold text-fintech-purple">&lt; 50ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-fintech-purple to-fintech-cyan h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">False Positives</span>
                    <span className="text-sm font-bold text-green-600">0.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-fintech-blue/5 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-fintech-blue">Industry Leading</div>
                  <div className="text-sm text-gray-600">Performance metrics</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Business Impact</h3>
                <div className="bg-fintech-purple/10 rounded-lg p-2">
                  <BarChart3 className="text-fintech-purple w-6 h-6" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-fintech-blue/5 rounded-lg">
                  <div className="text-3xl font-bold text-fintech-blue mb-1">$2.5B</div>
                  <div className="text-sm text-gray-600">Revenue Protected</div>
                </div>
                <div className="text-center p-4 bg-fintech-purple/5 rounded-lg">
                  <div className="text-3xl font-bold text-fintech-purple mb-1">85%</div>
                  <div className="text-sm text-gray-600">Fraud Reduction</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Chargebacks Prevented</span>
                  <span className="text-sm font-bold text-fintech-cyan">78% ↑</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Customer Approval Rate</span>
                  <span className="text-sm font-bold text-green-600">15% ↑</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Processing Time</span>
                  <span className="text-sm font-bold text-fintech-blue">60% ↓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-fintech-blue/10 rounded-lg p-3 mr-4">
                  <Shield className="text-fintech-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">E-commerce Platform</h3>
                  <p className="text-gray-600 text-sm">Major retail company</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Reduced chargebacks by 78% while maintaining seamless customer experience and increasing approval rates.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Chargeback reduction</span>
                  <div className="flex items-center">
                    <span className="font-semibold text-fintech-blue">78%</span>
                    <ArrowUpRight className="w-4 h-4 text-fintech-blue ml-1" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Revenue saved</span>
                  <span className="font-semibold text-fintech-purple">$1.2M</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-fintech-purple/10 rounded-lg p-3 mr-4">
                  <BarChart3 className="text-fintech-purple w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Digital Bank</h3>
                  <p className="text-gray-600 text-sm">Fintech startup</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Increased transaction approval rates by 15% while detecting 99.9% of fraudulent transactions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Approval rate increase</span>
                  <div className="flex items-center">
                    <span className="font-semibold text-fintech-purple">15%</span>
                    <ArrowUpRight className="w-4 h-4 text-fintech-purple ml-1" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Fraud detection</span>
                  <span className="font-semibold text-fintech-cyan">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FraudHunt?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we compare to traditional fraud detection solutions
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8 text-center">
                <div className="text-gray-500 text-sm font-medium mb-4">Traditional Solutions</div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Setup Time</span>
                    <span className="text-sm font-medium text-red-500">6-12 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">False Positives</span>
                    <span className="text-sm font-medium text-red-500">5-15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="text-sm font-medium text-red-500">5-10 seconds</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Maintenance</span>
                    <span className="text-sm font-medium text-red-500">High</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 text-center bg-fintech-blue/5 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fintech-blue text-white px-4 py-1 rounded-full text-xs font-bold">
                  FRAUDHUNT
                </div>
                <div className="text-fintech-blue text-sm font-bold mb-4 mt-2">AI-Powered Solution</div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Setup Time</span>
                    <span className="text-sm font-bold text-fintech-blue">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">False Positives</span>
                    <span className="text-sm font-bold text-fintech-blue">0.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="text-sm font-bold text-fintech-blue">&lt; 50ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Maintenance</span>
                    <span className="text-sm font-bold text-fintech-blue">Automated</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 text-center">
                <div className="text-gray-500 text-sm font-medium mb-4">In-House Development</div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Setup Time</span>
                    <span className="text-sm font-medium text-red-500">12-24 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Development Cost</span>
                    <span className="text-sm font-medium text-red-500">$2M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Team Required</span>
                    <span className="text-sm font-medium text-red-500">20+ engineers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Ongoing Costs</span>
                    <span className="text-sm font-medium text-red-500">Very High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick & Easy Setup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate with your existing payment infrastructure in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-fintech-blue rounded-full p-2 mr-4 mt-1">
                    <div className="text-white text-sm font-bold w-6 h-6 flex items-center justify-center">1</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Integration</h3>
                    <p className="text-gray-600">Simple REST API integration with comprehensive documentation and SDKs for popular programming languages.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-fintech-purple rounded-full p-2 mr-4 mt-1">
                    <div className="text-white text-sm font-bold w-6 h-6 flex items-center justify-center">2</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Configure Rules</h3>
                    <p className="text-gray-600">Set up custom fraud detection rules and thresholds tailored to your business needs and risk tolerance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-fintech-cyan rounded-full p-2 mr-4 mt-1">
                    <div className="text-white text-sm font-bold w-6 h-6 flex items-center justify-center">3</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Go Live</h3>
                    <p className="text-gray-600">Start protecting your transactions immediately with real-time fraud detection and automated decision making.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="fintech-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Start Integration
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-gray-500"># Install FraudHunt SDK</span>
                </div>
                <div className="mb-2">npm install fraudhunt-sdk</div>
                <div className="mb-4">
                  <span className="text-gray-500"># Initialize with your API key</span>
                </div>
                <div className="mb-2">const fraudhunt = new FraudHunt(API_KEY);</div>
                <div className="mb-4">
                  <span className="text-gray-500"># Check transaction</span>
                </div>
                <div className="mb-2">const result = await fraudhunt.analyze({`{`}</div>
                <div className="mb-2 ml-4">amount: 1000,</div>
                <div className="mb-2 ml-4">userId: "user123",</div>
                <div className="mb-2 ml-4">paymentMethod: "card"</div>
                <div className="mb-2">{`});`}</div>
                <div className="mt-4">
                  <span className="text-blue-400">// Result: {`{ risk: "low", confidence: 0.98 }`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers say about their experience with FraudHunt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "FraudHunt reduced our false positives by 90% while catching more actual fraud. The ROI was immediate."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="CEO" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-500">CEO, PayFlow</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Integration was seamless. We were up and running in less than a day with full fraud protection."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="CTO" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-500">CTO, FinanceHub</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The AI learns our transaction patterns and gets smarter over time. It's like having a fraud expert on our team."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                  alt="VP" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">David Kim</div>
                  <div className="text-sm text-gray-500">VP Risk, TechBank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coverage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Fraud Protection</h2>
              <p className="text-xl text-gray-600 mb-8">
                Protect your business worldwide with our comprehensive fraud detection network covering 190+ countries.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-fintech-blue/5 rounded-lg">
                  <Globe className="text-fintech-blue w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-fintech-blue">190+</div>
                  <div className="text-sm text-gray-600">Countries Covered</div>
                </div>
                <div className="text-center p-4 bg-fintech-purple/5 rounded-lg">
                  <Users className="text-fintech-purple w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-fintech-purple">500M+</div>
                  <div className="text-sm text-gray-600">Users Protected</div>
                </div>
                <div className="text-center p-4 bg-fintech-cyan/5 rounded-lg">
                  <Clock className="text-fintech-cyan w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-fintech-cyan">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center p-4 bg-green-100 rounded-lg">
                  <Shield className="text-green-600 w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Global network visualization" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-fintech-blue/20 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Globe className="w-16 h-16 mx-auto mb-4 animate-pulse-slow" />
                  <div className="text-2xl font-bold">Worldwide Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 fintech-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Stop Fraud and Unlock Revenue?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already protecting their business with FraudHunt's AI-powered fraud detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-fintech-blue px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-fintech-blue transition-all duration-300">
                View Pricing
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            No setup fees • Cancel anytime • 24/7 support
          </div>
        </div>
      </section>
    </div>
  );
}
