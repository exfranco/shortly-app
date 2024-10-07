"use client"; 

import React, { useState } from 'react';
import './LinkInput.scss';

type LinkInputProps = {
  onShorten: (url: string) => void;
};

const LinkInput: React.FC<LinkInputProps> = ({ onShorten }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (url) {
      onShorten(url);
      setUrl('');
    }
  };

  return (
    

      <div className="box_full_link md:flex items-center rounded-lg">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your link here"
          className="flex-grow rounded-lg bg-white text-gray-500 border-none px-4 py-2"          
        />
          <button className="btn_shorten_it rounded-lg bg-blue-500 text-white text-center py-2 cursor-pointer" onClick={handleSubmit}>
            Shorten It
          </button>
      </div>
  
  );
};

export default LinkInput;
