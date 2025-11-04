'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AuthModal from '@/components/authModel';
import Subscription from '@/components/subscription';
  
const SubscriptionPage = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };
  return (
    <div className='overflow-hidden bg-black text-[#FFFFFF] m-0'>
        <Navbar/>
       <section className="max-w-[1440px] mx-auto min-h-screen py-16 flex flex-col justify-center md:justify-between items-center gap-10 max-[1024px]:px-4 max-[450px]:px-3">
              <section className="h-[400px] flex flex-col justify-center items-center w-full relative bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1761890481/eb3d3a7cd0e7479b2c94f4055a40b980d6c343a0_xsd72w.jpg')] bg-cover bg-center rounded-lg">
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="h-[70px] flex flex-col gap-[12px] items-center z-20">
                  <h2 className="text-[32px] max-[1200px]:text-center font-semibold font-work-sans tracking-tighter text-white">
                    Connect with Mr. White Your Way: Free or Premium
                  </h2>
                  <p className="text-[20px] text-center font-medium font-public-sans text-white/80">
                    How does Mr. White benefit your life?
                  </p>
                </div>
              </section>
              
        <div className='flex flex-col items-center px-[48px] py-[96px] gap-[40px]'>
          <div>
            <h1 className=' text-[32px] font-semibold'>Get Started with Mr. White in 3 Easy Steps</h1>
          <p className='text-[16px] text-center'>A short guide on how to get started with Mr White</p>
          </div>
         <div className='h-[167px] gap-[24px] flex flex-row'>
        {[
    {
      step: 1,
      title: 'Sign up',
      desc: 'Create your account in moments—join the Companion Crew for free or the Elite Pack as a full member—to start your journey with Mr. White and your companion.',
    },
    {
      step: 2,
      title: 'Choose Your Subscription',
      desc: 'Join the Companion Crew for free to get daily tips on X, or unlock all benefits with the Elite Pack membership for $12.50 monthly or $110 yearly (saving $40).',
    },
    {
      step: 3,
      title: 'Access Your Personal Portal',
      desc: 'Step into your personal portal with Mr. White, where tailored guidance, records, and wisdom for you and your dog are available 24/7.',
    },
  ].map(({ step, title, desc }) => (
    <div
      key={step}
      className='flex flex-row w-[432px] h-full px-[24px] py-[20px] gap-[24px] bg-[#FFFFFF1A]'
    >
      <div className='size-[40px] gap-[8px] items-center rounded-[500px] bg-[#D3B86A]'>
        <p className='text-center text-black text-[24px]'>{step}</p>
      </div>
      <div className='flex flex-col h-[127px] gap-[8px]'>
        <p className='text-[20px] font-semibold text-[#FFFFFF]'>
           {title}</p>
        <p className='text-[16px] leading-tight'>{desc}</p>
      </div>
    </div>
  ))}
</div>

          <button className='h-[47px] w-[293px] px-[64px] py-[12px] gap-[8px] rounded-[8px] bg-[#D3B86A] mt-[40px] flex flex-inline text-black'
            onClick={handleLoginClick}
          >
            <span className='gap-[4px]'>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="!w-5 !h-5 lg:!w-6 lg:!h-6">
                <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M21 12h-13l3 -3"></path>
                <path d="M11 15l-3 -3"></path>
              </svg>
            </span>
            <span>Sign up & Login</span>
          </button>
        </div>
              
              
              
              
               
               <div className='flex flex-col justify-center items-center'>
                <h1 className='justify-center items-center text-[32px]'>Subscriptions, Mr. White has?</h1>
                <p className='justify-center items-center pb-[40px] text-[16px]'>Mr. White’s available subscriptions</p>
                <Subscription/>
               </div>
       </section>
       <Footer/>
       
             <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
       </div>
  )
}

export default SubscriptionPage;
