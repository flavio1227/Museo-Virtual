import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export default function Card({ title, description, icon: Icon, image, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start space-x-3 mb-3">
          {Icon && <Icon className="h-6 w-6 text-amber-700 mt-1 flex-shrink-0" />}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
