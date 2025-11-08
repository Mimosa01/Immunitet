import type { ReactNode } from 'react';
import { Link } from 'react-router';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  linkTo?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  linkTo
}: ButtonProps) {
  const baseClasses =
    'rounded-xl transition-all duration-200 focus:outline-none focus:outline-2 focus:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:scale-105 focus:outline-blue-400',
    secondary:
      'text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:scale-105 focus:outline-gray-300',
    outline:
      'text-blue-600 border-2 border-blue-600 bg-transparent hover:bg-blue-50 focus:outline-blue-400',
    ghost:
      'bg-transparent hover:bg-gray-100 focus:ring-gray-300 hover:bg-transparent',
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg',
  };

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        <div className='inline-flex items-center justify-center'>
          {iconLeft && <span className="mr-2">{iconLeft}</span>}
          {children}
          {iconRight && <span className="ml-2">{iconRight}</span>}
        </div>
      </Link>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <div className='inline-flex items-center justify-center'>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </div>
    </button>
  );
}

