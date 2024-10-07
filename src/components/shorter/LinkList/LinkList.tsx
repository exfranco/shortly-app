"use client"; 

import React, { useState } from 'react';
import './LinkList.scss';

type Link = {
  original: string;
  shortened: string;
};

const LinkList: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([
    { original: 'https://example.com', shortened: 'https://short.ly/abc' },
    { original: 'https://anotherlink.com', shortened: 'https://short.ly/xyz' }
  ]);
  return (
         
    <div className="results">
      <div className="subtitle my-8 md:pl-10 pl-5">
        Your Links
      </div>
      {links.map((link, index) => (
        <div key={index} className="short_link_bar md:flex items-center rounded-lg link-item">
          <div className="original_link w-full text-gray-700">{link.original}</div>
          <div className="shortened_link w-full text-gray-700">{link.shortened}</div>
          <button className="btn_copy w-full rounded-lg text-white text-center py-2 cursor-pointer" onClick={() => onCopy(link.shortened)}>
            Copy
          </button>
        </div>
      ))}
    </div>
    
  );
};

export default LinkList;
