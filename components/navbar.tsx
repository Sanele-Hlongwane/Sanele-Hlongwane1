"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import logo from "@/public/images/logo.png";
import router from "next/router";
import { FaSun, FaMoon } from "react-icons/fa";
import SaneleLogo from "./SaneleLogo";
import Sanele from "@/public/images/sanele.jpg";

export const Navbar = () => {
  const [role, setRole] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 768px)').matches);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    if (isSmallScreen && menuOpen) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  const getLinkClasses = (href: string) => {
    return `text-sm font-bold navbar-link ${
      pathname === href
        ? 'active text-black dark:text-white font-bold' 
        : 'text-gray-600 dark:text-gray-300'
    }`;
  };

  const commonLinks = (
    <>
      <NavbarMenuItem>
        <Link className={getLinkClasses('/')} href="/" onClick={() => handleLinkClick('/')}>
          Home
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className={getLinkClasses('/skills')} href="/skills" onClick={() => handleLinkClick('/skills')}>
          Skills
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className={getLinkClasses('/portfolio')} href="/portfolio" onClick={() => handleLinkClick('/portfolio')}>
          Portfolio
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className={getLinkClasses('/contact')} href="/contact" onClick={() => handleLinkClick('/contact')}>
          Contact
        </Link>
      </NavbarMenuItem>
    </>
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="border-b border-gray-300 dark:border-gray-600">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit max-h-fit">
          <Link className="flex justify-start items-center gap-1" href="/">
            <Image
              src={Sanele}
              alt="Sanele Hlongwane"
              width={50}       // Adjust width as desired
              height={50}      // Adjust height as desired
              className="rounded-full" // Styling for a circular image
            />
          </Link>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-2 justify-start ml-2">
          {commonLinks}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <button onClick={handleThemeToggle} className="focus:outline-none">
          {theme === 'dark' ? (
            <FaSun className="w-6 h-6 text-yellow-300" />
          ) : (
            <FaMoon className="w-6 h-6 text-purple-700" />
          )}
        </button>
      </NavbarContent>

      {menuOpen && (
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-1">
            {commonLinks}
          </div>
        </NavbarMenu>
      )}

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <button onClick={handleThemeToggle} className="focus:outline-none">
          {theme === 'dark' ? (
            <FaSun className="w-6 h-6 text-yellow-300" />
          ) : (
            <FaMoon className="w-6 h-6 text-blue-800" />
          )}
        </button>
        <NavbarMenuToggle onClick={() => setMenuOpen(!menuOpen)} />
      </NavbarContent>
    </NextUINavbar>
  );
};
