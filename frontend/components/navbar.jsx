// components/navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import ContactButton from "./contactButton";
import AuthModal from "./authModel"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showDropMenu , setShowDropMenu] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Subscription", path: "/subscription" },  
  ];
  
  const moreMenuItems = [
  { name: "Product", path: "/product" },
  { name: "My Hub", path: "/my-hub" },
  { name: "The Way", path: "/the-way" },
  { name: "Book", path: "/book" },
];


const getActiveItem = () => {
  const allItems = [...menuItems, ...moreMenuItems];
  const activeItem = allItems.find(
    item =>
      pathname === item.path ||
      (item.path !== "/" && pathname.startsWith(item.path))
  );
  if (activeItem) return activeItem.name;

  return "Home";
};

const isMoreActive = moreMenuItems.some(item =>
  pathname === item.path || pathname.startsWith(item.path)
);


  const active = getActiveItem();
  
  const handleShowDropMenu = () => {
    setShowDropMenu(!showDropMenu);
  }

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className='bg-black border-b border-neutral-800/50 fixed top-0 left-0 right-0 z-50 select-none'>
        <div className="h-[70px] sm:h-[80px] md:h-[95px] flex justify-between items-center px-3 sm:px-4 md:px-8 max-w-[1440px] mx-auto z-50">
          {/* Left section - Logo and Navigation */}
          <div className="flex gap-[10px] sm:gap-[20px] md:gap-[50px] items-center">
            {/* Logo and Title */}
            <div className="flex items-center gap-[8px] sm:gap-[10px]">
              <div className="w-[42px] h-[42px] max-[1200px]:w-[36px] max-[1200px]:h-[36px] relative cursor-pointer">
                <Logo width={42} height={42} />
              </div>
              <div className="cursor-pointer">
                <h1 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold font-work-sans tracking-tighter text-[#D3B86A]">
                  Mr. White
                </h1>
                <p className="text-[10px] sm:text-[11px] font-light font-public-sans tracking-tight text-white/80">
                  AI Assistant for Dog Care & Beyond
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="max-[1060px]:hidden max-[1250px]:gap-[20px] flex gap-[40px]" aria-label="Main Navigation">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-semibold text-[18px] lg:text-[20px] hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
                    active === item.name ? "text-[#D3B86A]" : "text-white"
                  }`}
                >
                  {/* Active Dot */}
                  {active === item.name && (
                    <div className="w-2 h-2 bg-[#D3B86A] rounded-full"></div>
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="relative">
              <button
  className={`font-semibold text-[18px] lg:text-[20px] flex items-center cursor-pointer gap-1 hover:scale-105 transition-all duration-300 transform-gpu origin-center ${
    isMoreActive ? "text-[#D3B86A]" : "text-white"
  }`}
  onClick={handleShowDropMenu}
>
  {isMoreActive && <div className="w-2 h-2 bg-[#D3B86A] rounded-full"></div>}
  More
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    className={`transition-transform ${showDropMenu ? "rotate-180" : ""}`}
    aria-hidden="true"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="48"
      d="m112 184 144 144 144-144"
    ></path>
  </svg>
</button>

                  
{showDropMenu && (
  <div className="absolute top-full left-0 mt-2 w-40 bg-black/95 border border-neutral-800 rounded-md shadow-lg z-50 overflow-hidden max-h-[80vh] overflow-y-auto">
    {moreMenuItems.map(item => (
      <Link
        key={item.name}
        href={item.path}
        className={`block px-4 py-2 hover:bg-neutral-800 font-semibold text-[16px] ${
          pathname.startsWith(item.path) ? "text-[#D3B86A]" : "text-white"
        }`}
      >
        {item.name}
      </Link>
    ))}
  </div>
)}

                </div>
            </nav>
          </div>
          


          {/* Desktop Action Buttons */}
          <div className="max-[1060px]:hidden flex gap-[10px] lg:gap-[20px] items-center">
            <button 
              onClick={handleLoginClick}
              className="justify-center whitespace-nowrap rounded-md transition-all disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 cursor-pointer has-[>svg]:px-3 w-[120px] lg:w-[140px] h-[35px] lg:h-[39px] px-3 lg:px-4 py-1 lg:py-2 flex items-center gap-[8px] lg:gap-[10px] text-[16px] lg:text-[20px] font-medium font-work-sans text-white hover:bg-neutral-800/50 transition-colors"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="!w-5 !h-5 lg:!w-6 lg:!h-6">
                <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M21 12h-13l3 -3"></path>
                <path d="M11 15l-3 -3"></path>
              </svg>
              Login
            </button>
            <ContactButton title="Contact"/>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:text-accent-foreground dark:hover:bg-accent/50 cursor-pointer h-9 has-[>svg]:px-3 max-[1060px]:flex hidden bg-neutral-800 p-2 hover:bg-neutral-800/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" className="text-white" height="24" width="24">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="max-[1060px]:block hidden bg-black border-t border-neutral-800/50">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block font-semibold text-[18px] hover:scale-105 transition-all duration-300 flex items-center gap-3 ${
                    active === item.name ? "text-[#D3B86A]" : "text-white"
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {/* Active Dot for Mobile */}
                  {active === item.name && (
                    <div className="w-2 h-2 bg-[#D3B86A] rounded-full"></div>
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-800/50 space-y-3">
                <button 
                  onClick={handleLoginClick}
                  className="w-full justify-center whitespace-nowrap rounded-md transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground cursor-pointer px-4 py-2 flex items-center gap-[8px] text-[16px] font-medium font-work-sans text-white hover:bg-neutral-800/50 transition-colors"
                >
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="!w-5 !h-5">
                    <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M21 12h-13l3 -3"></path>
                    <path d="M11 15l-3 -3"></path>
                  </svg>
                  Login
                </button>
                <button className="w-full justify-center whitespace-nowrap disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer transition-all duration-300 active:scale-98 px-4 py-2 flex items-center gap-[8px] text-[16px] font-medium font-work-sans text-black">
                  <span className="text-xl inline-block">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-[16px] h-[16px]">
                      <path d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74 29.13 29.13 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 0 0-5.37-1 14.75 14.75 0 0 0-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0 1 76.83 480zm-2-31.8zM87.48 380z"></path>
                    </svg>
                  </span>
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;