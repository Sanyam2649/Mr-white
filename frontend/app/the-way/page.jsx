import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const Page = () => {
    
    const cardDataList = [
  {
    icon: "⬛",
    title: "Foundational Insights",
    height: 240,
    description: [
      { desc: "Understand the key pillars driving our vision." },
    ],
  },
  {
    icon: "💡",
    title: "Strategic Pathways",
    height: 360,
    description: [
      { desc: "Explore actionable frameworks." },
      { list: ["Growth models", "Operational tools", "Performance levers"] },
    ],
  },
  {
    icon: "🎯",
    title: "Leadership Lens",
    height: 240,
    description: [
      { desc: "Gain clarity on leadership behaviors that scale impact." },
    ],
  },
  {
    icon: "👍",
    title: "Culture Catalysts",
    height: 240,
    description: [
      { desc: "Decode what makes high-performing teams click." },
    ],
  },
  {
    icon: "📋",
    title: "Execution Playbook",
    height: 280,
    description: [
      {
        desc: "Access ready-to-use systems and templates for efficiency.",
        list: ["Planning matrix", "Decision map", "Review templates"],
      },
    ],
  },
];

  return (
   <div className='overflow-hidden bg-black text-[#FFFFFF] m-0'>
    <Navbar/>
    <section className='w-full mx-auto min-h-screen py-4 md:py-8 lg:py-16 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8'>
        <section className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex flex-col justify-center items-center w-full max-w-[1200px] relative bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1762154089/c8ac7a00fa9a5bb1d45e69863b5d3d9346f07a1e_v4i0uh.png')] bg-cover bg-center rounded-lg gap-2 md:gap-3 lg:gap-[12px]">
                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-center z-20 text-center px-4">
                        <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold font-work-sans tracking-tighter text-white">
                            Welcome to The Way of the Dog
                        </h2>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium font-public-sans text-white/80 max-w-2xl">
                            A Guide to Intuitive Bonding and Creating an <br className="hidden sm:block"/> <span className='items-center'>Interspecies Culture with Your Dog</span> 
                        </p>
                    </div>
        </section>
        <div className='py-8 md:py-12 lg:py-[96px] px-4 md:px-6 lg:px-[48px] gap-8 md:gap-12 lg:gap-[80px] flex flex-col w-full max-w-[1200px]'>
            <div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[40px] w-full'>
                <div className='w-full lg:w-1/2 gap-3 md:gap-4 lg:gap-[16px] flex flex-col'>
                    <h1 className='font-semibold text-[24px] md:text-[28px] lg:text-[32px]'>A Message from Anahata Graceland</h1>
                    <p className='text-[14px] md:text-[16px]'>The Way of the Dog wasn't something I sat down to invent. It revealed itself slowly, through the decades I spent living closely with dogs, raising and caring for them, listening, loving, and learning. And most especially, through the quiet guidance of Mr. White for his 16 years of life. 
He was my teacher, my mirror, and my heart. Now he returns in his next form, not just as memory, but as the spirit behind MrWhiteDogBuddyAI.com. 
</p>
                    <p className='text-[14px] md:text-[16px]'>
What you're about to explore is unlike anything else:A living guide that helps you deepen your intuitive bond with your dog in real time, at your pace, in your voice, and with support every step of the way. </p>
                </div>
               <img src="https://res.cloudinary.com/dhahajyth/image/upload/v1762081405/6f75e827442b92a857cf9f48da02e294b1fcd048_gjzoab.jpg" className='w-full lg:w-1/2 object-contain rounded-lg'/>
            </div >
            
                 <div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[40px] w-full'>
                 <img src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890486/Right_1_p8xhdx.png" className='w-full lg:w-1/2 object-contain rounded-lg order-2 lg:order-1'/>
                <div className='w-full lg:w-1/2 gap-4 md:gap-6 lg:gap-[32px] space-y-3 md:space-y-4 order-1 lg:order-2'>
                    <h1 className='font-semibold text-[24px] md:text-[28px] lg:text-[32px]'>
                        What The Way of the Dog Offers 
                    </h1>
                    <p className='text-[14px] md:text-[16px]'>This isn't just an introduction. It's a doorway</p>
                    <p className='text-[14px] md:text-[16px]'>
                        Here, you can engage with the entire book directly inside your journey. You don't just read it, you live it. Your dog will be so happy! 
                    </p>
                    <ul className='list-disc list-outside pl-5 text-[14px] md:text-[16px] space-y-1'>
                    <li>Ask to read a chapter </li>
                    <li>Jump into any exercise or checklist </li>
                    <li>Let Mr. White lead you through it, curated to your life, your questions, and your dog's personality </li></ul>
                    <p className='text-[14px] md:text-[16px]'>Everything in the book from Generating Love to Intuitive Bonding to Consistency for Trust is here and waiting for you to step in. </p>
                    <p className='text-[14px] md:text-[16px]'>This is the central hub of The Way of the Dog while it uses all of the Legacy of Love Dog Hub at the same time for you to experience top notch care and support. Your dog journal will grow into quite a fun experience and the book you will be able to create out of it will be remarkable! </p>
                </div>
            </div >
            
               <div className="flex flex-col gap-6 md:gap-8 lg:gap-[40px]">
      <h1 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px]">
        What Awaits You Inside
        <p className="text-[14px] md:text-[16px] mt-2">
          When you begin exploring, here's what you'll have access to:
        </p>
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[32px] w-full">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-[32px] w-full lg:w-1/2">
          <Card cardData={cardDataList[0]} />
          <Card cardData={cardDataList[2]} />
          <Card cardData={cardDataList[4]} />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-[32px] w-full lg:w-1/2">
          <Card cardData={cardDataList[1]} />
          <Card cardData={cardDataList[3]} />
        </div>
      </div>
    </div>
            
         <div className='flex flex-col gap-6 md:gap-8 lg:gap-[40px]'>
                   <h1 className='font-semibold text-[24px] md:text-[28px] lg:text-[32px]'>
                      Capturing the Story That Only You Can Tell 
                    </h1>
                <div className='flex flex-col lg:flex-row gap-6 md:gap-8 w-full'>
                    <div className='w-full lg:w-1/2 flex flex-col space-y-3 md:space-y-4'>
                        <p className='text-[14px] md:text-[16px]'>Every journal entry, photo, checklist, and milestone you track becomes part of your dog's legacy, a life lived together, full of presence, growth, and quiet joy. 
Over time, the Hub collects these moments into something extraordinary:a personalized keepsake book that you can hold in your hands or have digitally. </p>
                      <ul className='list-disc list-outside pl-5 text-[14px] md:text-[16px] space-y-1'>
                        
<li>Add photos of everyday life or special occasions like his 1st year birthday or the trip you took to the mountains </li>
<li>Write short stories or memory notes. Mr. White can help you find the words </li>
<li>Record firsts, favorite quirks, big moments, and quiet ones too </li>
 <li>Reflect on the love you've built, and the bond that keeps deepening </li>
                      </ul>
                      <p className='text-[14px] md:text-[16px]'>
Your keepsake book is more than a memory, it's a celebration. A way to honor your dog not just in passing, but in presence today. 
It becomes a treasure. A record of a relationship that mattered. Something only you can create. 
And Mr. White will walk with you the entire way. </p>
<p className='text-[14px] md:text-[16px]'>Let me know if you'd like this styled with a soft border or paired with an image (like a photo book, pawprint, or moment-in-time snapshot). It's a gorgeous moment to bring visual warmth to the page. </p>
                    </div>
                    <img src="https://res.cloudinary.com/dhahajyth/image/upload/v1762149429/2e92d30b6827ec8a7e16b22685bdfbac51222714_fj5cxm.jpg" className='w-full lg:w-1/2 object-contain rounded-lg mt-4 lg:mt-0'/>
                </div>
                <div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[40px] w-full'>
                    <img src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890481/eb3d3a7cd0e7479b2c94f4055a40b980d6c343a0_xsd72w.jpg" className='w-full lg:w-1/2 object-contain rounded-lg order-2 lg:order-1'/>
                    <div className='w-full lg:w-1/2 flex flex-col gap-3 md:gap-4 order-1 lg:order-2'>
                                          <h1 className='font-semibold text-[24px] md:text-[28px] lg:text-[32px]'>
                                            Begin Your Journey
                                            </h1>
                                            
                                            <p className='text-[14px] md:text-[16px]'>You can start by asking Mr. White:
                                                <ul className='list-disc list-outside pl-5 text-[14px] md:text-[16px] space-y-1 mt-2'> 
<li>"Lets start at the beginning, Mr White I want it all!" </li>
<li>"What's the first exercise I should do?" </li>
<li>"Take me to the chapter on communication." </li>
<li>"I want to start journaling today—what's a good place to begin?"</li> </ul>
Or just say:"Lead me, Mr. White." </p>
<p className='text-[14px] md:text-[16px] mt-2'>Whether you take a single step or walk the full path, you're entering something rare:A sacred rhythm of love. A way of living with your dog that will stay with you forever</p>
                    </div>
                </div>
            </div >
        </div>  
        
    </section>
      <Footer/>
    </div>
  )
}

export default Page


const Card = ({ cardData }) => {
  return (
    <div
      className={`w-full flex flex-col p-4 md:p-6 lg:p-[32px] gap-3 md:gap-4 lg:gap-[20px] rounded-[8px] bg-white/10`}
    >
      {/* Header */}
      <div className="w-full flex items-center gap-2 border-b border-black pb-1">
        <span className="text-[#C7A94E] text-[18px] md:text-[20px]">{cardData.icon}</span>
        <span className="text-[18px] md:text-[20px] font-medium">{cardData.title}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3">
        {cardData.description?.map((data, index) => (
          <div key={index} className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
            <p>{data.desc}</p>
            {data.list?.length > 0 && (
              <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                {data.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};