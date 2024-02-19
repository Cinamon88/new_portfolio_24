'use client'


import { useEffect, useState } from "react"
// components
import Logo from "./Logo"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import ThemeToggler from "./ThemeToggler"
import { usePathname } from "next/navigation"
import LocalSwitcher from "./LocalSwitcher"

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header 
      className={`${
        header 
        ? 'py-4 bg-background shadow-md dark:shadow-stone-900 dark:bg-background' 
        : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#FFF8F4]'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-4">
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center mr-8'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <LocalSwitcher />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header