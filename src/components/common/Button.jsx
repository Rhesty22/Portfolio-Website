import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  
  const variants = {
    primary: 'bg-cyan-500 text-slate-900 hover:bg-cyan-400 focus:ring-cyan-400 shadow-lg shadow-cyan-500/50',
    secondary: 'bg-purple-600 text-white hover:bg-purple-500 focus:ring-purple-500',
    outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500',
    ghost: 'text-gray-300 hover:bg-slate-700/50 focus:ring-cyan-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
