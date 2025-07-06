import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline";
}

export default function PricingCard({
  title,
  description,
  price,
  period = "per month",
  features,
  isPopular = false,
  buttonText,
  buttonVariant = "outline"
}: PricingCardProps) {
  if (isPopular) {
    return (
      <div className="fintech-gradient rounded-xl p-8 shadow-xl transform scale-105 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">
          MOST POPULAR
        </div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-blue-100 mb-4">{description}</p>
          <div className="text-4xl font-bold text-white">{price}</div>
          <div className="text-blue-200 text-sm">{period}</div>
        </div>
        <ul className="space-y-3 mb-8 text-white">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="w-4 h-4 text-green-300 mr-3" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full bg-white text-fintech-blue py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
          {buttonText}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-4xl font-bold text-fintech-blue">{price}</div>
        <div className="text-gray-500 text-sm">{period}</div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className="w-4 h-4 text-green-500 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={buttonVariant}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
          buttonVariant === "outline" 
            ? "border-2 border-fintech-blue text-fintech-blue hover:bg-fintech-blue hover:text-white" 
            : ""
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}
