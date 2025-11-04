import React from 'react'
export  default function Subscription() { 
  return (
         <div className="flex max-[1200px]:flex-col  px-12 max-[1200px]:items-center gap-[40px] w-full">
                {/* Free Plan */}
                <div className="w-1/2 max-[1200px]:w-[652px] max-[600px]:w-full h-fit flex flex-col gap-[24px] px-6 py-8 bg-white/10 rounded-sm relative">
                  <div className="flex flex-col gap-[12px]">
                    <h2 className="text-[28px] font-semibold font-work-sans tracking-tighter text-white">
                      Mr. White&apos;s Companion Crew - FREE Plan
                    </h2>
                    <p className="text-[16px] font-semibold font-work-sans text-white">
                      Enjoy a FREE account with Benefits of Mr. White
                    </p>
                    <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                      Mr. White guides dogs and their humans toward a fulfilling life with free daily tips and expert advice for deepening your bond with your companion.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[32px] font-medium font-work-sans text-[#D3B86A] tracking-tighter">Free!</h2>
                    <p className="text-[14px] font-light font-public-sans text-white/80">*Lifetime free subscription</p>
                  </div>
                  <div className="border-t border-[#D3B86A] my-4"></div>
                  <div className="flex flex-col gap-[24px]">
                    {freePlanFeatures.map((feature, index) => (
                      <div key={index} className="w-full flex flex-col justify-center gap-[12px] border-b-2 border-b-black/80 pb-6">
                        <h3 className="text-[16px] font-semibold font-work-sans tracking-tighter text-white flex items-center gap-2">
                          <div className="w-4 h-4 relative">
                          {feature.icon}
                          </div>
                          {feature.title}
                        </h3>
                        <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full self-center h-[45px] text-[20px] text-black">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl inline-block">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="!w-6 !h-6">
                            <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"></path>
                          </svg>
                        </span>
                        <span>Sign Up to Get Started</span>
                      </div>
                    </button>
                  </div>
                </div>
    
                {/* Premium Plan */}
                <div className="w-1/2 max-[1200px]:w-[652px] max-[600px]:w-full h-fit flex flex-col gap-[24px] px-6 py-8 bg-white/10 rounded-sm relative">
                  <div className="bg-[#D3B86A] h-[30px] w-[112px] font-work-sans text-[12px] font-semibold absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full flex items-center justify-center text-black">
                    Most Wanted
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h2 className="text-[28px] font-semibold font-work-sans tracking-tighter text-white">
                      Mr. White AI Buddy - LEGACY OF LOVE LIVING HUB
                    </h2>
                    <div className="italic text-[28px] font-work-sans font-light text-[#D3B86A]">
                      (Your Dog&apos;s Name) Legacy of Love Living Hub
                    </div>
                    <p className="text-[16px] font-semibold font-work-sans bg-[#D3B86A] text-black px-2 py-2 w-fit rounded-sm tracking-tighter">
                      Everything in the FREE Account Plus these Invaluable Services
                    </p>
                    <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                      Unlock an all-encompassing, AI-powered subscription designed to honor your companion&apos;s unique journey and simplify every aspect of their care.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[32px] font-medium font-work-sans text-[#D3B86A] tracking-tighter">$19.95/Month</h2>
                    <p className="text-[14px] font-light font-public-sans text-white/80 italic text-[16px]">
                      Save 20% on yearly plan - Includes dedicated human support!
                    </p>
                  </div>
                  <div className="border-t border-[#D3B86A] my-4"></div>
                  <div className="flex flex-col gap-[24px]">
                    {premiumPlanFeatures.map((feature, index) => (
                      <div key={index} className="w-full flex flex-col justify-center gap-[12px] border-b-2 border-b-black/80 pb-6">
                        <h3 className="text-[16px] font-semibold font-work-sans tracking-tighter text-white flex items-center gap-2">
                          <div className="w-4 h-4 relative">
                          {feature.icon}
                          </div>
                          {feature.title}
                        </h3>
                        <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full self-center h-[45px] text-[20px] text-black">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl inline-block">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="!w-6 !h-6">
                            <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"></path>
                          </svg>
                        </span>
                        <span>Sign Up to Subscribe</span>
                      </div>
                    </button>
                  </div>
                </div>
         </div>
  )
}