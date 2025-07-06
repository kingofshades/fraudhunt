import StatsCard from "@/components/ui/stats-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Results() {
  return (
    <div>
      <section className="pt-24 pb-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Proven Results</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how FraudHunt has helped businesses reduce fraud and increase revenue
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <StatsCard
              value="0.20%"
              label="False Positive Rate"
              description="Industry avg: 5%"
              colorClass="text-fintech-blue"
            />
            <StatsCard
              value="5%"
              label="Revenue Increase"
              description="Average across clients"
              colorClass="text-fintech-purple"
            />
            <StatsCard
              value="99.8%"
              label="Detection Accuracy"
              description="Continuously improving"
              colorClass="text-fintech-cyan"
            />
            <StatsCard
              value="85%"
              label="Fraud Reduction"
              description="First 30 days"
              colorClass="text-green-600"
            />
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Giant</h3>
              <p className="text-gray-600 mb-6">
                Reduced chargebacks by 78% while maintaining customer experience
              </p>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="E-commerce fraud analytics dashboard" 
                className="rounded-lg w-full mb-4"
              />
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Fraud Prevention</span>
                <span className="font-semibold text-fintech-blue">+78%</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Bank</h3>
              <p className="text-gray-600 mb-6">
                Increased transaction approval rates while detecting 99.9% of fraud
              </p>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Digital banking fraud detection interface" 
                className="rounded-lg w-full mb-4"
              />
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Approval Rate</span>
                <span className="font-semibold text-fintech-purple">+15%</span>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="fintech-gradient rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Calculate Your Potential Savings</h3>
            <p className="mb-6 opacity-90">See how much you could save with FraudHunt</p>
            <Link href="/contact">
              <Button className="bg-white text-fintech-blue px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Start ROI Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
