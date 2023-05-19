'use client'
import React from 'react';
import { jsPDF } from "jspdf";
const doc = new jsPDF();

const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-white border-b'>
      <nav className='flex justify-around'>
        <a href='https://www.linkedin.com/in/marat-faizerakhmanov'>Linkedin</a>
        <a href='https://github.com/maratismodest'>Github</a>
        <a href='https://t.me/maratfaizer'>Telegram</a>
        <a href="api/screenshot" download="marat-faizerakhmanov.pdf">Download PDF</a>
      </nav>
    </header>
  );
};

export default Header;
