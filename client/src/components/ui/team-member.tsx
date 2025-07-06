import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  roleColor?: string;
  size?: "small" | "large";
}

export default function TeamMember({ 
  name, 
  role, 
  description, 
  imageUrl, 
  linkedin, 
  twitter, 
  github,
  roleColor = "text-fintech-blue",
  size = "large"
}: TeamMemberProps) {
  const isSmall = size === "small";
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
      <img 
        src={imageUrl} 
        alt={`${name}`} 
        className={`${isSmall ? 'w-20 h-20' : 'w-24 h-24'} rounded-full mx-auto mb-${isSmall ? '3' : '4'} object-cover`}
      />
      <h3 className={`${isSmall ? 'text-lg' : 'text-xl'} font-bold text-gray-900 mb-${isSmall ? '1' : '2'}`}>
        {name}
      </h3>
      <p className={`${roleColor} font-semibold mb-2 ${isSmall ? 'text-sm' : ''}`}>{role}</p>
      <p className={`text-gray-600 ${isSmall ? 'text-xs' : 'text-sm'} mb-4`}>{description}</p>
      <div className="flex justify-center space-x-3">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 text-fintech-blue hover:text-fintech-purple cursor-pointer transition-colors" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Twitter className="w-4 h-4 text-fintech-blue hover:text-fintech-purple cursor-pointer transition-colors" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 text-fintech-blue hover:text-fintech-purple cursor-pointer transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}
