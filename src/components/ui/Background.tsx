import type { ReactNode } from 'react';

interface BackgroundProps {
  className?: string;
  children?: ReactNode;
}

function Background({ className = '', children }: BackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {children}
    </div>
  );
}

export default Background;