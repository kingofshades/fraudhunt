import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import StatsCard from "@/components/ui/stats-card";
import { Brain, TrendingUp, Zap, Lock, Check, Shield, BarChart3, ArrowUpRight, Target } from "lucide-react";
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
                <Link href="/results">
                  <Button variant="outline" className="border-2 border-fintech-blue text-fintech-blue px-8 py-3 rounded-lg font-semibold hover:bg-fintech-blue hover:text-white transition-all duration-300">
                    View Results
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

          {/* Interactive Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fraud Detection Over Time</h3>
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-fintech-blue/10 to-fintech-purple/10 rounded-lg flex items-end justify-center">
                  <div className="flex items-end space-x-3 h-full w-full p-4">
                    <div className="bg-fintech-blue w-8 h-16 rounded-t chart-bar hover:bg-fintech-purple transition-colors duration-300 cursor-pointer" title="Jan: 85%"></div>
                    <div className="bg-fintech-blue w-8 h-20 rounded-t chart-bar hover:bg-fintech-purple transition-colors duration-300 cursor-pointer" title="Feb: 87%"></div>
                    <div className="bg-fintech-blue w-8 h-24 rounded-t chart-bar hover:bg-fintech-purple transition-colors duration-300 cursor-pointer" title="Mar: 91%"></div>
                    <div className="bg-fintech-blue w-8 h-32 rounded-t chart-bar hover:bg-fintech-purple transition-colors duration-300 cursor-pointer" title="Apr: 93%"></div>
                    <div className="bg-fintech-blue w-8 h-40 rounded-t chart-bar hover:bg-fintech-purple transition-colors duration-300 cursor-pointer" title="May: 96%"></div>
                    <div className="bg-fintech-blue w-8 h-48 rounded-t chart-bar hover:bg-fintech-purple transition-colors duration-300 cursor-pointer" title="Jun: 97%"></div>
                    <div className="bg-fintech-purple w-8 h-52 rounded-t chart-bar hover:bg-fintech-cyan transition-colors duration-300 cursor-pointer" title="Jul: 98%"></div>
                    <div className="bg-fintech-purple w-8 h-56 rounded-t chart-bar hover:bg-fintech-cyan transition-colors duration-300 cursor-pointer" title="Aug: 99%"></div>
                  </div>
                </div>
                <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-600">Monthly fraud detection rate improvement</div>
                <div className="text-2xl font-bold text-fintech-blue mt-2 animate-pulse-slow">+23% this quarter</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Protection</h3>
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 animate-float">
                    <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-fintech-blue to-fintech-purple rounded-full transition-all duration-500 hover:scale-105" style={{clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 87%, 50% 87%)'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">$2.5B</div>
                        <div className="text-sm text-gray-600">Protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-600">Total revenue protected across all clients</div>
                <div className="text-2xl font-bold text-fintech-purple mt-2 animate-pulse-slow">87% of transactions</div>
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
    </div>
  );
}
