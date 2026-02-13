
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left', light = false }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl font-medium ${light ? 'text-gray-300' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
