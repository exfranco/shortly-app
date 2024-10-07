import React from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;                        
  alignment?: 'left' | 'center' | 'right';  
  width?: string;                       
  rounded?: 'lg' | 'full';               
  onClick?: () => void;                  
};

const Button: React.FC<ButtonProps> = ({ label, alignment = 'center', width, rounded = 'full', onClick }) => {
  
  let alignmentClass = '';
  switch (alignment) {
    case 'left':
      alignmentClass = 'md:ml-0';
      break;
    case 'center':
      alignmentClass = 'mx-auto';
      break;
    case 'right':
      alignmentClass = 'md:ml-auto';
      break;
  }

  
  const roundedClass = rounded === 'lg' ? 'rounded-lg' : 'rounded-full';

  
  const widthClass = width ? width : 'w-auto';

  return (
    <button
      className={`btn_emerald cursor-pointer p-2 bg-teal-400 text-white text-base flex ${alignmentClass} ${roundedClass} ${widthClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
