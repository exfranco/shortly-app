"use client";

import React, { useState } from 'react';
import './Shorter.scss';
import LinkInput from './LinkInput/LinkInput';
import LinkList from './LinkList/LinkList';

type Link = {
  original: string;
  shortened: string;
};

const Shorter: React.FC = () => {
  
  const [links, setLinks] = useState<Link[]>([
    { original: 'https://example.com', shortened: 'https://short.ly/abc' },
    { original: 'https://anotherlink.com', shortened: 'https://short.ly/xyz' }
  ]);

  
  const handleCopy = (shortLink: string) => {
    navigator.clipboard.writeText(shortLink);
    alert(`Copied: ${shortLink}`);
  };

  
  const handleShorten = (url: string) => {
    // Simular acortamiento de enlace (en un caso real, se llamaría a una API aquí)
    const shortenedLink = `https://short.ly/${Math.random().toString(36).substring(2, 8)}`;
    setLinks([...links, { original: url, shortened: shortenedLink }]);
  };

  return (
    <section className="seccion_shorter">
      <LinkInput onShorten={handleShorten} />
      <LinkList links={links} onCopy={handleCopy} />
    </section>
  );
};

export default Shorter;
