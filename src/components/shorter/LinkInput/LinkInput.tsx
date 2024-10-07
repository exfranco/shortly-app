"use client"; 

import React, { useState } from 'react';
import './LinkInput.scss';

type LinkInputProps = {
  onShorten: (url: string) => void;
};

const LinkInput: React.FC<LinkInputProps> = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Función para validar la URL
  const validateUrl = (value: string) => {
    const urlPattern = new RegExp(
      /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w-]*)*\/?$/
    );
    return urlPattern.test(value);
  };

  const handleSubmit = () => {
    if (url.trim() === '' || !validateUrl(url)) {  
      setIsError(true);
      setIsValid(false);
      return;
    }

    onShorten(url);
    setUrl(''); 
    setIsError(false);
    setIsValid(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);

    // Validar URL al escribir
    if (validateUrl(value)) {
      setIsError(false);
      setIsValid(true);
    } else {
      setIsError(true);
      setIsValid(false);
    }
  };

  return (
    <div className="box_full_link md:flex items-center rounded-lg">
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter your link here"
        className={`flex-grow rounded-lg bg-white text-gray-500 border-none px-4 py-2 ${isError ? 'error' : ''} ${isValid ? 'success' : ''}`}
      />
      {isError && (
        <p className="text_error">Please add a link</p>
      )}
      <button
        className="btn_shorten_it rounded-lg bg-blue-500 text-white text-center py-2 cursor-pointer"
        onClick={handleSubmit}
      >
        Shorten It
      </button>
      
    </div>
  );
};

export default LinkInput;
