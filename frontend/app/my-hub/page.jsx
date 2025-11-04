import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  
const OrganizeData = {
  DataA: [
    {
      title: "Companion Profile Hub",
      para: "This is the heart of your dog's personal information. Here, Mr. White keeps important details like your dog's birthdate, breed, and veterinarian or groomer contacts neatly organized. Having this information easily accessible helps you stay on top of routine care and emergencies alike. Whether you need to quickly share health info with a new caretaker or schedule a grooming appointment, everything you need is right here."
    },
    {
      title: "Daily and Weekly Living Log Hub",
      para: "Track your dog's everyday life with ease. This hub lets you log activities, moods, behaviors, and photos to capture the full picture of their wellbeing and happiness. Whether it's a playful afternoon, a change in appetite, or a special moment during a walk, you can record it all. Over time, these logs create valuable insights that help you understand patterns, celebrate joys, and address any concerns early."
    },
    {
      title: "Favorites and Travel Treasures Hub",
      para: "Keep a curated list of your dog's favorite toys, friends, and travel spots. This hub helps you remember which toys spark joy, where to get them at the best rate, who their best playmates are, and the places where they feel most at home on the road. It's perfect for planning trips, playdates, or simply ensuring your dog's world stays full of the things and beings they love."
    },
    {
      title: "Medicine and Appointment Alerts Hub",
      para: "Never miss an important medication dose, vet visit, or playdate again. This hub manages all reminders for medicines, treatments, vaccinations, and appointments, customized to your dog's unique schedule. Mr. White's timely alerts make it simple to keep care on track without stress."
    }
  ],
  DataB: [
    {
      title: "Inspirational Insights Hub",
      para: "Beyond practical care, this space offers thoughtful reflections, wisdom, and gentle guidance from Mr. White. Drawing on decades of experience and AI-driven understanding, it provides encouragement and ideas to deepen your bond and nurture your dog's spirit every day."
    },
    {
      title: "End of Life Planning Hub",
      para: "Planning ahead with compassion, this hub supports you in preparing for your dog's final journey. It helps organize wishes, memorial ideas, and practical steps with care and sensitivity—offering peace of mind and honoring the love you share."
    },
    {
      title: "Mr. White's AI-driven organization and updates",
      para: "Behind the scenes, Mr. White's intelligent system continuously organizes and updates all these hubs based on your input and ongoing data. This means your Legacy of Love Living Hub is always current, easy to navigate, and personalized—ready to support you and your dog every step of the way."
    }
  ],
    DataC: [
    {
      title: "Full Control to Customize Your Hubs",
      para: "With the Legacy of Love Living Hub, you're in the driver's seat. You decide what to include, update, and highlight. Add stories that capture your dog's personality, upload favorite photos that warm your heart, and mark important milestones—like their first steps, favorite tricks, or memorable vet visits. Every detail is yours to shape, making the hub uniquely yours and your dog's."
    },
    {
      title : "Mr. White Adapts and Personalizes Your Journey",
      para : "As you contribute, Mr. White learns from your input, tailoring the Living Hub to reflect your dog's individuality and your relationship. He helps organize your memories and care notes into a coherent, meaningful narrative. Over time, this evolves into a unique 'book' that tells the story of your companion's life—one filled with love, growth, and shared experiences."
    },
    {
      title: "Creative Ways to Use Your Living Hub",
      para: "Your hub is a versatile space that can be as simple or as rich as you like. Here are just a few ideas to inspire you:",
      list: [
        "Travel Logs: Document your adventures together—parks visited, hikes taken, and dog-friendly destinations discovered.",
        "Playdate Memories: Keep track of your dog's friends, their favorite games, and funny moments shared.",
        "Health & Behavior Journals: Record patterns in mood, appetite, or activity to help spot trends and discuss with your vet.",
        "Training Progress: Celebrate milestones from puppy basics to advanced commands, including notes on what worked best.",
        "Special Occasions: Capture birthdays, adoption anniversaries, holidays, and everyday celebrations with photos and stories.",
        "Daily Moments: Jot down those small but precious moments—like the way they tilt their head or snuggle at your feet.",
        "Seasonal Reflections: Note how your dog changes with the seasons, their favorite weather, and seasonal care tips.",
        "Legacy Planning: Prepare thoughtful messages, wishes, or memories to share with loved ones in the future."
      ],
      closing:
        "Whatever you choose to record, your Legacy of Love Living Hub becomes a living tribute—one that grows richer with every entry and strengthens the bond you share."
    }
  ],
  DataD : [
    { 
      title : "Connect and Share with a Supportive Community",
      para : "Beyond personal care, the Legacy of Love Living Hub invites you to join a vibrant community of dog lovers. Share stories, exchange tips, organize meetups, and celebrate your companions together. This space offers connection and support, turning your journey into a shared experience filled with friendship and understanding."
    },
    {title:"Exclusive Product Discounts and Perks",
      para : "As an Elite Pack member, you enjoy special discounts on trusted products carefully curated by Mr. White and Anahata Graceland. These savings help you access the best in health, nutrition, and comfort for your dog, ensuring quality care without compromis"
    },
    {
      title:"Celebrate Life's Milestones and Birthdays",
      para:"Plan unforgettable birthday celebrations and important milestones right from your Living Hub. Whether it's a fun party idea, a personalized message, or a memorable photo album, Mr. White helps you make each occasion special."
    },
    {
      title:"Create Virtual Montages and Keepsakes",
      para:"Turn your favorite photos and stories into beautiful virtual montages that capture your dog's personality and journey. Share them with family or keep them as treasured digital memories."
    },
    {
      title:"Thoughtful Eulogy Drafting Assistance",
      para:"When the time comes, Mr. White gently supports you with tools to craft a heartfelt eulogy or memorial tribute. This feature helps honor your dog's legacy with compassion and dignity, offering comfort during difficult moments."
    },
    {
      title:"Exciting Future Features: Fetch Fridays Apparel and More",
      para:"Stay tuned for upcoming additions like exclusive apparel from Fetch Fridays and other community-inspired products that celebrate the special bond between you and your dog. The Living Hub continues to grow, bringing you fresh ways to cherish and express your love."
    }
  ]
};

  
  return (
    <div className='overflow-hidden bg-black text-[#FFFFFF] m-0'>
      <Navbar />
      <section className="w-full mx-auto min-h-screen py-8 md:py-16 flex flex-col justify-center items-center gap-8 md:gap-10">
        {/* Hero Section */}
        <section className="h-[300px] md:h-[400px] flex flex-col justify-center items-center w-full max-w-[1200px] px-4 relative bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1761917075/7d709bf4e8e535403e77c47b06f237843e2d8d58-min_evju87.png')] bg-cover bg-center rounded-lg gap-3 md:gap-[12px]">
          <div className="flex flex-col gap-3 md:gap-[12px] items-center z-20 text-center px-4">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold font-work-sans tracking-tighter text-white">
              Legacy of Love Dog Hub
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium font-public-sans text-white/80 max-w-2xl">
              The exclusive heart of the Elite Pack experience.
            </p>
          </div>
        </section>

        {/* Main Content Container */}
        <div className='flex flex-col w-full max-w-[1200px] mx-auto py-12 md:py-[96px] px-4 md:px-[48px] gap-12 md:gap-[80px] text-white'>
          
          {/* Welcome Section */}
          <div className='w-full gap-6 md:gap-[40px] flex flex-col lg:flex-row justify-between items-start'>
            <div className='w-full lg:w-[48%]'>
              <Label title="Welcome to Legacy of Love Dog Hub" />
              <div className='space-y-4 md:space-y-6 mt-4'>
                <p className='font-normal text-[15px] md:text-[16px] font-sans leading-[150%]'>
                  Exclusively available to Elite Pack members, the Legacy of Love Living Hub is nothing like you've seen before! Imagine a dynamic, AI-powered sanctuary where every cherished memory and vital detail about your companion's life is held with care, easily accessible anytime, anywhere. This isn't just a digital journal — Mr. White is your personal assistant, your memory keeper, even an aid to custom publishing your dogs life in book form and your partner in ensuring your dog enjoys a long, healthy, joyful life.
                </p>
                <p className='font-normal text-[15px] md:text-[16px] font-sans leading-[150%]'>
                  With the Legacy of Love Living Hub, you'll discover a new level of ease and confidence in managing your pup's health, milestones, and adventures — all wrapped in a space designed to grow with you and your dog. Feel proud knowing that support and awareness are available 24/7, helping you make informed decisions and celebrate every step of your journey together.
                </p>
              </div>
            </div>
            <div className="relative w-full lg:w-[48%] h-[250px] md:h-[300px] lg:h-[400px] mt-6 lg:mt-0">
              <Image
                src="https://res.cloudinary.com/dhahajyth/image/upload/v1762064103/Apple_Macbook_Pro_15__Space_Grey_cq4und.png"
                alt="Macbook showing Legacy of Love Hub"
                fill
                className='object-contain'
              />
            </div>
          </div>

          {/* What Is Legacy of Love Dog Hub */}
          <div className='flex flex-col gap-6 md:gap-[32px]'>
            <Label title="What Is the Legacy of Love Dog Hub?" />
            <div className='w-full gap-6 md:gap-8 flex flex-col lg:flex-row'>
              <div className='w-full lg:w-1/2 space-y-4 md:space-y-6'>
                <div>
                  <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>A Living, Evolving Companion Care Space</span>
                  <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                    The Legacy of Love Living Hub is much more than a simple journal or folder of documents.
                    It's a vibrant, ever-growing space that captures the full story of your dog's life. From
                    health records and vet visits to daily activities and special moments, everything is
                    thoughtfully organized in one place. This means you can easily track your dog's progress,
                    celebrate milestones, and keep important information handy—all designed to support a long,
                    healthy life for your companion.
                  </p>
                </div>

                <div>
                  <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Your Personal AI Guide</span>
                  <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                    Mr. White isn't just a digital assistant—he's your knowledgeable partner in care. As you
                    add stories, records, or questions, Mr. White learns and adapts, providing helpful reminders,
                    tailored advice, and insights that make daily care simpler and more effective. Whether you're
                    new to AI or tech-savvy, he guides you gently without overwhelming, helping you feel confident
                    and connected to your dog's wellbeing.
                  </p>
                </div>
              </div>

              <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 mt-6 lg:mt-0'>
                <div>
                  <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Create Custom Keepsakes Anytime</span>
                  <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                    One of the most special features of the Living Hub is the ability to turn your dog's story
                    into a beautiful, personalized book. Whether you want to celebrate their first birthday, a
                    milestone anniversary, or simply preserve your favorite memories and photos, you can select
                    any section of the Living Hub to print as a keepsake. This tangible memento is perfect for
                    sharing with family, friends, or simply treasuring for years to come.
                  </p>
                </div>

                <div>
                  <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Always Accessible, Always Yours</span>
                  <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                    Your Legacy of Love Living Hub is accessible anytime and anywhere via your personal portal.
                    Whether you're at home, traveling, or at the vet, you have instant access to your dog's
                    complete history and care details. This exclusive feature is available only to Elite Pack
                    members, offering peace of mind that your dog's story and health information are just a
                    click away—24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className='relative w-full h-[250px] md:h-[350px] lg:h-[560px] rounded-lg overflow-hidden'>
            <Image 
              src="https://res.cloudinary.com/dhahajyth/image/upload/v1762068482/96511fe93604222d557ba66a44bdc8e683087235_1_w33gle.jpg"
              alt="Image 1"
              fill
              className='object-cover'
            />
          </div>

          {/* Key Areas Organized by Mr. White - First Section */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-[32px]">
            <div className="flex flex-col w-full lg:w-[60%] gap-6 md:gap-[32px]">
              <Label title="Key Areas Organized by Mr. White" />
              <div className="flex flex-col w-full items-start space-y-6 md:space-y-8">
                {OrganizeData.DataA.map((paragraph, index) => (
                  <div className="w-full space-y-3" key={index}>
                    <Paragraph title={paragraph.title} para={paragraph.para} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[35%] relative h-[300px] md:h-[500px] lg:h-[600px] mt-6 lg:mt-0">
              <img
                src="https://res.cloudinary.com/dhahajyth/image/upload/v1762074356/Frame_1000003314_cffl2p.png"
                alt="Image2"
                className="object-contain"
              />
            </div>
          </div> 

          {/* Key Areas Organized by Mr. White - Second Section */}
          <div className='flex flex-col lg:flex-row gap-8 md:gap-[40px] items-start'>
            <div className='w-full lg:w-[50%] h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-1'>
              <img
                src="https://res.cloudinary.com/dhahajyth/image/upload/v1762080185/ff6963f433f7a6c35ca6c3389c823854101122e6-min_xmkej1.png"
                alt="Image2"
                className='object-contain'
              />
            </div>
            <div className="flex flex-col w-full lg:w-[50%] items-start space-y-6 md:space-y-8 order-1 lg:order-2">
              {OrganizeData.DataB.map((paragraph, index) => (
                <div className="w-full space-y-3" key={index}>
                  <Paragraph title={paragraph.title} para={paragraph.para} />
                </div>
              ))}
            </div>
          </div>

          {/* Your Choice in Building Your Companion's Story */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-[40px]">
            <div className="flex flex-col w-full lg:w-[55%] gap-6 md:gap-[32px] order-2 lg:order-1">
              <Label title="Your Choice in Building Your Companion's Story" />
              <div className="flex flex-col w-full items-start space-y-6 md:space-y-8">
                {OrganizeData.DataC.map((section, index) => (
                  <div className="w-full space-y-3" key={index}>
                    <Paragraph title={section.title} para={section.para} />
                    {section.list && (
                      <ul className="text-[15px] md:text-base font-public-sans font-normal leading-relaxed space-y-2 list-disc pl-5 mt-2">
                        {section.list.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                    {section.closing && (
                      <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%] mt-3'>
                        {section.closing}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[40%] h-[400px] md:h-[600px] lg:h-[814px] order-1 lg:order-2 mb-6 lg:mb-0">
              <img
                src="https://res.cloudinary.com/dhahajyth/image/upload/v1762081405/6f75e827442b92a857cf9f48da02e294b1fcd048_gjzoab.jpg"
                alt="Image3"
                className="object-contain"
              />
            </div>
          </div>
          
          {/* A Day with Mr. White's Living Dog Hub */}
          <div className='flex flex-col gap-6 md:gap-[32px]'>
            <Label title="A Day with Mr. White's Living Dog Hub" />
            <div className='space-y-4 md:space-y-6'>
              <div>
                <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Morning Reminder: Never Miss an Appointment</span>
                <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                  Imagine starting your day with a quick glance at your personal Legacy of Love Living Hub. Today, you have a vet appointment scheduled for your dog, Bella. Mr. White has already reminded you this morning — ensuring you won't miss the important checkup.
                </p>
              </div>

              <div>
                <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Updating Health Records Made Simple</span>
                <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                  After the visit, you easily upload the vet's notes and update Bella's health records in the Companion Profile Hub. Mr. White automatically organizes the new information, flagging upcoming vaccinations and suggesting any needed follow-ups based on the vet's advice.
                </p>
              </div>

              <div>
                <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Capturing Travel Memories</span>
                <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                  Later, during a weekend getaway, you snap a photo of Bella at her favorite dog park. You upload it to the Favorites and Travel Treasures Hub, adding a note about the fun she had chasing butterflies. Mr. White gently suggests tagging the location and friends she met there, helping you build a vivid travel log filled with joyful memories.
                </p>
              </div>

              <div>
                <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>Timely Medication Alerts</span>
                <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                  That evening, you receive a timely medicine alert from Mr. White's Medicine and Appointment Alerts Hub reminding you to give Bella her allergy medication. No more second-guessing or missed doses — the care stays on track effortlessly.
                </p>
              </div>

              <div>
                <span className='font-bold block mb-2 text-[16px] md:text-[18px]'>AI-Powered Insights Throughout Your Day</span>
                <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                  Throughout the day, Mr. White's AI keeps learning from your entries and habits, offering personalized insights and gentle nudges to deepen your understanding of Bella's health and happiness. By the end of the day, your Legacy of Love Living Hub feels like a true extension of your care — a smart, caring partner working alongside you every step of the way.
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Helpful Features */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-[40px]">
            <div className="w-full lg:w-[45%] h-[350px] md:h-[500px] lg:h-[694px] order-1 lg:order-1 justify-center items-center">
              <img
                src="https://res.cloudinary.com/dhahajyth/image/upload/v1762081403/208f1884ef9796b8b494aafe37d4f3e2cc51bc80_j57mt9.jpg"
                alt="Image3"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col w-full lg:w-[50%] gap-6 md:gap-[32px] order-2 lg:order-2">
              <Label title="Additional Helpful Features" />
              <div className="flex flex-col w-full items-start space-y-6 md:space-y-8">
                {OrganizeData.DataD.map((section, index) => (
                  <div className="w-full space-y-3" key={index}>
                    <Paragraph title={section.title} para={section.para} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        
          {/* How to Get Started */}
          <div className='flex flex-col gap-6 md:gap-[32px]'>
            <Label title="How to Get Started" />
            <div className='space-y-4'>
              <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                Ready to elevate the way you care for your companion? Unlock the full power of the (Your Dog's Name) Legacy of Love Living Hub by joining the Elite Pack today.
              </p>
              <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                With your Elite Pack membership, you'll gain 24/7 access to your personal portal, exclusive AI-powered tools, and all the features that make caring for your dog easier, richer, and more connected.<br/>
                Unlock Your Legacy Today! [Sign Up Now]
              </p>
              <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
                Not quite ready to commit? Explore a live preview or demo of the Living Hub to see how it works and how it can transform your daily care routine.<br/>
                Take the first step toward a deeper, more organized, and joyful companion care experience—because every moment with your dog deserves to be cherished and supported.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page

function Label ({title}) {
  return (
    <div className='flex flex-row gap-3 md:gap-[12px] items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className='w-[8px] md:w-[12px] h-[20px] md:h-[24px] flex-shrink-0' viewBox="0 0 12 24" fill="none">
        <rect width="12" height="24" fill="#D3B86A"/>
      </svg>
      <p className='font-semibold text-[18px] md:text-[20px] lg:text-[24px]'>{title}</p>
    </div>
  )
}

function Paragraph ({title, para}){
  return(
    <>
      <span className='font-semibold text-[15px] md:text-[16px]'>{title}</span>
      <p className='text-[15px] md:text-[16px] font-public-sans font-normal leading-[150%]'>
        {para}
      </p>
    </>
  )
}