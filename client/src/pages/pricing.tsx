import PricingCard from "@/components/ui/pricing-card";

export default function Pricing() {
  return (
    <div>
      <section className="pt-24 pb-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="Starter"
              description="Perfect for small businesses"
              price="$99"
              features={[
                "Up to 10K transactions/month",
                "Real-time fraud detection",
                "Basic analytics dashboard",
                "Email support"
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
            />
            
            <PricingCard
              title="Pro"
              description="Best for growing companies"
              price="$299"
              features={[
                "Up to 100K transactions/month",
                "Advanced AI detection",
                "Custom rules engine",
                "API integration",
                "24/7 priority support"
              ]}
              buttonText="Start Free Trial"
              isPopular={true}
            />
            
            <PricingCard
              title="Enterprise"
              description="For large organizations"
              price="Custom"
              period="contact for pricing"
              features={[
                "Unlimited transactions",
                "White-label solution",
                "Dedicated account manager",
                "Custom integrations",
                "SLA guarantees"
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How quickly can I get started?</h4>
                <p className="text-gray-600 text-sm">
                  Most customers are up and running within 24 hours with our simple API integration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer a free trial?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, we offer a 14-day free trial with full access to Pro features.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
                <p className="text-gray-600 text-sm">
                  Absolutely! You can upgrade or downgrade your plan at any time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What's your uptime guarantee?</h4>
                <p className="text-gray-600 text-sm">
                  We guarantee 99.9% uptime with our enterprise-grade infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
