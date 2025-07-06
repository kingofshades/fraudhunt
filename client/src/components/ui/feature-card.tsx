interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconBgColor = "bg-blue-100" 
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`${iconBgColor} rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
