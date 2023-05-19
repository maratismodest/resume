'use client'
import {PDFDownloadLink} from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import React, {useEffect, useState} from 'react';

const MyDocument = dynamic(() => import('../components/MyDocument'), {
  ssr: false,
});

const Header = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <header className='sticky top-0 z-10 bg-white border-b'>
      <nav className='flex justify-around'>
        <a href='https://www.linkedin.com/in/marat-faizerakhmanov'>Linkedin</a>
        <a href='https://github.com/maratismodest'>Github</a>
        <a href='https://t.me/maratfaizer'>Telegram</a>
        {isClient ? <PDFDownloadLink document={<MyDocument/>} fileName="marat-faizerakhmanov.pdf">
          {({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download')}
        </PDFDownloadLink> : null}
      </nav>
    </header>
  );
};

export default Header;
