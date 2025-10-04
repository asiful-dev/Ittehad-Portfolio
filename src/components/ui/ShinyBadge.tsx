import React from 'react';
import { Sparkles } from "lucide-react"
interface ShinyBadgeProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyBadge: React.FC<ShinyBadgeProps> = ({ text, speed = 5, className = '' }) => {

  return (
    <div
      className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm ${className}`}
    >
      <div className="relative flex items-center gap-2">
        <span className="relative z-10 text-sm font-medium text-white/90">{text}</span>
        <Sparkles className="w-3.5 h-3.5 text-white/60" />
      </div>
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundSize: '200% 100%',
          animation: `shine ${speed}s infinite linear`
        }}
      />
    </div>
  );
};
export { ShinyBadge };
