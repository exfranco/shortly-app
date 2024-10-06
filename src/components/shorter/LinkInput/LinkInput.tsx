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
      setUrl(''); // Limpiar el input después de acortar el link
    }
  };

  return (
    <div className="link-input">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your link here"
        className="input"
      />
      <button className="btn-shorten" onClick={handleSubmit}>
        Shorten It
      </button>
    </div>
  );
};

export default LinkInput;
