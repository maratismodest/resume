'use client'
import MyDocument from "@/app/components/MyDocument";
import {PDFDownloadLink} from "@react-pdf/renderer";
import React, {useEffect, useState} from 'react';

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
          {({blob, url, loading, error}) => ('Download')}
        </PDFDownloadLink> : <a href='#'></a>}
      </nav>
    </header>
  );
};

export default Header;
