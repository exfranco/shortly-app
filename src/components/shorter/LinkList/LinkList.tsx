"use client";

import React from 'react';
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
  return (
    <div className="results">
      <div className="subtitle my-8 md:pl-10 pl-5">
        Your Links
      </div>
      {links.length > 0 ? (
        links.map((link, index) => (
          <div key={index} className="short_link_bar md:flex items-center rounded-lg link-item">
            <div className="original_link w-full text-gray-700">{link.original}</div>
            <div className="shortened_link w-full text-gray-700">{link.shortened}</div>
            <button
              className="btn_copy w-full rounded-lg text-white text-center py-2 cursor-pointer"
              onClick={() => onCopy(link.shortened)}
            >
              Copy
            </button>
          </div>
        ))
      ) : (
        <p>No links available</p>
      )}
    </div>
  );
};

export default LinkList;
