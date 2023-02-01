import React, { useEffect, useState } from 'react'
import { info } from "data/info";
import { createLogo } from "utils/index";
import Link from 'next/link'
import ThemeSwitch from '@/utils/ThemeSwitch';
import { useTheme } from "next-themes";


function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() =>{
    setMounted(true);
  },[])

  const renderThemeChanger = () => {
    if(!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun text-white"
        onClick={() => setTheme('light')}>
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )
    }

    else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"
        onClick={() => setTheme('dark')}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )
    }
  };

  return (
    <header className="container flex items-center justify-between h-[80px] sm:h-[123px]">
      <Link
        className="text-2xl dark:text-white font-semibold dark:font-semibold font-outfit no-underline"
        href="/"
      >{createLogo(info.name)}.</Link>
      <nav>
        <ul className="flex items-center">
          <li className="flex flex-row">
            <Link className="p-4 dark:text-light block text-lg no-underline" href="/"
            >Home
            </Link>
            <Link className="p-4 dark:text-light block text-lg no-underline" href="/projects"
            >Projects
            </Link>
            
          </li>
          <li>
          {renderThemeChanger()}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;