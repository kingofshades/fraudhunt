import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import StatsCard from "@/components/ui/stats-card";
import { Brain, TrendingUp, Zap, Lock, Check } from "lucide-react";
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
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/results">
                  <Button variant="outline" className="border-2 border-fintech-blue text-fintech-blue px-8 py-3 rounded-lg font-semibold hover:bg-fintech-blue hover:text-white transition-all duration-300">
                    View Demo
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
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Lock className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">99.8% Accuracy</p>
                    <p className="text-xs text-gray-500">Fraud Detection Rate</p>
                  </div>
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
            <FeatureCard
              icon={<Brain className="text-fintech-blue text-xl w-6 h-6" />}
              title="AI Detection"
              description="Advanced machine learning algorithms detect fraudulent patterns in real-time"
              iconBgColor="bg-blue-100"
            />
            <FeatureCard
              icon={<TrendingUp className="text-fintech-purple text-xl w-6 h-6" />}
              title="Analytics"
              description="Comprehensive reporting and insights to optimize your fraud prevention"
              iconBgColor="bg-purple-100"
            />
            <FeatureCard
              icon={<Zap className="text-fintech-cyan text-xl w-6 h-6" />}
              title="Real-time"
              description="Instant fraud detection and prevention with millisecond response times"
              iconBgColor="bg-cyan-100"
            />
            <FeatureCard
              icon={<Lock className="text-green-600 text-xl w-6 h-6" />}
              title="Secure"
              description="Bank-level security with encryption and compliance standards"
              iconBgColor="bg-green-100"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard
              value="99.8%"
              label="Fraud Detection Accuracy"
              colorClass="text-fintech-blue"
            />
            <StatsCard
              value="$2.5B"
              label="Revenue Protected"
              colorClass="text-fintech-purple"
            />
            <StatsCard
              value="500+"
              label="Enterprise Clients"
              colorClass="text-fintech-cyan"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
