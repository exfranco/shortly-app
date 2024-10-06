import React from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;                         // El texto del botón
  alignment?: 'left' | 'center' | 'right';  // Alineación del texto
  width?: string;                        // Ancho personalizado (opcional), como 'w-full', 'w-32'
  rounded?: 'lg' | 'full';               // Define si el botón es 'rounded-lg' o 'rounded-full' (opcional)
  onClick?: () => void;                  // Acción al hacer clic
};

const Button: React.FC<ButtonProps> = ({ label, alignment = 'center', width, rounded = 'full', onClick }) => {
  // Clases de alineación basadas en la prop 'alignment'
  let alignmentClass = '';
  switch (alignment) {
    case 'left':
      alignmentClass = 'justify-start';
      break;
    case 'center':
      alignmentClass = 'justify-center';
      break;
    case 'right':
      alignmentClass = 'justify-end';
      break;
  }

  // Clases de redondeado basadas en la prop 'rounded'
  const roundedClass = rounded === 'lg' ? 'rounded-lg' : 'rounded-full';

  // Si no se proporciona 'width', se utiliza 'w-auto'
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
