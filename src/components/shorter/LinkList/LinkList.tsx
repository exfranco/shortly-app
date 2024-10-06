import React from 'react';
import './LinkList.scss';

type LinkListProps = {
  links: { original: string; shortened: string }[];
  onCopy: (shortLink: string) => void;
};

const LinkList: React.FC<LinkListProps> = ({ links, onCopy }) => {
  return (
    <div className="link-list">
      {links.map((link, index) => (
        <div key={index} className="link-item">
          <div className="original-link">{link.original}</div>
          <div className="shortened-link">{link.shortened}</div>
          <button className="btn-copy" onClick={() => onCopy(link.shortened)}>
            Copy
          </button>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
