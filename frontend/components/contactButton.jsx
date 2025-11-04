'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const ContactButton = ({title}) => {
    const router = useRouter();
    const handleContact =() => {
        router.push('/contact');
    }
  return (
             <button className="justify-center whitespace-nowrap disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer transition-all duration-300 active:scale-98 has-[>svg]:px-3 px-3 lg:px-4 py-1 lg:py-2 flex items-center w-[120px] hover:bg-[#D3B86A]/80 lg:w-[140px] h-[35px] lg:h-[39px] gap-[8px] lg:gap-[10px] text-[16px] lg:text-[20px] font-medium font-work-sans text-black"
             onClick={handleContact}>
            <span className="text-xl inline-block">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]">
                <path d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74 29.13 29.13 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 0 0-5.37-1 14.75 14.75 0 0 0-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0 1 76.83 480zm-2-31.8zM87.48 380z"></path>
              </svg>
            </span>
            {title}
          </button>
  )
}

export default ContactButton;
