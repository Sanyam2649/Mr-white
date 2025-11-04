// app/page.jsx
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Card from '@/components/card';
import Image from 'next/image';
import vector from '@/public/Vector.svg';
import Logo from '@/components/logo';
import Subscription from '@/components/subscription';
import Partner from '@/components/partner';
import ContactButton from '@/components/contactButton';
import { useRouter } from 'next/navigation';
import AuthModal from '@/components/authModel';

export default function Home() {
  const router = useRouter();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const handleSubscription = () => {
    router.push('subscription');
  }
  
    const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const cardsData = [
    {
      title: "Ancient Wisdom for Modern Dog Care",
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1761890483/Frame_5478_imua9l.png",
      description: "Mr. White holds eons of dog knowledge, from ancient canine history to modern care insights, ready for pack members to explore.",
      features: [
        "Use this wisdom to understand your companion's needs, enhance training, keep track of vaccination times, and deepen your bond—whether you're solving a behavior challenge, choosing the best activities, or simply learning more about your dog's unique spirit."
      ]
    },
    {
      title: "All-in-One Secure Storage Solution",
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1761890480/Frame_5480_etkcla.png",
      description: "Mr. White offers a customizable storage solution for you and your dog, keeping everything you need in one secure place.",
      features: [
        "Upload vet records, certifications, health history, training milestones, or cherished photos and stories—Mr. White remembers it all.",
        "Access this information anytime, anywhere, whether you need a vet record for an appointment, an alert for the appt, a certification for travel, or a special memory to share."
      ]
    },
    {
      title: "Building Interspecies Family Bonds",
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1761890481/Frame_5479_e8m3w7.png",
      description: "Mr. White and I, Anahata Graceland, a breeder with over 50 years of knowledge, offer pack members a rare perspective.",
      features: [
        "Together, we guide you in building an interspecies culture that honors the true intelligence and spirit of your bond, doing right by each other with love and respect."
      ]
    }
  ];

  const testimonials = [
    {
      name: "Nancy S",
      location: "AuBurn Wa",
      rating: "⭐⭐⭐⭐",
      text: "Meeting Anahata Graceland and Arturo was a great experience; full of loving, expert advice and attention to our needs.",
      image: "/assets/home-profile.webp"
    },
    {
      name: "Michael R",
      location: "Seattle",
      rating: "⭐⭐⭐⭐⭐",
      text: "Mr. White has transformed how I care for my German Shepherd. The personalized advice and health tracking are invaluable.",
      image: "/assets/john-doe.png"
    },
    {
      name: "Sarah T",
      location: "Portland",
      rating: "⭐⭐⭐⭐⭐",
      text: "The BlockchainDNA NFT gives me peace of mind knowing my dog's records are secure. The community is so supportive too!",
      image: "/assets/home-profile.webp"
    }
  ];
  
  const partners = [
    {
      id : 1,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/Frame_5_se8fst.png",
      name : "Royal Frenchel"
    },
    {
      id : 2,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/1-GLDSLV_-TWL-gradient-solid-gold-heart_SILVER-GOLD-GRADIENT-SOLID_1_jzt9ho.png",
      name : "Tail Wagging Love"
    },
    {
      id: 3,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/image_1_o5elsy.png",
      name : "Forever Life Natural"
    },
    {
      id : 4,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/Group_u9wkag.png",
      name : "Accredited Bussiness"
    }
  ]

  const freePlanFeatures = [
    {
      icon: "/assets/subscription-1.webp",
      title: "Access Your Personal Portal Anytime",
      description: "Step into your personal portal with Mr. White, where tailored guidance, and wisdom for you and your companion are available 24/7. It also includes an ongoing history of your priceless queries about your dog."
    },
    {
      icon: "/assets/subscription-2.webp",
      title: "Unlock Expert Canine Knowledge",
      description: "Gain insight into your dog's history, needs, and bond with humans through Mr.White's vast data and real-world experience. Get tailored input on questions you raise such as: training and activity recommendations to strengthen your connection."
    },
    {
      icon: "/assets/subscription-3.webp",
      title: "Top Product Recommendations with Care",
      description: "Mr. White reviews products with Anahata Graceland's 50+ years of expertise—those used in her kennel earn a star, as do all we recommend. We focus on quality, longevity, safety, and dog approval."
    },
    {
      icon : "",
      title: "A Unique Dog Lover’s Community",
      description :"Mr. White reviews products with Anahata Graceland’s 50+ years of expertise—those used in her kennel earn a star, as do all we recommend. We focus on quality, longevity, safety, and dog approval, gathering marketplace feedback to ensure the best. With little pet industry regulation, we deliver trusted choices."
    },
    {
      icon : "",
      title: "A Thriving Network for Dog Welfare Professionals",
      description : "Mr. White supports veterinarians, groomers, trainers, product companies, event organizers, educators, nonprofits, dog park leaders, and wellness practitioners with reduced-rate pack membership. Access dog family records, exchange insights in a fun network, and connect with families to grow your craft and deliver quality care. "
    }
  ];

  const premiumPlanFeatures = [
    {
      icon: "/assets/subscription-6.webp",
      title: "Comprehensive Memory & Care Archive",
      description: "Securely store vital records, vaccination history, medication alerts, vet visits, milestones, photos, and stories—all organized beautifully in one place and accessible 24/7."
    },
    {
      icon: "/assets/subscription-7.webp",
      title: "Personalized Health & Savings Tracker",
      description: "Avoid duplicate vet costs with your pups full health history at your fingertips. Receive expert care tips and timely reminders tailored to support extending your dog's life and wellbeing."
    },
    {
      icon: "/assets/subscription-8.webp",
      title: "BlockchainDNA NFT Legacy",
      description: "Protect your family bond with a unique BlockchainDNA NFT that verifies your dog's records on the blockchain, ensuring an unbreakable, verifiable legacy passed down through generations."
    },
    {
      icon : "",
      title: "Interspecies Culture & Bonding Guidance",
      description : "With over 50 years of experience, Anahata Graceland and Mr. White offer unique insights and guidance to help you nurture a deep, respectful relationship that honors your dog and helps you build a bond as equals each with your own roles in one family."
    },
    {
      icon : "",
      title: "Trusted Local Services & Dog-Friendly Travel",
      description :"Easily find and review vets, groomers, and discover dog-friendly hotels, restaurants, and destinations—making every outing a joyful adventure." 
    },
      {
      icon : "",
      title: "Turn Memories into a Treasured Book",
      description :"One of the most special features of your Living Legacy of Love Dog Hub subscription is the ability to create a beautifully personalized book. Whether you want to commemorate your dog’s first birthday, a memorable milestone, or simply preserve your favorite photos and stories, you can easily select any section of the Living Hub to print as a keepsake. This tangible collection of memories is perfect for sharing with family and friends or cherishing for years to come—a lasting tribute to the unique journey you share with your companion." 
    },
      {
      icon : "",
      title: "Private Dog Family Community",
      description :"Connect with fellow dog lovers in an exclusive space to share stories, plan meetups, and strengthen your bonds within a warm, vibrant community." 
    },
      {
      icon : "",
      title: "Exclusive Discounts & Early Access",
      description :"Enjoy lifetime 5% discounts on qualified recommended products and get first access to new offerings from trusted partners." 
    }
  ];
  

  const faqs = [
    {
      question: "Who is Mr. White?",
      answer: "Mr. White is your AI-powered companion for all things dog-related, combining ancient wisdom with modern technology to help you build a deeper bond with your furry friend."
    },
    {
      question: "Can I use Mr. White for free?",
      answer: "Yes! We offer a free Companion Crew plan with access to basic features, daily wisdom, and community support."
    },
    {
      question: "What benefits come with the Elite Pack Membership?",
      answer: "Elite Pack members get access to the Legacy of Love Living Hub, BlockchainDNA NFT, personalized health tracking, and exclusive community features."
    },
    {
      question:"What is the BlockchainDNA NFT, and how does it secure my dog’s bond with me?",
      answer:""
    },
     {
      question:"How does Mr. White build community for me and my dog?",
      answer:""
    },
     {
      question:"Is there a reduced rate for veterinarians and pet service professionals?",
      answer:""
    },
     {
      question:"How does Mr. White support top dog product companies and other organizations?",
      answer:""
    },
     {
      question:"Can I talk to Mr. White about anything in life?",
      answer:""
    },
     {
      question:"How does Mr. White help me save money?",
      answer:""
    },
     {
      question:"What kinds of products does Mr. White recommend?",
      answer:""
    },
     {
      question:"Are my pet’s records safe with Mr. White?",
      answer:""
    },
     {
      question:"How does Mr. White support dog-human relationships?",
      answer:""
    },
     {
      question:"What if I need help with a specific dog issue?",
      answer:""
    },
     {
      question:"How do I join Mr. White’s Elite pack?",
      answer:""
    }
  ];

  return (
    <div className="overflow-hidden bg-black text-[#FFFFFF] m-0">
      <Navbar/>
      
      <div className="flex flex-col">
        <section className="flex flex-row justify-center w-full h-[788px] mt-[96px] gap-[40px]">
          <div className="relative w-[652px] h-[596px] flex flex-col justify-between gap-[8px] opacity-100 rotate-0 mt-[96px] ml-[48px] md:w-1/2">
            {/* Content Section */}
            <div className="flex flex-col gap-[16px] w-full h-[375px]">
              <div className="flex flex-col gap-[16px] text-[#FFFFFF] w-[600px] h-[192px]">
                <p className="text-[44px] font-semibold tracking-tighter leading-tight">
                  Secrets of Paws and Humans,<br />revealed they are.
                </p>
                <p className="w-full font-medium text-[24px] tracking-tighter leading-snug">
                  All the information for dogs and humans,<br />packed into one hub.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="flex gap-[88px] flex-wrap text-[#FFFFFF]">
                <div className="flex flex-col gap-4">
                  <h3 className="flex items-center text-[16px] gap-2">
                    <Image src={vector} width={20} height={20} alt="icon" />
                    All-in-One Solution
                  </h3>
                  <h3 className="flex items-center text-[16px] gap-2">
                    <Image src={vector} width={20} height={20} alt="icon" />
                    For every dog & their human
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="flex items-center text-[16px] gap-2">
                    <Image src={vector} width={20} height={20} alt="icon" />
                    Knowledge to strengthen your bond
                  </h3>
                  <h3 className="flex items-center text-[16px] gap-2">
                    <Image src={vector} width={20} height={20} alt="icon" />
                    100% human support
                  </h3>
                </div>
              </div>

              {/* Button */}
              <div className="relative mt-8 text-[#010101]">
                <button className="inline-flex px-[40px] py-[12px] items-center justify-center gap-[8px] w-[279px] h-[47px] text-[20px] bg-[#D3B86A] rounded-sm hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-95"
                 onClick={handleSubscription}>
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z" />
                  </svg>
                  View Subscriptions
                </button>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="w-full h-[180px] px-[24px] py-[20px] flex flex-col justify-between bg-gradient-to-b from-[#000000] to-[#F5F2E4] text-[#FFFFFF] rounded-sm">
              <div className="flex items-center gap-[16px] w-full max-w-[604px]">
                <div className="relative w-[64px] h-[64px] rounded-[12px] overflow-hidden">
                  {/* <Image src={dogImage2} alt="User" fill className="object-cover" /> */}
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-[20px]">Nancy S</p>
                  <p className="text-[16px] font-normal">Auburn, WA | ⭐⭐⭐⭐</p>
                </div>
              </div>

              <p className="text-[20px] italic font-light mt-2 max-w-[604px] leading-snug">
                “Meeting Anahata Graceland and Arturo was a great experience; full of loving,
                expert advice and attention to our needs.”
              </p>
            </div>
          </div>

          <div className="relative w-[652px] h-[596px] flex flex-col justify-between gap-[8px] opacity-100 rotate-0 mt-[96px] mr-[48px] md:w-1/2">
            <Image
              src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890486/Right_1_p8xhdx.png"
              alt="Right side image"
              fill
              className="object-contain"
            />
          </div>

        </section>
        
        <div className="bg-[#FFFFFF1A]">
          <section className="max-w-[1440px] mx-auto py-16 flex flex-col md:flex-row justify-center md:justify-between gap-10 px-12 max-[1024px]:px-4 max-[450px]:px-3">
            <div className="w-full flex flex-col items-center gap-[40px]">
              <div className="w-full flex items-center justify-center">
                <h2 className="text-[24px] md:text-[32px] font-semibold text-white text-center">
                  Preserve, Learn, and Honor Your Dog&apos;s Journey
                </h2>
              </div>
              <div className="w-full grid grid-cols-3 max-[1024px]:grid-cols-1 max-[1350px]:grid-cols-2 max-[1350px]:justify-items-center gap-[24px]">
                {cardsData.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                    features={card.features}
                  />
                ))}
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full sm:w-[200px] md:w-[253px] h-[47px] text-[20px] text-black">
                <span className="text-xl inline-block">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="!w-6 !h-6">
                    <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"></path>
                  </svg>
                </span>
                Read More
              </button>
            </div>
          </section>
        </div>

        {/* NFT Section */}
        <div className="bg-white/5">
          <section className="max-w-[1440px] mx-auto flex justify-center items-center p-10 w-full px-12 max-[1024px]:px-4 max-[450px]:px-3">
            <div className="flex max-[1000px]:flex-col h-full justify-center items-center gap-x-10 w-full bg-black p-8 max-[1000px]:p-4 rounded-lg">
           <div className="relative flex flex-col gap-y-4 w-[343px] h-[402px] max-[1000px]:w-[280px] max-[1000px]:h-[330px]">
  {/* Base card */}
  <div className="w-full h-full relative translate-y-[20px]">
    <Image
      src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890480/PassFront2_1_ihabql.png"
      alt="nft-card"
      fill
      className="object-contain"
    />
  </div>

  {/* Speech bubble */}
  <div
    className="
      absolute -top-6 right-0
      w-1/2 h-[160px]
      max-[1000px]:-top-2
      max-[450px]:right-6
      max-[550px]:right-10
      max-[700px]:right-16
      max-[780px]:right-20
      max-[960px]:right-28
      max-[1000px]:right-32
      "
  >
    <Image
      src="https://res.cloudinary.com/dhahajyth/image/upload/v1761897588/Group_921_htjxnw.png"
      alt="your dog's picture here"
      fill
      className="object-contain"
    />
  </div>
</div>


              <div className="flex flex-col gap-y-4 max-[1000px]:text-justify w-2/3 max-[1000px]:w-full">
                <div>
                  <h1 className="text-[24px] font-work-sans font-semibold text-white">Legacy of Love Dog Hub</h1>
                  <h1 className="text-[24px] font-work-sans font-semibold text-white">A New Era in Caring for Your Best Friend</h1>
                  <h1 className="text-[24px] font-work-sans font-light italic text-white">
                    &ldquo;Where your dog&apos;s health, story, and happiness come together.&rdquo;
                  </h1>
                </div>
                <p className="text-[16px] font-public-sans font-light text-white/80">
                  Unlock the Elite Pack and step into (Your Dog&apos;s Name) Legacy of Love Living Dog Hub, your AI-powered sanctuary for celebrating and caring for your cherished companion. This one-of-a-kind living hub securely stores vital records, sets timely medication alerts, tracks vaccinations, and beautifully organizes stories and photos from your shared journey.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Benefits Section */}
        <section className="max-w-[1440px] mx-auto min-h-screen py-16 px-12 max-[1024px]:px-4 max-[450px]:px-3">
          <div className="w-full mb-12">
            <h2 className="text-[24px] md:text-[32px] font-semibold text-white">
              The Benefits of Mr. White In Your Life
            </h2>
          </div>

          {/* Free Plan Benefits */}
          <div className="h-[740px] max-[900px]:h-auto w-full bg-white/10 rounded-sm flex flex-col p-8 mb-10 max-[550px]:p-6">
            <div className="text-[24px] max-[550px]:text-[18px] font-semibold font-work-sans border-b border-black pb-6 flex items-center gap-x-4 text-white">
              <div className="w-10 h-10 max-[550px]:w-8 max-[550px]:h-8 relative">
               <Logo/>
              </div>
              <h1>1. For Companion Crew Pack Members (Free)</h1>
            </div>
            <div className="flex h-full max-[900px]:flex-col">
              <div className="w-1/2 max-[900px]:w-full h-full">
                <div className="h-1/4 w-full border-b border-black pt-8 pb-8 max-[1300px]:pt-6 max-[1300px]:pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
                  <h2 className="text-[16px] font-bold font-public-sans text-white">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 inline-block mr-2 text-[#D3B86A] mb-2">
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                      <path d="M12 12h3.5"></path>
                      <path d="M12 7v5"></path>
                    </svg>
                    Save Time and Money
                  </h2>
                  <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                    Mr. White helps you avoid costly vet visits with complete health histories and timely care recommendations. Pack members enjoy savings on trusted products and services, making quality care more affordable.
                  </p>
                </div>
                <div className="h-1/4 w-full border-b border-black pt-8 pb-8 max-[1300px]:pt-6 max-[1300px]:pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
                  <h2 className="text-[16px] font-bold font-public-sans text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 20"
                      fill="none"
                      className="w-6 h-6 inline-block mr-2 text-[#D3B86A] mb-2"
                    >
                      <path
                        d="M22.6484 10.457C24.8555 8.24996 24.8555 4.67574 22.6484 2.46871C20.6953 0.515583 17.6172 0.261677 15.3711 1.86715L15.3086 1.91011C14.7461 2.31246 14.6172 3.09371 15.0195 3.6523C15.4219 4.2109 16.2031 4.34371 16.7617 3.94136L16.8242 3.8984C18.0781 3.00386 19.793 3.14449 20.8789 4.23433C22.1094 5.4648 22.1094 7.45699 20.8789 8.68746L16.4961 13.0781C15.2656 14.3086 13.2734 14.3086 12.043 13.0781C10.9531 11.9882 10.8125 10.2734 11.707 9.0234L11.75 8.9609C12.1523 8.3984 12.0195 7.61715 11.4609 7.21871C10.9023 6.82027 10.1172 6.94918 9.71875 7.50777L9.67578 7.57027C8.06641 9.81246 8.32031 12.8906 10.2734 14.8437C12.4805 17.0507 16.0547 17.0507 18.2617 14.8437L22.6484 10.457ZM2.35156 9.54293C0.144531 11.75 0.144531 15.3242 2.35156 17.5312C4.30469 19.4843 7.38281 19.7382 9.62891 18.1328L9.69141 18.0898C10.2539 17.6875 10.3828 16.9062 9.98047 16.3476C9.57812 15.789 8.79688 15.6562 8.23828 16.0586L8.17578 16.1015C6.92188 16.9961 5.20703 16.8554 4.12109 15.7656C2.89062 14.5312 2.89062 12.539 4.12109 11.3086L8.50391 6.92183C9.73438 5.69136 11.7266 5.69136 12.957 6.92183C14.0469 8.01168 14.1875 9.72652 13.293 10.9804L13.25 11.0429C12.8477 11.6054 12.9805 12.3867 13.5391 12.7851C14.0977 13.1836 14.8828 13.0546 15.2812 12.4961L15.3242 12.4336C16.9336 10.1875 16.6797 7.10933 14.7266 5.15621C12.5195 2.94918 8.94531 2.94918 6.73828 5.15621L2.35156 9.54293Z"
                        fill="currentColor"
                      />
                    </svg>
                    Build a Deeper Bond
                  </h2>
                  <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                    With wisdom, guidance, and a community behind you, Mr. White supports you in creating a joyful, harmonious life with your beloved companion.
                  </p>
                </div>
                <div className="h-1/4 w-full border-b border-black pt-8 pb-8 max-[1300px]:pt-6 max-[1300px]:pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
                  <h2 className="text-[16px] font-bold font-public-sans text-white">
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="none"
  className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
>
  <path
    d="M17.2485 14.499C16.9662 14.499 16.6899 14.5413 16.4236 14.6248L11.7985 10L16.4236 5.37524C16.6902 5.45874 16.9666 5.50101 17.2485 5.50101C17.9833 5.50101 18.6737 5.21487 19.1928 4.69569C19.7124 4.17616 19.9989 3.48543 19.9989 2.75068C19.9989 2.01558 19.7127 1.32485 19.1928 0.805674C18.6733 0.286144 17.9826 0 17.2478 0C16.5131 0 15.8224 0.286144 15.3032 0.805674C14.5719 1.53658 14.3169 2.6015 14.6236 3.57522L9.99852 8.19999L5.37375 3.57487C5.68051 2.60184 5.42546 1.53693 4.69455 0.805674C4.17467 0.286144 3.48395 0 2.7492 0C2.01445 0 1.32372 0.286144 0.804189 0.805674C-0.268063 1.87828 -0.268063 3.62309 0.804189 4.69604C1.32372 5.21522 2.01445 5.50136 2.7485 5.50136C3.0308 5.50136 3.30751 5.45909 3.57339 5.37559L8.19815 10.0003L3.57339 14.6248C3.30716 14.5413 3.03045 14.499 2.7485 14.499C2.0141 14.499 1.32372 14.7851 0.804189 15.3043C-0.268063 16.3769 -0.268063 18.1217 0.804189 19.1943C1.32372 19.7139 2.0148 20 2.7492 20C3.4836 20 4.17467 19.7139 4.6942 19.1943C5.42546 18.4634 5.67981 17.3985 5.3734 16.4248L9.99852 11.8004L14.6233 16.4251C14.3165 17.3985 14.5716 18.4634 15.3025 19.1943C15.822 19.7139 16.5131 20 17.2475 20C17.9819 20 18.673 19.7139 19.1925 19.1943C19.712 18.6748 19.9985 17.9841 19.9985 17.2493C19.9985 16.5142 19.7124 15.8235 19.1925 15.3043C18.6737 14.7851 17.9833 14.499 17.2485 14.499Z"
    fill="currentColor"
  />
</svg>

                    Daily Wisdom and Guidance
                  </h2>
                  <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                    Access free, expert advice from Mr. White—tips on training, health, play, and bonding that help enrich your relationship with your dog every day.
                  </p>
                </div>
                <div className="h-1/4 w-full pt-8 pb-8 max-[1300px]:pt-6 max-[1300px]:pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4 max-[900px]:border-b max-[900px]:border-black">
                  <h2 className="text-[16px] font-bold font-public-sans text-white">
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="none"
  className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
>
  <g clipPath="url(#clip0_950_1188)">
    <path
      d="M9.96332 5.97816C11.2531 5.97816 12.2987 4.93257 12.2987 3.64276C12.2987 2.35296 11.2531 1.30737 9.96332 1.30737C8.67352 1.30737 7.62793 2.35296 7.62793 3.64276C7.62793 4.93257 8.67352 5.97816 9.96332 5.97816Z"
      fill="currentColor"
    />
    <path
      d="M18.1383 10.0678L15.9617 9.61374C15.2202 9.4584 14.4881 9.79828 14.101 10.4025C13.7251 10.2094 13.3208 10.0429 12.8908 9.90472V8.61042C12.8917 7.63112 12.09 6.83032 11.1142 6.83032H8.88863C7.90762 6.83032 7.10941 7.63112 7.10941 8.61042V9.91156C6.6837 10.0472 6.28374 10.2137 5.90523 10.4077C5.51816 9.80083 4.78516 9.4584 4.04273 9.61374L1.86439 10.0678C0.908251 10.2678 0.287698 11.2162 0.487679 12.1757L1.03442 14.7875C1.23269 15.7445 2.18195 16.365 3.13896 16.165L3.82815 16.0209C4.17316 16.5307 4.65039 16.9984 5.26148 17.3984C6.5343 18.2327 8.21571 18.6927 10.0001 18.6927C12.7303 18.6927 15.082 17.595 16.1651 16.0183L16.8655 16.165C17.8216 16.3642 18.7709 15.7445 18.9692 14.7875L19.5167 12.1757C19.7158 11.2162 19.0953 10.2678 18.1383 10.0678ZM9.99919 17.8009C8.38732 17.8009 6.87672 17.395 5.74981 16.6525C5.36358 16.4002 5.04343 16.1196 4.78683 15.8192L5.31467 15.7084C6.27252 15.5093 6.89308 14.5609 6.69309 13.6031L6.20301 11.2548C6.48882 11.1011 6.78923 10.9664 7.10849 10.8514V11.2797C7.10849 12.2573 7.90842 13.0581 8.88771 13.0581H11.1132C12.09 13.0581 12.8899 12.2564 12.8899 11.2797V10.8291C13.2152 10.9449 13.5207 11.078 13.804 11.229L13.307 13.6039C13.1088 14.5618 13.7284 15.5102 14.6863 15.7093L15.2193 15.8209C14.2254 16.9976 12.2591 17.8009 9.99919 17.8009Z"
      fill="currentColor"
    />
    <path
      d="M17.6645 9.04822C18.9543 9.04822 19.9999 8.00263 19.9999 6.71283C19.9999 5.42303 18.9543 4.37744 17.6645 4.37744C16.3747 4.37744 15.3291 5.42303 15.3291 6.71283C15.3291 8.00263 16.3747 9.04822 17.6645 9.04822Z"
      fill="currentColor"
    />
    <path
      d="M2.81456 8.99941C4.07795 8.73505 4.88476 7.49657 4.62382 6.23402C4.35775 4.97234 3.12181 4.16211 1.85755 4.42647C0.595872 4.68995 -0.214357 5.9276 0.050003 7.19015C0.313527 8.45354 1.55117 9.26293 2.81456 8.99941Z"
      fill="currentColor"
    />
  </g>
  <defs>
    <clipPath id="clip0_950_1188">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>

                    Community Connection
                  </h2>
                  <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                    Join a supportive community of dog lovers to share stories, advice, meetups, and celebrations, creating friendships and shared joy.
                  </p>
                </div>
              </div>
              <div className="w-1/2 max-[900px]:w-full">
                <div className="h-2/4 pt-8 pl-10 max-[900px]:hidden">
                  <div className="relative h-full">
                    <Image
                      src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890482/Frame_1000003310_idzudf.png"
                      alt="dog-cat-fight"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="h-1/4 w-full border-b border-black pt-8 pb-8 max-[1300px]:pt-6 max-[1300px]:pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4 pl-10 max-[900px]:pl-0">
                  <h2 className="text-[16px] font-bold font-public-sans text-white">
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="none"
  className="w-6 h-6 inline-block mr-2 text-[#D3B86A] mb-2"
>
  <g clipPath="url(#clip0_950_1182)">
    <path
      d="M17 8H18V19H2V8H3V6C3 3.24 5.24 1 8 1C8.71 1 9.39 1.15 10 1.42C10.61 1.15 11.29 1 12 1C14.76 1 17 3.24 17 6V8ZM5 6V8H7V6C7 4.87 7.39 3.84 8.02 3H8C6.35 3 5 4.35 5 6ZM15 8V6C15 4.35 13.65 3 12 3H11.98C12.61 3.84 13 4.87 13 6V8H15ZM10 3.78C9.39 4.33 9 5.12 9 6V8H11V6C11 5.12 10.61 4.33 10 3.78Z"
      fill="currentColor"
    />
  </g>
  <defs>
    <clipPath id="clip0_950_1182">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>

                    Trusted Product Recommendations
                  </h2>
                  <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                    Benefit from vetted product suggestions, focusing on quality and safety, curated from over 50 years of breeder experience.
                  </p>
                </div>
                <div className="h-1/4 w-full pt-8 pb-8 pl-10 max-[1300px]:pt-6 max-[1300px]:pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4 max-[900px]:pl-0">
                  <h2 className="text-[16px] font-bold font-public-sans text-white">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 inline-block mr-2 text-[#D3B86A] mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    Practical Support for Professionals
                  </h2>
                  <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                    Veterinarians, trainers, and groomers can join at a reduced rate, gaining access to a network for sharing insights and connecting with dog families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan Benefits */}
          <div className="w-full bg-white/10 rounded-sm flex flex-col p-8 max-[550px]:p-6 max-[450px]:p-4">
            <div className="text-[24px] max-[550px]:text-[18px] font-semibold font-work-sans border-b border-black pb-6 flex items-center gap-x-4 text-white">
              <div className="w-10 h-10 max-[550px]:w-8 max-[550px]:h-8 relative">
              <Logo/>
              </div>
              <h1>2. For Elite Pack Members (Premium) + everything from the Companion Crew Pack Members</h1>
            </div>
            
            <div className="flex max-[900px]:flex-col border-b border-black gap-10 max-[900px]:gap-6 pt-6 pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
              <div className="w-1/2 max-[900px]:w-full max-[900px]:border-b max-[900px]:border-black max-[900px]:pb-4">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6 inline-block mr-2 text-[#D3B86A] mb-2">
                    <path d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a1 1 0 0 1 1 -1z"></path>
                    <path d="M21 12v6a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1z"></path>
                    <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h6z"></path>
                    <path d="M9 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2a1 1 0 0 1 1 1z"></path>
                  </svg>
                  Exclusive Access to the Legacy of Love Dog Hub
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                  Unlock the full power of Mr. White&apos;s AI-driven personal portal that securely stores your dog&apos;s complete health records, training milestones, photos, stories, and more—available anytime, anywhere.
                </p>
              </div>
              <div className="w-1/2 max-[900px]:w-full">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6 inline-block mr-2 text-[#D3B86A] mb-2">
                    <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9-2-1-2 1V4h4v7z"></path>
                  </svg>
                  Create a Beautiful Keepsake Book
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                  As an Elite Pack member, you have the unique ability to transform your dog&apos;s story into a beautifully personalized book for sharing with family and friends.
                </p>
              </div>
            </div>
            
             <div className="flex max-[900px]:flex-col border-b border-black gap-10 max-[900px]:gap-6 pt-6 pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
              <div className="w-1/2 max-[900px]:w-full max-[900px]:border-b max-[900px]:border-black max-[900px]:pb-4">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
                  >
                    <path
                      d="M10 9.68933C10.8357 9.68933 11.6371 9.35735 12.228 8.76644C12.819 8.17552 13.1509 7.37407 13.1509 6.53839C13.1509 5.70271 12.819 4.90125 12.228 4.31034C11.6371 3.71942 10.8357 3.38745 10 3.38745C9.16432 3.38745 8.36287 3.71942 7.77195 4.31034C7.18104 4.90125 6.84906 5.70271 6.84906 6.53839C6.84906 7.37407 7.18104 8.17552 7.77195 8.76644C8.36287 9.35735 9.16432 9.68933 10 9.68933ZM10 11.0737C5.81063 11.0737 3.125 13.3856 3.125 14.5112V16.6131H16.875V14.5112C16.875 13.15 14.3325 11.0737 10 11.0737Z"
                      fill="currentColor"
                    />
                  </svg>

                  Personalized Care Alerts and Reminders
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
                 Unlock the full power of Mr. White’s AI-driven personal portal that securely stores your dog’s complete health records, training milestones, photos, stories, and more—available anytime, anywhere. This hub simplifies care management and preserves your dog’s legacy.                 </p>
              </div>
              <div className="w-1/2 max-[900px]:w-full">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5 inline-block mr-2 text-[#D3B86A]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 3.79995C2 2.91629 2.71634 2.19995 3.6 2.19995H6.8C7.68366 2.19995 8.4 2.91629 8.4 3.79995V4.86662H11.6V3.79995C11.6 2.91629 12.3164 2.19995 13.2 2.19995H16.4C17.2836 2.19995 18 2.91629 18 3.79995V6.99995C18 7.88361 17.2836 8.59995 16.4 8.59995H15.3333V11.8H16.4C17.2836 11.8 18 12.5163 18 13.4V16.6C18 17.4836 17.2836 18.2 16.4 18.2H13.2C12.3164 18.2 11.6 17.4836 11.6 16.6V15.5333H8.4V16.6C8.4 17.4836 7.68366 18.2 6.8 18.2H3.6C2.71634 18.2 2 17.4836 2 16.6V13.4C2 12.5163 2.71634 11.8 3.6 11.8H4.66667V8.59995H3.6C2.71634 8.59995 2 7.88361 2 6.99995V3.79995ZM14.2667 8.59995H13.2C12.3164 8.59995 11.6 7.88361 11.6 6.99995V5.93328H8.4V6.99995C8.4 7.88361 7.68366 8.59995 6.8 8.59995H5.73333V11.8H6.8C7.68366 11.8 8.4 12.5163 8.4 13.4V14.4666H11.6V13.4C11.6 12.5163 12.3164 11.8 13.2 11.8H14.2667V8.59995ZM3.6 3.26662C3.30545 3.26662 3.06667 3.5054 3.06667 3.79995V6.99995C3.06667 7.2945 3.30545 7.53328 3.6 7.53328H6.8C7.09455 7.53328 7.33333 7.2945 7.33333 6.99995V3.79995C7.33333 3.5054 7.09455 3.26662 6.8 3.26662H3.6ZM3.06667 13.4C3.06667 13.1054 3.30545 12.8666 3.6 12.8666H6.8C7.09455 12.8666 7.33333 13.1054 7.33333 13.4V16.6C7.33333 16.8945 7.09455 17.1333 6.8 17.1333H3.6C3.30545 17.1333 3.06667 16.8945 3.06667 16.6V13.4ZM12.6667 13.4C12.6667 13.1054 12.9055 12.8666 13.2 12.8666H16.4C16.6945 12.8666 16.9333 13.1054 16.9333 13.4V16.6C16.9333 16.8945 16.6945 17.1333 16.4 17.1333H13.2C12.9055 17.1333 12.6667 16.8945 12.6667 16.6V13.4ZM12.6667 3.79995C12.6667 3.5054 12.9055 3.26662 13.2 3.26662H16.4C16.6945 3.26662 16.9333 3.5054 16.9333 3.79995V6.99995C16.9333 7.2945 16.6945 7.53328 16.4 7.53328H13.2C12.9055 7.53328 12.6667 7.2945 12.6667 6.99995V3.79995Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>

                  BlockchainDNA NFT for Legacy Security
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
Receive a unique digital certificate verifying your dog’s records on the blockchain, securing your unbreakable bond and protecting your dog’s legacy for generations.                 </p>
              </div>
            </div>
            
            
             <div className="flex max-[900px]:flex-col border-b border-black gap-10 max-[900px]:gap-6 pt-6 pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
              <div className="w-1/2 max-[900px]:w-full max-[900px]:border-b max-[900px]:border-black max-[900px]:pb-4">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
                  >
                    <path
                      d="M15.8563 6.5625C15.5213 6.5625 15.2824 6.5625 15 6.5625V5.9375C15 5.42055 14.5795 5 14.0625 5V4.0625C14.0625 3.37215 13.5029 2.8125 12.8125 2.8125H7.1875C6.49715 2.8125 5.9375 3.37215 5.9375 4.0625V5C5.42055 5 5 5.42055 5 5.9375V6.5625C4.71762 6.5625 4.47875 6.5625 4.14375 6.5625C3.40938 6.5625 2.8125 7.15938 2.8125 7.89375V15.8563C2.8125 16.5906 3.40938 17.1875 4.14375 17.1875C7.22172 17.1875 0.888087 17.1875 15.8563 17.1875C16.5906 17.1875 17.1875 16.5906 17.1875 15.8563V7.89375C17.1875 7.15938 16.5906 6.5625 15.8563 6.5625ZM15 7.96875H14.0625V7.1875H15V7.96875ZM14.0625 10.7812H15V16.25H14.0625V10.7812ZM13.75 10.1562C13.5781 10.1562 13.4375 10.0156 13.4375 9.84375V8.90625C13.4375 8.73438 13.5781 8.59375 13.75 8.59375C14.0874 8.59375 14.9712 8.59375 15.3125 8.59375C15.4844 8.59375 15.625 8.73438 15.625 8.90625V9.84375C15.625 10.0156 15.4844 10.1562 15.3125 10.1562C14.9751 10.1562 14.0913 10.1562 13.75 10.1562ZM7.1875 4.375C7.1875 4.20242 7.32742 4.0625 7.5 4.0625H12.5C12.6726 4.0625 12.8125 4.20242 12.8125 4.375V5C12.2955 5 11.875 5.42055 11.875 5.9375V6.5625H8.125V5.9375C8.125 5.42055 7.70445 5 7.1875 5V4.375ZM5 10.7812H5.9375V16.5625H5V10.7812ZM4.6875 10.1562C4.51562 10.1562 4.375 10.0156 4.375 9.84375V8.90625C4.375 8.73438 4.51562 8.59375 4.6875 8.59375C5.02488 8.59375 5.90867 8.59375 6.25 8.59375C6.42188 8.59375 6.5625 8.73438 6.5625 8.90625V9.84375C6.5625 10.0156 6.42188 10.1562 6.25 10.1562C5.90852 10.1562 5.02465 10.1562 4.6875 10.1562ZM5.9375 7.96875H5V7.1875H5.9375V7.96875ZM5.625 6.5625V5.9375C5.625 5.76234 5.76234 5.625 5.9375 5.625H7.1875C7.35977 5.625 7.5 5.76508 7.5 5.9375V6.5625C4.90809 6.5625 6.74738 6.5625 5.625 6.5625ZM11.7875 12.25L10.5188 13.5344C10.2312 13.825 9.76875 13.825 9.48125 13.5344L8.2125 12.25C7.75 11.7844 7.66875 11.0312 8.07188 10.5094C8.55625 9.87813 9.45937 9.83438 10 10.3813C10.5406 9.83438 11.4437 9.87813 11.9281 10.5094C12.3312 11.0312 12.25 11.7844 11.7875 12.25ZM12.5 5.9375C12.5 5.76234 12.6373 5.625 12.8125 5.625H14.0625C14.2348 5.625 14.375 5.76508 14.375 5.9375V6.5625C13.2535 6.5625 15.0904 6.5625 12.5 6.5625V5.9375Z"
                      fill="currentColor"
                    />
                  </svg>

                  Access to Trusted Local Services and Dog-Friendly Travel
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
Discover recommended vets, groomers, and travel destinations with real community reviews, making care and adventures easier to plan.                 </p>
              </div>
              <div className="w-1/2 max-[900px]:w-full">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 17 17"
  fill="none"
  className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
>
  <path
    d="M8.33334 0C6.68516 0 5.07399 0.488741 3.70358 1.40442C2.33318 2.3201 1.26507 3.62159 0.634341 5.1443C0.0036107 6.66702 -0.161417 8.34258 0.160126 9.95908C0.48167 11.5756 1.27534 13.0605 2.44078 14.2259C3.60622 15.3913 5.09108 16.185 6.70758 16.5065C8.32409 16.8281 9.99965 16.6631 11.5224 16.0323C13.0451 15.4016 14.3466 14.3335 15.2622 12.9631C16.1779 11.5927 16.6667 9.98151 16.6667 8.33333C16.6667 7.23898 16.4511 6.15535 16.0323 5.1443C15.6135 4.13326 14.9997 3.2146 14.2259 2.44078C13.4521 1.66696 12.5334 1.05313 11.5224 0.634337C10.5113 0.215548 9.42769 0 8.33334 0ZM5.41667 3.75C5.7463 3.75 6.06854 3.84775 6.34262 4.03088C6.6167 4.21402 6.83032 4.47432 6.95647 4.77886C7.08262 5.0834 7.11562 5.41851 7.05131 5.74182C6.987 6.06512 6.82827 6.36209 6.59518 6.59518C6.36209 6.82826 6.06512 6.987 5.74182 7.05131C5.41852 7.11562 5.08341 7.08261 4.77886 6.95647C4.47432 6.83032 4.21402 6.6167 4.03089 6.34262C3.84775 6.06853 3.75 5.7463 3.75 5.41667C3.75 4.97464 3.9256 4.55072 4.23816 4.23815C4.55072 3.92559 4.97464 3.75 5.41667 3.75ZM5.58917 12.2558C5.5123 12.3354 5.42034 12.3989 5.31867 12.4426C5.217 12.4863 5.10765 12.5092 4.997 12.5102C4.88635 12.5112 4.77662 12.4901 4.67421 12.4482C4.57179 12.4063 4.47875 12.3444 4.40051 12.2662C4.32226 12.1879 4.26039 12.0949 4.21848 11.9925C4.17658 11.89 4.1555 11.7803 4.15646 11.6697C4.15742 11.559 4.18041 11.4497 4.22409 11.348C4.26776 11.2463 4.33124 11.1544 4.41084 11.0775L11.0775 4.41083C11.1544 4.33124 11.2463 4.26776 11.348 4.22408C11.4497 4.18041 11.559 4.15742 11.6697 4.15646C11.7803 4.1555 11.89 4.17658 11.9925 4.21848C12.0949 4.26038 12.1879 4.32226 12.2662 4.4005C12.3444 4.47875 12.4063 4.57179 12.4482 4.6742C12.4901 4.77662 12.5112 4.88635 12.5102 4.997C12.5093 5.10765 12.4863 5.217 12.4426 5.31867C12.3989 5.42034 12.3354 5.51229 12.2558 5.58917L5.58917 12.2558ZM11.25 12.9167C10.9204 12.9167 10.5981 12.8189 10.3241 12.6358C10.05 12.4526 9.83635 12.1923 9.7102 11.8878C9.58406 11.5833 9.55105 11.2481 9.61536 10.9248C9.67967 10.6015 9.8384 10.3046 10.0715 10.0715C10.3046 9.8384 10.6016 9.67967 10.9249 9.61536C11.2482 9.55105 11.5833 9.58405 11.8878 9.7102C12.1924 9.83635 12.4527 10.05 12.6358 10.324C12.8189 10.5981 12.9167 10.9204 12.9167 11.25C12.9167 11.692 12.7411 12.1159 12.4285 12.4285C12.116 12.7411 11.692 12.9167 11.25 12.9167Z"
    fill="currentColor"
  />
</svg>

                 Exclusive Product Discounts
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
Enjoy lifelong 5% discounts on premium, carefully reviewed products that enhance your dog’s health and happiness.                  </p>
              </div>
            </div>
            
            
             <div className="flex max-[900px]:flex-col border-b border-black gap-10 max-[900px]:gap-6 pt-6 pb-6 max-[1200px]:pt-4 max-[1200px]:pb-4">
              <div className="w-1/2 max-[900px]:w-full max-[900px]:border-b max-[900px]:border-black max-[900px]:pb-4">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 18"
  fill="none"
  className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
>
  <path
    d="M3.07215 3.23582C3.9659 3.23582 4.68996 2.51117 4.68996 1.61809C4.68996 0.724062 3.9659 0 3.07215 0C2.17812 0 1.4541 0.724062 1.4541 1.61809C1.45406 2.51117 2.17812 3.23582 3.07215 3.23582Z"
    fill="currentColor"
  />
  <path
    d="M9.98855 7.52485V7.52728C9.9925 7.52728 9.99613 7.52606 10 7.52606C10.004 7.52606 10.0076 7.52728 10.0115 7.52728V7.52485C10.6194 7.51247 11.1085 7.01798 11.1085 6.40763C11.1085 5.79638 10.6194 5.3022 10.0115 5.28981V5.28735C10.0076 5.28735 10.0039 5.28856 10 5.28856C9.99613 5.28856 9.9925 5.28735 9.98855 5.28735V5.28981C9.38063 5.3022 8.8916 5.79638 8.8916 6.40763C8.89156 7.01798 9.38063 7.51247 9.98855 7.52485Z"
    fill="currentColor"
  />
  <path
    d="M16.9284 3.23582C17.8224 3.23582 18.5464 2.51117 18.5464 1.61809C18.5464 0.724062 17.8224 0 16.9284 0C16.0346 0 15.3105 0.724062 15.3105 1.61809C15.3106 2.51117 16.0346 3.23582 16.9284 3.23582Z"
    fill="currentColor"
  />
  <path
    d="M18.3632 4.0022H16.9447H16.2258C15.4014 4.0022 14.6464 4.46435 14.2714 5.19837L12.963 9.02521C12.918 9.11294 12.8342 9.17521 12.7368 9.19247C12.6394 9.20974 12.5396 9.1804 12.4667 9.11294L11.6528 8.40825C11.4093 8.1829 11.09 8.05774 10.7582 8.05774H10H9.2418C8.91 8.05774 8.59066 8.1829 8.34719 8.40825L7.53332 9.11294C7.46043 9.1804 7.36062 9.20974 7.26324 9.19247C7.1659 9.17521 7.08211 9.11294 7.03703 9.02521L5.72863 5.19837C5.35363 4.46435 4.59871 4.0022 3.77426 4.0022H3.05527H1.6368C0.852891 4.0022 0 4.85509 0 5.63935V11.0773C0 11.4692 0.317578 11.7871 0.709531 11.7871C0.902461 11.7871 0.709531 11.7871 1.20492 11.7871L1.47469 16.4248C1.47469 16.8418 1.81313 17.1799 2.23016 17.1799C2.40617 17.1799 2.7307 17.1799 3.05523 17.1799C3.37977 17.1799 3.7043 17.1799 3.88031 17.1799C4.29734 17.1799 4.63578 16.8418 4.63578 16.4248L4.90555 11.7871L4.90223 8.47591C4.90223 8.4236 4.93793 8.37853 4.98902 8.36583C5.04016 8.35372 5.09246 8.3779 5.11637 8.4245L6.15434 10.9792C6.27957 11.2236 6.51184 11.3954 6.78223 11.4435C7.05262 11.4916 7.32996 11.4105 7.53168 11.2242L8.52488 10.4926C8.55816 10.4621 8.60625 10.4542 8.64738 10.4715C8.68883 10.4899 8.71547 10.5308 8.71547 10.5755L8.7191 13.4469L8.9057 16.6573C8.9057 16.9459 9.14012 17.1799 9.42895 17.1799C9.55055 17.1799 9.77523 17.1799 9.99996 17.1799C10.2247 17.1799 10.4494 17.1799 10.571 17.1799C10.8598 17.1799 11.0942 16.9459 11.0942 16.6573L11.2808 13.4469L11.2845 10.5755C11.2845 10.5307 11.3111 10.4899 11.3525 10.4715C11.3936 10.4542 11.4417 10.4621 11.475 10.4926L12.4682 11.2242C12.67 11.4105 12.9473 11.4916 13.2177 11.4435C13.4881 11.3954 13.7204 11.2236 13.8455 10.9792L14.8836 8.4245C14.9074 8.37794 14.9598 8.35372 15.0109 8.36583C15.062 8.37853 15.0977 8.42356 15.0977 8.47591L15.0943 11.7871L15.3641 16.4248C15.3641 16.8418 15.7025 17.1799 16.1196 17.1799C16.2957 17.1799 16.6202 17.1799 16.9447 17.1799C17.2692 17.1799 17.5938 17.1799 17.7697 17.1799C18.1868 17.1799 18.5253 16.8418 18.5253 16.4248L18.795 11.7871C19.2904 11.7871 19.0975 11.7871 19.2904 11.7871C19.6824 11.7871 20 11.4692 20 11.0773V5.63935C20 4.85509 19.1471 4.0022 18.3632 4.0022Z"
    fill="currentColor"
  />
</svg>

                 A Vibrant, Private Community
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
Join an exclusive circle of committed dog lovers for deeper connection, support, and shared growth.                 </p>
              </div>
              <div className="w-1/2 max-[900px]:w-full">
                <h1 className="text-[16px] font-bold font-public-sans text-white">
                  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="none"
  className="w-5 h-5 inline-block mr-2 text-[#D3B86A] mb-2"
>
  <g clipPath="url(#clip0_951_1059)">
    <path
      d="M12.3328 12.357C13.6345 11.0553 13.6345 8.94473 12.3328 7.64298C11.031 6.34123 8.92049 6.34123 7.61874 7.64298C6.31699 8.94473 6.31699 11.0553 7.61874 12.357C8.92049 13.6588 11.031 13.6588 12.3328 12.357Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8681 15.8926C19.1225 12.6382 19.1225 7.36181 15.8681 4.10744C12.6137 0.853075 7.33736 0.853075 4.08299 4.10744C0.828617 7.36181 0.828617 12.6382 4.08299 15.8926C7.33736 19.1469 12.6137 19.1469 15.8681 15.8926Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16699 4.1665L7.50033 7.49984"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 7.49984L15.8333 4.1665"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 12.5L15.8333 15.8333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.50033 12.5L4.16699 15.8333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_951_1059">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>

                  Advanced Support for Professionals
                </h1>
                <p className="text-[16px] max-[550px]:text-justify font-light font-public-sans text-white/80">
Pet care professionals receive expanded tools and community features to enhance their services and build strong relationships with dog families.                 </p>
              </div>
            </div>

            
            
          </div>

          <button className="whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full mt-16 sm:w-fit md:w-[293px] mx-auto h-[47px] text-[20px] mb-1 flex items-center justify-center gap-2 text-black"
          onClick={handleSubscription}>
            <span className="text-xl inline-block">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z" />
                  </svg>
            </span>
            View Subscription
          </button>
        </section>

        {/* How It Works Section */}
        <div className="bg-gradient-to-t from-white/5 to-black">
          <section className="max-w-[1440px] mx-auto min-h-screen py-16 px-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 max-[1024px]:px-4 max-[450px]:px-3">
            <div className="relative w-full md:w-1/2 aspect-[652/602]">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890479/Frame_5506_mhmzgb.png"
                  alt="home-section-dog"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-[40px]">
              <div className="w-full flex flex-col gap-[2px]">
                <h2 className="font-semibold text-[32px] font-work-sans tracking-tighter text-white">
                  Get Started with Mr. White in 3 Easy Steps
                </h2>
                <p className="text-[20px] font-light font-public-sans text-white/80">
                  A short guide on how to get started with Mr White.
                </p>
              </div>
              <div className="w-full flex flex-col gap-[24px]">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-[24px] bg-gradient-to-r from-white/10 from-10% to-black to-90% rounded-sm px-4 py-4">
                    <div className="flex-shrink-0 h-[32px] w-[32px] md:h-[40px] md:w-[40px] text-black bg-[#D3B86A] rounded-full flex items-center justify-center text-[20px] md:text-[24px] font-semibold font-work-sans">
                      {step}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-[20px] font-semibold font-work-sans text-white">
                        {step === 1 && "Sign Up"}
                        {step === 2 && "Choose Your Subscription"}
                        {step === 3 && "Access Your Personal Portal"}
                      </h3>
                      <p className="text-[16px] text-justify font-light font-public-sans tracking-tighter text-white/80">
                        {step === 1 && "Create your account in moments—join the Companion Crew for free or the Elite Pack as a full member—to start your journey with Mr. White and your companion."}
                        {step === 2 && "Discover your personal portal with two plans: the free Companion Crew and the Elite Pack Premium with advanced features for comprehensive dog care."}
                        {step === 3 && "Step into your personal portal with Mr. White, where tailored guidance, records, and wisdom for you and your dog are available 24/7."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <button className="whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full md:w-[293px] h-[47px] text-[20px] mb-1 flex items-center justify-center gap-2 cursor-pointer text-black"
                onClick={handleLoginClick}>
                  <span className="text-xl inline-block">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="!w-6 !h-6">
                      <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M21 12h-13l3 -3"></path>
                      <path d="M11 15l-3 -3"></path>
                    </svg>
                  </span>
                  Sign Up & Login
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Subscription Plans Section */}
       <Subscription/>

        {/* FAQ Section */}
        <section className="max-w-[1440px] mx-auto min-h-screen py-16 px-12 flex flex-col justify-center md:justify-between items-center gap-10 max-[1024px]:px-4 max-[450px]:px-3">
          <div className="w-full h-fit flex flex-col md:flex-row justify-center md:justify-between gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-[24px]">
              <div className="w-full h-[108px] flex flex-col justify-between">
                <h2 className="text-[32px] max-[1200px]:text-center font-semibold font-work-sans tracking-tighter text-white">
                  Discover Mr. White: Your Questions Answered
                </h2>
                <p className="text-[20px] text-center font-medium font-public-sans text-white/80">
                  Frequently Asked Questions
                </p>
              </div>
              <div className="max-[900px]:w-full w-[425px] gap-2 bg-white/10 rounded-sm flex flex-col justify-between p-6">
                <p className="text-[20px] font-semibold font-work-sans text-[#D3B86A]">Still have questions?</p>
                <p className="text-[16px] font-light font-public-sans text-white/80">Can&apos;t find your question? Contact us directly!</p>
               <ContactButton title="Contact Us"/>
              </div>
              <div className="h-[766px] relative">
                <div className="relative w-full h-full bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1761906459/Mask_group_gpmx0d.png')]">
                  <Image
                    src= "https://res.cloudinary.com/dhahajyth/image/upload/v1761890479/Group_919_n3pc5g.png"
                    alt="mrwhite-nft"
                    fill
                    className="justify-center rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-fit px-6 py-6 bg-white/10 rounded-sm">
              <div className="w-full">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-black last:border-b-0">
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4">
                        <span className="font-semibold text-[20px] font-work-sans text-white">{faq.question}</span>
                        <span className="transition group-open:rotate-180 text-[#D3B86A]">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-white/80 font-public-sans">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Partner/>
      </div> 
      <Footer />
      
            <AuthModal 
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
            />
    </div>
  );
}