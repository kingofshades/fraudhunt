import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import StatsCard from "@/components/ui/stats-card";
import AnimatedCounter from "@/components/ui/animated-counter";
import InteractiveDemo from "@/components/ui/interactive-demo";
import InteractiveFAQ from "@/components/ui/interactive-faq";
import ChatWidget from "@/components/ui/chat-widget";
import { Brain, TrendingUp, Zap, Lock, Check, Shield, BarChart3, ArrowUpRight, Target, Star, Users, Clock, Globe, PlayCircle, Sparkles, Cpu, Database, Network } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [visibleCounters, setVisibleCounters] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCounters(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.section 
        className="fintech-gradient-light pt-16 pb-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-fintech-blue/10 rounded-full text-fintech-blue text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Fraud Detection
              </motion.div>
              
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  AI-Powered<br />
                </motion.span>
                <motion.span 
                  className="fintech-gradient bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Fraud Detection
                </motion.span><br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  To Unlock Revenue
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                Automated payment optimization and fraud prevention built into the FraudHunt Intelligence with advanced AI algorithms.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="fintech-gradient text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                      <span className="relative z-10 flex items-center">
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Request Demo
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/pricing">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="border-2 border-fintech-blue text-fintech-blue px-8 py-3 rounded-lg font-semibold hover:bg-fintech-blue hover:text-white transition-all duration-300">
                      View Pricing
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-6 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2 w-4 h-4" />
                  <span>No setup fee</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-2 w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Fraud detection dashboard" 
                className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating Stats */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2 animate-pulse">
                    <Lock className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">99.8% Accuracy</p>
                    <p className="text-xs text-gray-500">Fraud Detection Rate</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-fintech-blue rounded-lg shadow-xl p-3 border border-fintech-blue/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <Target className="text-white w-4 h-4" />
                  <span className="text-white text-xs font-semibold">Real-time</span>
                </div>
              </motion.div>
              
              {/* AI Processing Visualization */}
              <motion.div 
                className="absolute top-1/2 right-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Cpu className="text-fintech-purple w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">AI Processing</p>
                    <p className="text-xs text-gray-500">&lt; 50ms</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Demo Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Experience AI in Action
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              See how FraudHunt's AI analyzes transactions and detects fraud patterns in real-time
            </motion.p>
          </div>
          <InteractiveDemo />
        </div>
      </motion.section>

      {/* Trusted Partners */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm font-medium mb-8">TRUSTED BY LEADING FINANCIAL INSTITUTIONS</p>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
              { src: "https://cdn.worldvectorlogo.com/logos/visa-2.svg", alt: "Visa" },
              { src: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg", alt: "Mastercard" },
              { src: "https://cdn.worldvectorlogo.com/logos/paypal-2.svg", alt: "PayPal" }
            ].map((logo, index) => (
              <motion.div 
                key={logo.alt}
                className="flex justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={logo.src} alt={logo.alt} className="h-8" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 fintech-gradient-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Everything you need to fight fraud
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive fraud prevention tools built for modern financial operations
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="text-fintech-blue text-xl w-6 h-6" />,
                title: "AI Detection",
                description: "Advanced machine learning algorithms detect fraudulent patterns in real-time",
                iconBgColor: "bg-blue-100",
                delay: 0
              },
              {
                icon: <TrendingUp className="text-fintech-purple text-xl w-6 h-6" />,
                title: "Analytics",
                description: "Comprehensive reporting and insights to optimize your fraud prevention",
                iconBgColor: "bg-purple-100",
                delay: 0.1
              },
              {
                icon: <Zap className="text-fintech-cyan text-xl w-6 h-6" />,
                title: "Real-time",
                description: "Instant fraud detection and prevention with millisecond response times",
                iconBgColor: "bg-cyan-100",
                delay: 0.2
              },
              {
                icon: <Lock className="text-green-600 text-xl w-6 h-6" />,
                title: "Secure",
                description: "Bank-level security with encryption and compliance standards",
                iconBgColor: "bg-green-100",
                delay: 0.3
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -5 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconBgColor={feature.iconBgColor}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Results Section with Animated Counters */}
      <motion.section 
        id="stats-section" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Proven Results
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              See how FraudHunt has helped businesses reduce fraud and increase revenue
            </motion.p>
          </div>

          {/* Key Metrics with Animated Counters */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: 0.20, suffix: "%", label: "False Positive Rate", sublabel: "Industry avg: 5%", color: "fintech-blue" },
              { value: 5, suffix: "%", label: "Revenue Increase", sublabel: "Average across clients", color: "fintech-purple" },
              { value: 99.8, suffix: "%", label: "Detection Accuracy", sublabel: "Continuously improving", color: "fintech-cyan" },
              { value: 85, suffix: "%", label: "Fraud Reduction", sublabel: "First 30 days", color: "green-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 border-l-4 border-${stat.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    isVisible={visibleCounters}
                  />
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>

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
      </motion.section>

      {/* Add the FAQ Section */}
      <InteractiveFAQ />

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
      <motion.section 
        className="py-20 fintech-gradient relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Network className="w-32 h-32 text-white animate-pulse" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Database className="w-24 h-24 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Stop Fraud and Unlock Revenue?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join hundreds of companies already protecting their business with FraudHunt's AI-powered fraud detection.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-fintech-blue px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </Button>
              </motion.div>
            </Link>
            <Link href="/pricing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-fintech-blue transition-all duration-300">
                  View Pricing
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div 
            className="mt-8 text-blue-200 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            No setup fees • Cancel anytime • 24/7 support
          </motion.div>
        </div>
      </motion.section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
