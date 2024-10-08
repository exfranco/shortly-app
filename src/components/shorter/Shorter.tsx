"use client";

import React, { useState, useEffect } from 'react';
import './Shorter.scss';
import LinkInput from './LinkInput/LinkInput';
import LinkList from './LinkList/LinkList';

type Link = {
  original: string;
  shortened: string;
};

const Shorter: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);

  // Cargar los enlaces desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedLinks = localStorage.getItem('shortenedLinks');
    if (storedLinks) {
      try {
        const parsedLinks = JSON.parse(storedLinks);
        // Asegurarse de que es un array antes de establecer el estado
        if (Array.isArray(parsedLinks)) {
          setLinks(parsedLinks);
        }
      } catch (error) {
        console.error('Error parsing stored links:', error);
      }
    }
  }, []);

  // Guardar los enlaces en localStorage cada vez que se actualizan
  useEffect(() => {
    // Guardar solo si hay enlaces para evitar guardar un array vacío constantemente
    if (links.length > 0) {
      localStorage.setItem('shortenedLinks', JSON.stringify(links));
    }
  }, [links]);

  const handleCopy = (shortLink: string) => {
    navigator.clipboard.writeText(shortLink);
  };

  const handleShorten = async (url: string) => {
    try {
      const response = await fetch('/api/shorten-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error details:', errorData);
        throw new Error('Failed to shorten the link');
      }

      const data = await response.json();
      console.log('Data from API:', JSON.stringify(data, null, 2));

      const shortenedLink = data.shorturl;

      if (!shortenedLink) {
        console.error('No shortened link found in response. Check the response structure.');
        alert('The API did not return a shortened link. Please check the console for details.');
        return;
      }

      setLinks((prevLinks) => [...prevLinks, { original: url, shortened: shortenedLink }]);
    } catch (error) {
      console.error('Error shortening link:', error);
      alert('There was an error shortening the link. Please try again.');
    }
  };

  return (
    <section className="seccion_shorter">
      <LinkInput onShorten={handleShorten} />
      <LinkList links={links} onCopy={handleCopy} />
    </section>
  );
};

export default Shorter;
