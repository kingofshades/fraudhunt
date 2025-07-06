import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How accurate is FraudHunt's AI detection?",
    answer: "FraudHunt achieves 99.8% accuracy with only 0.2% false positives, significantly outperforming traditional fraud detection systems that typically have 5-15% false positive rates.",
    category: "accuracy"
  },
  {
    id: "2",
    question: "How fast can FraudHunt process transactions?",
    answer: "Our AI processes transactions in under 50 milliseconds, providing real-time fraud detection without impacting customer experience or transaction flow.",
    category: "performance"
  },
  {
    id: "3",
    question: "How quickly can I integrate FraudHunt?",
    answer: "Integration typically takes 24-48 hours. We provide comprehensive APIs, SDKs for popular languages, and dedicated support to ensure smooth implementation.",
    category: "integration"
  },
  {
    id: "4",
    question: "What types of businesses can use FraudHunt?",
    answer: "FraudHunt works for e-commerce, fintech, digital banks, payment processors, marketplaces, and any business processing online transactions.",
    category: "business"
  },
  {
    id: "5",
    question: "How does FraudHunt handle global transactions?",
    answer: "We support 190+ countries with localized fraud patterns, currency support, and 24/7 monitoring across all time zones with 99.9% uptime SLA.",
    category: "global"
  },
  {
    id: "6",
    question: "What pricing models do you offer?",
    answer: "We offer flexible pricing based on transaction volume, with no setup fees, transparent pricing, and the ability to cancel anytime. Contact us for custom enterprise pricing.",
    category: "pricing"
  },
  {
    id: "7",
    question: "How does the AI learn and improve?",
    answer: "Our machine learning models continuously learn from transaction patterns, adapt to new fraud techniques, and improve accuracy over time using federated learning across our network.",
    category: "ai"
  },
  {
    id: "8",
    question: "What security measures protect my data?",
    answer: "We use bank-level encryption, SOC 2 compliance, zero-trust architecture, and never store sensitive payment data. All data is encrypted in transit and at rest.",
    category: "security"
  }
];

const categories = [
  { key: "all", label: "All Questions" },
  { key: "accuracy", label: "Accuracy" },
  { key: "performance", label: "Performance" },
  { key: "integration", label: "Integration" },
  { key: "business", label: "Business" },
  { key: "global", label: "Global" },
  { key: "pricing", label: "Pricing" },
  { key: "ai", label: "AI Technology" },
  { key: "security", label: "Security" }
];

export default function InteractiveFAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-fintech-blue/10 rounded-lg p-3 mr-4">
              <HelpCircle className="w-8 h-8 text-fintech-blue" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about FraudHunt's AI-powered fraud detection
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fintech-blue/20 focus:border-fintech-blue"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? "bg-fintech-blue text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-0">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600">
              Try adjusting your search or selecting a different category
            </p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-fintech-blue/5 rounded-xl border border-fintech-blue/20"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help you get started with FraudHunt
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-fintech-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-fintech-blue/90 transition-colors duration-200">
              Contact Support
            </button>
            <button className="border border-fintech-blue text-fintech-blue px-6 py-3 rounded-lg font-medium hover:bg-fintech-blue/5 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}