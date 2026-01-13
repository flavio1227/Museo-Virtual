import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({
  title,
  subtitle,
  children,
  className = '',
  background = 'white'
}: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`${bgClass} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
