"use client";

import React, { useState } from 'react';
import './LinkList.scss';

type Link = {
  original: string;
  shortened: string;
};

type LinkListProps = {
  links: Link[];
  onCopy: (shortLink: string) => void;
};

const LinkList: React.FC<LinkListProps> = ({ links = [], onCopy }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (link: string, index: number) => {
    onCopy(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reinicia el estado después de 2 segundos
  };

  return (
    <div className={`results ${links.length === 0 ? 'hidden' : ''}`}>
      <div className="subtitle my-8 md:pl-10 pl-5">
        Your Links
      </div>
      {links.map((link, index) => (
        <div key={index} className="short_link_bar md:flex items-center rounded-lg link-item">
          <div className="original_link w-full text-gray-700">{link.original}</div>
          <div className="shortened_link w-full text-gray-700">{link.shortened}</div>
          <button
            className={`btn_copy w-full rounded-lg text-white text-center py-2 cursor-pointer ${copiedIndex === index ? 'copied' : ''}`}
            onClick={() => handleCopy(link.shortened, index)}
          >
            {copiedIndex === index ? 'Copied' : 'Copy'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
