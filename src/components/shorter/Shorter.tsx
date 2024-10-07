import React from 'react';
import './Shorter.scss';
import LinkInput from './LinkInput/LinkInput';
import LinkList from './LinkList/LinkList';

const Shorter: React.FC = () => {
  return (
    <section className="seccion_shorter">
        <LinkInput/>
        <LinkList/>
    </section>
  );
};

export default Shorter;