// components/footer.jsx
import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import ContactButton from './contactButton';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white/10 to-black">
      <div className="min-h-[212px] py-8 flex max-lg:flex-wrap max-lg:justify-center max-xl:gap-10 gap-[80px] justify-between items-start px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto">
        {/* Logo and Description */}
        <div className="w-full max-w-[224px] flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <div className="w-[40px] h-[40px] sm:w-[47px] sm:h-[47px] relative">
              <Logo width={40} height={40} />
            </div>
            <div>
              <h1 className="text-[18px] sm:text-[21px] font-semibold font-work-sans tracking-tighter text-[#D3B86A]">
                Mr. White
              </h1>
              <p className="text-[10px] sm:text-[11px] font-light font-public-sans tracking-tight text-white/80">
                AI Assistant for Dog Care & Beyond
              </p>
            </div>
          </div>
          <p className="text-[14px] font-public-sans font-light tracking-tighter">
            Your trusted companion for all dog-related advice, training tips, and pet care resources.
          </p>
        </div>

        {/* Navigation */}
        <div className="w-full max-w-[224px]">
          <h3 className="text-[16px] font-work-sans font-semibold mb-4 text-[#D3B86A]">
            <span className="text-white text-[20px] font-extrabold">|</span> Navigation
          </h3>
          <div className="flex flex-col gap-[10px] text-[14px] font-public-sans font-light">
            <Link href="/" className="flex items-center gap-2 hover:text-[#D3B86A] transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-4 h-4">
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
              </svg>
              Home
            </Link>
            <Link href="/about" className="flex items-center gap-2 hover:text-[#D3B86A] transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
              </svg>
              About
            </Link>
            <Link href="/subscription" className="flex items-center gap-2 hover:text-[#D3B86A] transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4">
                <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"></path>
              </svg>
              Subscriptions
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="w-full max-w-[224px]">
          <h3 className="text-[16px] font-work-sans font-semibold text-[#D3B86A] mb-4">
            <span className="text-white text-[20px] font-extrabold">|</span> Social Media
          </h3>
          <div className="flex flex-col gap-[10px] text-[14px] font-public-sans font-light">
            <a href="#" className="flex items-center gap-[10px] hover:text-[#D3B86A] transition-colors">
              <div className="relative w-4 h-4">
                {/* Instagram icon would go here */}
              </div>
              Instagram
            </a>
            <a href="#" className="flex items-center gap-[10px] hover:text-[#D3B86A] transition-colors">
              <div className="relative w-4 h-4">
                {/* Facebook icon would go here */}
              </div>
              Facebook
            </a>
            <a href="#" className="flex items-center gap-[10px] hover:text-[#D3B86A] transition-colors">
              <div className="relative w-4 h-4">
                {/* X/Twitter icon would go here */}
              </div>
              X.com
            </a>
            <a href="#" className="flex items-center gap-[10px] hover:text-[#D3B86A] transition-colors">
              <div className="relative w-4 h-4">
                {/* YouTube icon would go here */}
              </div>
              YouTube
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="w-full max-w-[224px]">
          <h3 className="text-[16px] font-work-sans font-semibold text-[#D3B86A] mb-4">
            <span className="text-white text-[20px] font-extrabold">|</span> Community
          </h3>
          <div className="flex flex-col gap-[5px] text-[14px] font-public-sans font-light">
            <a href="#" className="flex items-center gap-2 hover:text-[#D3B86A] transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="w-4 h-4 text-blue-800">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
              </svg>
              Discord
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#D3B86A] transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-4 h-4 text-blue-200">
                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
              </svg>
              Telegram
            </a>
          </div>
        </div>
        <ContactButton title="Contact"/>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white/10">
        <div className="min-h-[41px] py-2 flex max-sm:gap-2 max-sm:items-center justify-between items-center px-4 sm:px-8 md:px-12 text-white/80 max-w-[1440px] mx-auto">
          <p className="text-[12px] sm:text-[14px] font-public-sans font-light">All rights reserved ©</p>
          <div className="text-[12px] sm:text-[14px] font-public-sans font-light max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-1">
            <Link href="/terms" className="hover:text-[#D3B86A] transition-colors">Terms of Service</Link>
            <span className="mx-6 max-sm:hidden">/</span>
            <Link href="/privacy" className="hover:text-[#D3B86A] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;