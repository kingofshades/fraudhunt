interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  colorClass?: string;
}

export default function StatsCard({ value, label, description, colorClass = "text-fintech-blue" }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
      <div className={`text-3xl font-bold ${colorClass} mb-2`}>{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
      {description && <div className="text-xs text-gray-500 mt-2">{description}</div>}
    </div>
  );
}
