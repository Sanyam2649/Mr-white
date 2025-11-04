'use client';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { useState, useEffect, useRef } from 'react';
import GenerateBook from '@/components/generateBook';

const Interface = [
  {
    bgImage: "https://res.cloudinary.com/dhahajyth/image/upload/v1761915211/3639a753d647f3e08c09356f92ed2b9bbfee9e30-min_he7itz.jpg",
    title: "Talk with Mr. White",
    description: "Ask Mr. White a question and answers shall be given.",
    itemPosition: "top-20 right-10"
  },
  {
    bgImage: "https://res.cloudinary.com/dhahajyth/image/upload/v1761917208/About_Hero_1_-min_quaxpe.png",
    title: "",
    description: "",
    itemPosition: ""
  },
  {
    bgImage: "https://res.cloudinary.com/dhahajyth/image/upload/v1761916892/88fc4560f43440c537df981705d8962f94dfe059-min_yn0ei3.png",
    title: "",
    description: "",
    itemPosition: ""
  },
  {
    bgImage: "https://res.cloudinary.com/dhahajyth/image/upload/v1761917075/7d709bf4e8e535403e77c47b06f237843e2d8d58-min_evju87.png",
    title: "",
    description: "",
    itemPosition: ""
  }
];

const labels = [
  { 
    title: "Free Plan", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 24 24" fill="none">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.0808 15.9751L14.9901 12.8438C14.9025 12.7875 14.8031 12.7522 14.6995 12.7407L12.5526 12.4501C12.3925 12.4271 12.2292 12.4578 12.0884 12.5376C11.9476 12.6173 11.8372 12.7415 11.7745 12.8907L10.4901 15.7688C10.4298 15.9027 10.41 16.0513 10.4334 16.1963C10.4567 16.3413 10.5221 16.4763 10.6214 16.5844L12.3839 18.4876C12.4636 18.5751 12.5219 18.6799 12.5545 18.7937C12.587 18.9076 12.5928 19.0274 12.5714 19.1438L12.2058 21.0001" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.09379 5.21252L5.25004 7.20002C5.17655 7.37647 5.17319 7.57432 5.24066 7.75315L6.31879 10.6219C6.36092 10.7415 6.43305 10.8482 6.52825 10.9319C6.62346 11.0157 6.73856 11.0735 6.86254 11.1L8.86879 11.5313C8.98014 11.5538 9.08472 11.602 9.17422 11.6719C9.26372 11.7419 9.33569 11.8318 9.38441 11.9344L9.74066 12.675C9.80396 12.8002 9.90032 12.9058 10.0193 12.9801C10.1383 13.0545 10.2754 13.0949 10.4157 13.0969H11.6813" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.2973 3.29065L15.1691 4.86565C15.2496 5.01372 15.2786 5.18437 15.2514 5.35071C15.2243 5.51704 15.1426 5.66962 15.0191 5.7844L12.4973 8.06252C12.455 8.10284 12.4078 8.1375 12.3566 8.16565L11.2035 8.80315C11.0936 8.86147 10.9717 8.89356 10.8473 8.8969H8.84102C8.69322 8.89765 8.54885 8.94151 8.42562 9.02311C8.30239 9.10471 8.20565 9.2205 8.14727 9.35627L7.36914 11.2031" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    title: "Attach File", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 24 24" fill="none">
        <path d="M10.7552 4.7448C9.09548 3.08507 6.40452 3.08507 4.7448 4.7448C3.08507 6.40452 3.08507 9.09548 4.7448 10.7552L5.27605 11.2865C5.56894 11.5793 5.56894 12.0542 5.27605 12.3471C4.98315 12.64 4.50828 12.64 4.21539 12.3471L3.68414 11.8159C1.43862 9.57035 1.43862 5.92965 3.68414 3.68414C5.92965 1.43862 9.57035 1.43862 11.8159 3.68414L20.3159 12.1842C22.5614 14.4297 22.5614 18.0704 20.3159 20.3159C18.0704 22.5614 14.4297 22.5614 12.1842 20.3159L8.12751 16.2592C6.46778 14.5995 6.46778 11.9085 8.12751 10.2488C9.78724 8.58908 12.4782 8.58908 14.1379 10.2488L16.6106 12.7215C16.9035 13.0144 16.9035 13.4892 16.6106 13.7821C16.3177 14.075 15.8428 14.075 15.5499 13.7821L13.0773 11.3095C12.0033 10.2355 10.2621 10.2355 9.18817 11.3095C8.11423 12.3834 8.11423 14.1246 9.18817 15.1986L13.2448 19.2552C14.9046 20.915 17.5955 20.915 19.2553 19.2552C20.915 17.5955 20.915 14.9046 19.2553 13.2448L10.7552 4.7448Z" fill="white"/>
      </svg>
    )
  },
  
    {
    title : "Generate BookMark",
    icon : (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50002 20.0498C4.49878 19.754 4.55613 19.4609 4.66876 19.1873C4.7814 18.9138 4.94708 18.6652 5.15626 18.4561C5.36544 18.2469 5.61397 18.0812 5.88752 17.9686C6.16106 17.8559 6.4542 17.7986 6.75002 17.7998H19.5V2.79982H6.75002C6.4542 2.79858 6.16106 2.85594 5.88752 2.96857C5.61397 3.0812 5.36544 3.24689 5.15626 3.45607C4.94708 3.66525 4.7814 3.91378 4.66876 4.18732C4.55613 4.46086 4.49878 4.754 4.50002 5.04982V20.0498Z" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 20.0498V20.7998H18" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
  },
  
  { 
    title: "Upload Insight", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M18 8.5C18 9.88071 16.8807 11 15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5ZM16.5 8.5C16.5 9.05228 16.0523 9.5 15.5 9.5C14.9477 9.5 14.5 9.05228 14.5 8.5C14.5 7.94772 14.9477 7.5 15.5 7.5C16.0523 7.5 16.5 7.94772 16.5 8.5Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V14.4393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L14 14.9393L16.4697 12.4697C16.7626 12.1768 17.2374 12.1768 17.5303 12.4697L19.5 14.4393V5C19.5 4.72386 19.2761 4.5 19 4.5ZM9 12.0607L4.5 16.5607V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V16.5607L17 14.0607L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303L9 12.0607Z" fill="white"/>
      </svg>
    )
  },
  { 
    title: "Voice Message", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 24 24" fill="none">
        <path d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" fill="white" />
        <path d="M7.25 8.5C6.83579 8.5 6.5 8.83579 6.5 9.25C6.5 9.66421 6.83579 10 7.25 10H11.75C12.1642 10 12.5 9.66421 12.5 9.25C12.5 8.83579 12.1642 8.5 11.75 8.5H7.25Z" fill="white" />
        <path d="M3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H9C9.41422 15.5 9.75 15.1642 9.75 14.75C9.75 14.3358 9.41422 14 9 14H3.75Z" fill="white" />
        <path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H11.75C12.1642 21 12.5 20.6642 12.5 20.25C12.5 19.8358 12.1642 19.5 11.75 19.5H3.75Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.5 6C15.1193 6 14 7.11929 14 8.5V12.5C14 13.8807 15.1193 15 16.5 15C17.8807 15 19 13.8807 19 12.5V8.5C19 7.11929 17.8807 6 16.5 6ZM17.5 12.5V8.5C17.5 7.94772 17.0523 7.5 16.5 7.5C15.9477 7.5 15.5 7.94772 15.5 8.5V12.5C15.5 13.0523 15.9477 13.5 16.5 13.5C17.0523 13.5 17.5 13.0523 17.5 12.5Z" fill="white" />
        <path d="M12.5056 12.7121C12.4837 12.2985 12.1305 11.9809 11.7169 12.0029C11.3033 12.0249 10.9858 12.378 11.0077 12.7916C11.0824 14.1975 11.6933 15.5212 12.7146 16.4901C13.5535 17.2859 14.6168 17.7927 15.75 17.9486V19.5H14.75C14.3358 19.5 14 19.8358 14 20.25C14 20.6642 14.3358 21 14.75 21H18.25C18.6642 21 19 20.6642 19 20.25C19 19.8358 18.6642 19.5 18.25 19.5H17.25V17.9486C18.3817 17.7929 19.4438 17.2873 20.2822 16.4931C21.3043 15.525 21.9163 14.2018 21.992 12.796C22.0143 12.3824 21.6971 12.029 21.2835 12.0067C20.8699 11.9844 20.5165 12.3017 20.4942 12.7153C20.4391 13.7377 19.994 14.7 19.2507 15.4041C18.5073 16.1082 17.5223 16.5004 16.4984 16.5C15.4745 16.4996 14.4898 16.1066 13.747 15.4019C13.0042 14.6972 12.5599 13.7345 12.5056 12.7121Z" fill="white" />
        <path d="M2.78033 6.71967C2.48744 6.42678 2.01256 6.42678 1.71967 6.71967C1.42678 7.01256 1.42678 7.48744 1.71967 7.78033L3.18934 9.25L1.71967 10.7197C1.42678 11.0126 1.42678 11.4874 1.71967 11.7803C2.01256 12.0732 2.48744 12.0732 2.78033 11.7803L4.78033 9.78033C5.07322 9.48744 5.07322 9.01256 4.78033 8.71967L2.78033 6.71967Z" fill="white" />
      </svg>
    )
  },
  { 
    title: "Bookmark", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 20 20" fill="none">
        <path d="M15 17.5L10 14.375L5 17.5V3.75C5 3.58424 5.06585 3.42527 5.18306 3.30806C5.30027 3.19085 5.45924 3.125 5.625 3.125H14.375C14.5408 3.125 14.6997 3.19085 14.8169 3.30806C14.9342 3.42527 15 3.58424 15 3.75V17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 13.75L10 10.625L5 13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

// Mock AI response function
const getAIResponse = async (message) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const responses = [
    "I understand your question about that topic. Based on my analysis, here's what I can tell you...",
    "That's an interesting question! Let me break it down for you...",
    "I've processed your request and here are my insights...",
    "Based on the information provided, I recommend considering the following approach...",
    "Great question! Here's my analysis of the situation..."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeLabel, setActiveLabel] = useState('Free Plan');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [history, setHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatActive , setChatActive] = useState(false);
  const [showGenerateBookMark, setShowGenerateBookmark] = useState(false);
  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Interface.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, Interface.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Interface.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Interface.length) % Interface.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const openSidebar = (type) => {
    setSidebarType(type);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setShowGenerateBookmark(false);
    setSidebarType('');
  };

  // AI Chat functionality
  const handleSendMessage = async () => {
    if (!inputMessage.trim() && !file) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setHistory(prev => [...prev, inputMessage]);
    
    const currentInput = inputMessage;
    setInputMessage('');
    setFile(null);
    setIsLoading(true);

    try {
      const aiResponse = await getAIResponse(currentInput);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setInputMessage(prev => prev + ` [Attached: ${selectedFile.name}]`);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
    } else {
      setIsRecording(true);
    }
  };

  const handleBookmark = () => {
    if (chatMessages.length > 0) {
      const lastMessage = chatMessages[chatMessages.length - 1];
      if (!bookmarks.includes(lastMessage.text)) {
        setBookmarks(prev => [...prev, lastMessage.text]);
      }
    }
  };
  
  const handleChatActive = () => {
    setChatActive(true);
  }
  
  const handleGenerateBookMark = () => {
    setShowGenerateBookmark(true);
  }

  const handleLabelClick = (title) => {
    setActiveLabel(title);
    
    switch (title) {
      case 'Attach File':
        document.getElementById('file-upload')?.click();
        break;
      case 'Voice Message':
        toggleRecording();
        break;
      case 'Bookmark':
        handleBookmark();
        break;
      case 'Upload Insight':
        alert('Upload Insight feature clicked');
        break;
      
        case 'Generate BookMark':
          handleGenerateBookMark();
        break;
      
    }
  };

  return (
    <div className="overflow-hidden bg-black text-[#FFFFFF] m-0 relative">
      <Navbar />
      
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeSidebar}
          />
          <div className="absolute right-0 top-[96px]  h-[899px]  overflow-y-auto w-[560px] bg-gradient-to-r from-[#101010] to-[#000000] z-50">
           <SideBar 
              title={sidebarType} 
              onClose={closeSidebar} 
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
              history={history}
            />
            
          </div>
        </div>
      )}
      
      { showGenerateBookMark && 
       <div className="fixed inset-0 z-40 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeSidebar}
          />
          <div className="absolute right-0 top-[96px]  overflow-y-auto bg-[#000000] z-50">
        <GenerateBook onClose={closeSidebar} />
        </div>
        </div>
      }

      <div className={`flex flex-col  ${sidebarOpen ? 'overflow-hidden' : 'overflow-y-auto'} pt-[96px]`}>
          <div className="relative w-full h-[400px] max-h-screen overflow-hidden">

            {/* Slides Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Interface.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-work-sans tracking-tighter text-white mb-4">
                      {item.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-medium font-public-sans text-white/80 max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators/Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
              {Interface.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-[#D3B86A]'
                    : 'bg-white/50 hover:bg-white/70'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute bottom-8 right-8 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-all duration-300"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>

        {/* Main Content Section - EXACTLY YOUR ORIGINAL DESIGN */}
        <div className='min-h-screen p-[96px] gap-[96px] bg-black'>
          <div className='flex flex-row justify-between items-center mb-8'>
            <p className="text-[20px] font-semibold font-public-sans h-[40px] bg-[#FFFFFF1A] px-[12px] py-[8px] rounded-sm flex items-center gap-[8px]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
              </svg>
              How Does it Work?
            </p>
            <div className='flex flex-row gap-[24px]'>
              <p className='text-[20px] flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors' onClick={() => openSidebar('Bookmarks')} >
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 20 20" fill="none">
                  <path d="M15 17.5L10 14.375L5 17.5V3.75C5 3.58424 5.06585 3.42527 5.18306 3.30806C5.30027 3.19085 5.45924 3.125 5.625 3.125H14.375C14.5408 3.125 14.6997 3.19085 14.8169 3.30806C14.9342 3.42527 15 3.58424 15 3.75V17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 13.75L10 10.625L5 13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Bookmarks
              </p>
              <p className='text-[20px] flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors' onClick={() => openSidebar('History')}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 20 20" fill="none">
                  <path d="M10.6243 4.79163C10.6243 4.44645 10.3445 4.16663 9.99935 4.16663C9.65417 4.16663 9.37435 4.44645 9.37435 4.79163V9.99996C9.37435 10.1657 9.4402 10.3247 9.55741 10.4419L12.2657 13.1502C12.5098 13.3943 12.9055 13.3943 13.1496 13.1502C13.3937 12.9062 13.3937 12.5104 13.1496 12.2664L10.6243 9.74108V4.79163Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.3327 9.99996C18.3327 14.6023 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6023 1.66602 9.99996C1.66602 5.39759 5.39698 1.66663 9.99935 1.66663C14.6017 1.66663 18.3327 5.39759 18.3327 9.99996ZM17.0827 9.99996C17.0827 13.912 13.9114 17.0833 9.99935 17.0833C6.08733 17.0833 2.91602 13.912 2.91602 9.99996C2.91602 6.08794 6.08733 2.91663 9.99935 2.91663C13.9114 2.91663 17.0827 6.08794 17.0827 9.99996Z" fill="currentColor" />
                </svg>
                History
              </p>
            </div>
          </div>

          <div className='p-[40px] gap-[40px] bg-[#FFFFFF0D] rounded-lg'>
            {!chatActive && <h1 className='text-center font-semibold font-sans text-[32px] mb-8'>How can Mr. White help you?</h1>}

            <div className='overflow-y-auto py-8'>
              {chatMessages.length !== 0 && 
                <div className='space-y-4'>
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="max-w-[80%] rounded-[4px] p-3 bg-[#FFFFFF1A] min-w-[280px]">
                        <p className='text-sm'>{message.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className='flex justify-start'>
                      <div className='bg-[#2A2A2A] text-white rounded-lg p-3'>
                        <div className='flex space-x-1'>
                          <div className='w-2 h-2 bg-gray-300 rounded-full animate-bounce'></div>
                          <div className='w-2 h-2 bg-gray-300 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                          <div className='w-2 h-2 bg-gray-300 rounded-full animate-bounce' style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>}
                
                {chatActive && <div className='my-6 rounded-md flex flex-col gap-4 p-4'>
                  <p className='font-sans font-medium text-[20px] leading-snug text-white'>Hi! I&apos;m here—everything’s working. What can I help you with today?</p>
                  <div className='flex flex-inline w-[196px] justify-between'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.125 13.125H16.875V3.125H6.875V6.875" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.125 6.875H3.125V16.875H13.125V6.875Z" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M2.5 8.125H6.25V16.25H2.5C2.33424 16.25 2.17527 16.1842 2.05806 16.0669C1.94085 15.9497 1.875 15.7908 1.875 15.625V8.75C1.875 8.58424 1.94085 8.42527 2.05806 8.30806C2.17527 8.19085 2.33424 8.125 2.5 8.125V8.125Z" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.25 8.125L9.375 1.875C10.038 1.875 10.6739 2.13839 11.1428 2.60723C11.6116 3.07607 11.875 3.71196 11.875 4.375V6.25H16.7109C16.8882 6.24956 17.0635 6.28706 17.225 6.35997C17.3866 6.43288 17.5306 6.53953 17.6476 6.67273C17.7645 6.80593 17.8516 6.96262 17.9029 7.13226C17.9543 7.3019 17.9687 7.48056 17.9453 7.65625L17.0078 15.1562C16.9699 15.4573 16.8237 15.7343 16.5966 15.9356C16.3695 16.1368 16.0769 16.2486 15.7734 16.25H6.25" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.5 11.875H13.75V3.75H17.5C17.6658 3.75 17.8247 3.81585 17.9419 3.93306C18.0592 4.05027 18.125 4.20924 18.125 4.375V11.25C18.125 11.4158 18.0592 11.5747 17.9419 11.6919C17.8247 11.8092 17.6658 11.875 17.5 11.875V11.875Z" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.75 11.875L10.625 18.125C9.96196 18.125 9.32607 17.8616 8.85723 17.3928C8.38839 16.9239 8.125 16.288 8.125 15.625V13.75H3.28906C3.11182 13.7504 2.93654 13.7129 2.77499 13.64C2.61344 13.5671 2.46936 13.4605 2.35244 13.3273C2.23551 13.1941 2.14845 13.0374 2.09709 12.8677C2.04574 12.6981 2.03128 12.5194 2.05469 12.3438L2.99219 4.84375C3.03012 4.54267 3.17628 4.26567 3.4034 4.06442C3.63053 3.86317 3.92311 3.75141 4.22656 3.75H13.75" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1016 6.02344C17.6245 6.54521 18.0395 7.16502 18.3226 7.84738C18.6057 8.52974 18.7514 9.26124 18.7514 10C18.7514 10.7388 18.6057 11.4703 18.3226 12.1526C18.0395 12.835 17.6245 13.4548 17.1016 13.9766" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.25 13.125H2.5C2.33424 13.125 2.17527 13.0592 2.05806 12.9419C1.94085 12.8247 1.875 12.6658 1.875 12.5V7.5C1.875 7.33424 1.94085 7.17527 2.05806 7.05806C2.17527 6.94085 2.33424 6.875 2.5 6.875H6.25L11.875 2.5V17.5L6.25 13.125Z" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.25 6.875V13.125" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.8906 8.23438C15.1231 8.46592 15.3075 8.74108 15.4333 9.04407C15.5592 9.34706 15.624 9.67192 15.624 10C15.624 10.3281 15.5592 10.6529 15.4333 10.9559C15.3075 11.2589 15.1231 11.5341 14.8906 11.7656" stroke="white"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.583 3.33325C14.583 2.98807 14.8628 2.70825 15.208 2.70825C15.5532 2.70825 15.833 2.98807 15.833 3.33325V6.87492C15.833 7.2201 15.5532 7.49992 15.208 7.49992H11.6663C11.3212 7.49992 11.0413 7.2201 11.0413 6.87492C11.0413 6.52974 11.3212 6.24992 11.6663 6.24992H13.9084C13.2803 5.5953 12.4948 5.10582 11.6216 4.83177C10.5063 4.48176 9.30768 4.50194 8.20479 4.88928C7.1019 5.27662 6.15391 6.01034 5.50239 6.98087C4.85087 7.95139 4.53079 9.10663 4.58995 10.2741C4.64911 11.4415 5.08434 12.5585 5.83063 13.4582C6.57693 14.3578 7.59424 14.992 8.73063 15.2658C9.86703 15.5397 11.0615 15.4386 12.1357 14.9776C13.2099 14.5167 14.1062 13.7206 14.6906 12.7083C14.8632 12.4093 15.2455 12.3069 15.5444 12.4795C15.8433 12.6521 15.9458 13.0343 15.7732 13.3333C15.0538 14.5792 13.9508 15.559 12.6287 16.1263C11.3066 16.6937 9.83642 16.8181 8.43778 16.481C7.03914 16.144 5.78706 15.3635 4.86855 14.2562C3.95003 13.1489 3.41437 11.7742 3.34156 10.3373C3.26874 8.90049 3.66269 7.47865 4.46456 6.28416C5.26642 5.08967 6.43319 4.18663 7.79059 3.7099C9.14798 3.23317 10.6232 3.20834 11.9959 3.63912C12.9677 3.94411 13.8512 4.46588 14.583 5.15867V3.33325Z" fill="white"/>
</svg>


    
                  </div>
                </div>}
            </div>

            <div className='p-6 rounded-[4px] bg-[#1A1A1A]'>
              <div className='h-[104px] gap-[24px] pb-[20px] border-b-[1px] border-[#FFFFFF33]'>
                <input 
                  placeholder='Write your message here' 
                  className="w-full h-[24px] text-[20px] border-0 bg-transparent focus:outline-none text-white"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onClick={handleChatActive}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
                <div className='flex flex-row justify-between mt-[24px] items-center'>
                  <label 
                    onClick={() => {
                      handleLabelClick('Voice Message' || 'Generate BookMark')}}
                    className={`flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#FFFFFF1A] cursor-pointer ${
                      isRecording ? 'border border-red-500' : ''
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 24 24" fill="none">
                      <path d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" fill="white" />
                      <path d="M7.25 8.5C6.83579 8.5 6.5 8.83579 6.5 9.25C6.5 9.66421 6.83579 10 7.25 10H11.75C12.1642 10 12.5 9.66421 12.5 9.25C12.5 8.83579 12.1642 8.5 11.75 8.5H7.25Z" fill="white" />
                      <path d="M3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H9C9.41422 15.5 9.75 15.1642 9.75 14.75C9.75 14.3358 9.41422 14 9 14H3.75Z" fill="white" />
                      <path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H11.75C12.1642 21 12.5 20.6642 12.5 20.25C12.5 19.8358 12.1642 19.5 11.75 19.5H3.75Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.5 6C15.1193 6 14 7.11929 14 8.5V12.5C14 13.8807 15.1193 15 16.5 15C17.8807 15 19 13.8807 19 12.5V8.5C19 7.11929 17.8807 6 16.5 6ZM17.5 12.5V8.5C17.5 7.94772 17.0523 7.5 16.5 7.5C15.9477 7.5 15.5 7.94772 15.5 8.5V12.5C15.5 13.0523 15.9477 13.5 16.5 13.5C17.0523 13.5 17.5 13.0523 17.5 12.5Z" fill="white" />
                      <path d="M12.5056 12.7121C12.4837 12.2985 12.1305 11.9809 11.7169 12.0029C11.3033 12.0249 10.9858 12.378 11.0077 12.7916C11.0824 14.1975 11.6933 15.5212 12.7146 16.4901C13.5535 17.2859 14.6168 17.7927 15.75 17.9486V19.5H14.75C14.3358 19.5 14 19.8358 14 20.25C14 20.6642 14.3358 21 14.75 21H18.25C18.6642 21 19 20.6642 19 20.25C19 19.8358 18.6642 19.5 18.25 19.5H17.25V17.9486C18.3817 17.7929 19.4438 17.2873 20.2822 16.4931C21.3043 15.525 21.9163 14.2018 21.992 12.796C22.0143 12.3824 21.6971 12.029 21.2835 12.0067C20.8699 11.9844 20.5165 12.3017 20.4942 12.7153C20.4391 13.7377 19.994 14.7 19.2507 15.4041C18.5073 16.1082 17.5223 16.5004 16.4984 16.5C15.4745 16.4996 14.4898 16.1066 13.747 15.4019C13.0042 14.6972 12.5599 13.7345 12.5056 12.7121Z" fill="white" />
                      <path d="M2.78033 6.71967C2.48744 6.42678 2.01256 6.42678 1.71967 6.71967C1.42678 7.01256 1.42678 7.48744 1.71967 7.78033L3.18934 9.25L1.71967 10.7197C1.42678 11.0126 1.42678 11.4874 1.71967 11.7803C2.01256 12.0732 2.48744 12.0732 2.78033 11.7803L4.78033 9.78033C5.07322 9.48744 5.07322 9.01256 4.78033 8.71967L2.78033 6.71967Z" fill="white" />
                    </svg>
                    <span className="text-sm font-medium">
                      {isRecording ? 'Recording...' : 'Voice Message'}
                    </span>
                  </label>
                  <p>00/100.000</p>
                </div>
              </div>

              <div className='flex flex-wrap justify-between mb-6 mt-[24px]'>
                {labels.map((label) => (
                  <Label
                    key={label.title}
                    title={label.title}
                    icon={label.icon}
                    isActive={activeLabel === label.title}
                    onClick={() => handleLabelClick(label.title)}
                  />
                ))}

                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading || (!inputMessage.trim() && !file)}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="4" fill="#D3B86A"/>
<path d="M27.297 18.6462L14.2087 11.8851C13.9906 11.7682 13.7389 11.7042 13.4808 11.7002C13.2227 11.6961 12.9683 11.7521 12.7453 11.8621C12.519 11.9671 12.3303 12.1219 12.1992 12.31C12.068 12.4982 11.9992 12.7128 12 12.9312V26.4687C11.9992 26.6871 12.068 26.9017 12.1992 27.0899C12.3303 27.278 12.519 27.4328 12.7453 27.5378C12.9683 27.6478 13.2227 27.7038 13.4808 27.6997C13.7389 27.6957 13.9906 27.6317 14.2087 27.5148L27.297 20.7537C27.5115 20.6442 27.6889 20.4896 27.8121 20.305C27.9353 20.1204 28 19.912 28 19.7C28 19.4879 27.9353 19.2795 27.8121 19.0949C27.6889 18.9103 27.5115 18.7557 27.297 18.6462Z" fill="black"/>
</svg>

                </button>
              </div>

              {/* Hidden file input */}
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept="*/*"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

function Label({ title, icon, isActive, onClick }) {
  return (
    <label 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer select-none ${
        isActive 
          ? 'border border-[#D3B86A] bg-[#FFFFFF33]' 
          : 'border-none bg-transparent'
      } transition-colors duration-200`}
    >
      {icon}
      <span className="text-sm font-medium">{title}</span>
    </label>
  );
}


function SideBar({ title, onClose }) {
  const [isClear , setIsClear] = useState(false);
  console.log(title);
  
  const handleClearHistory = () => {
    setIsClear(true);
  }
  return (
    <div className="flex flex-col text-white">
      {/* Header */}
      <div className='flex flex-col gap-[40px] p-[32px]'>
        <div className='flex flex-col justify-between'>
          <div className='flex justify-between items-center w-full'>
            <p className='text-white text-[24px] font-semibold flex items-center gap-4'>
              <button onClick={onClose} className="hover:opacity-70 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className='size-[24px]' viewBox="0 0 24 24" fill="none">
                  <path d="M9.31795 8.25736C9.02506 7.96447 8.55018 7.96447 8.25729 8.25736C7.9644 8.55025 7.9644 9.02513 8.25729 9.31802L10.9393 12L8.25729 14.682C7.9644 14.9749 7.9644 15.4497 8.25729 15.7426C8.55018 16.0355 9.02506 16.0355 9.31795 15.7426L11.9999 13.0607L14.6819 15.7426C14.9748 16.0355 15.4497 16.0355 15.7426 15.7426C16.0355 15.4497 16.0355 14.9749 15.7426 14.682L13.0606 12L15.7426 9.31802C16.0355 9.02513 16.0355 8.55025 15.7426 8.25736C15.4497 7.96447 14.9748 7.96447 14.6819 8.25736L11.9999 10.9393L9.31795 8.25736Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" fill="white" />
                </svg>
              </button>
              {title === 'Bookmarks' ? 'Bookmarks' : 'History'}
            </p>
            <button className={`text-white text-[16px] ${title === 'History' ? 'block' : 'hidden'} w-[133px] h-[36px] border-none p-[8px] gap-[8px] bg-[#FFFFFF1A] rounded hover:bg-[#FFFFFF33] transition-colors justify-center align-center`}
              onClick={handleClearHistory}>
              <svg xmlns="http://www.w3.org/2000/svg" className='inline size-[20px]' viewBox="0 0 20 20" fill="none">
<path d="M16.875 4.375H3.125" stroke="white"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.125 8.125V13.125" stroke="white"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.875 8.125V13.125" stroke="white"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375" stroke="white"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.125 4.375V3.125C13.125 2.79348 12.9933 2.47554 12.7589 2.24112C12.5245 2.0067 12.2065 1.875 11.875 1.875H8.125C7.79348 1.875 7.47554 2.0067 7.24112 2.24112C7.0067 2.47554 6.875 2.79348 6.875 3.125V4.375" stroke="white"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              Clear History
            </button>
          </div>
        </div>
        {/* Search Bar - Only for History */}
        <div className={`w-full h-[44px] ${title === 'History' ? 'block' : 'hidden'} rounded-[50px] px-[20px] py-[12px] bg-gradient-to-r from-[#FFFFFF1A] to-[#FFFFFF0D] hover:border-[#D3B86A] hover:border-[1px] gap-[8px] flex items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" className='size-[20px]' viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.7055 13.5893C11.628 14.471 10.2508 15 8.75 15C5.29822 15 2.5 12.2018 2.5 8.75C2.5 5.29822 5.29822 2.5 8.75 2.5C12.2018 2.5 15 5.29822 15 8.75C15 10.2508 14.471 11.628 13.5893 12.7055L17.3169 16.4331C17.561 16.6771 17.561 17.0729 17.3169 17.3169C17.0729 17.561 16.6771 17.561 16.4331 17.3169L12.7055 13.5893ZM13.75 8.75C13.75 11.5114 11.5114 13.75 8.75 13.75C5.98858 13.75 3.75 11.5114 3.75 8.75C3.75 5.98858 5.98858 3.75 8.75 3.75C11.5114 3.75 13.75 5.98858 13.75 8.75Z" fill="white" />
          </svg>
          <input
            type="search"
            placeholder='Search History'
            className='border-none bg-transparent w-full h-full focus:outline-none text-white placeholder-gray-300'
          />
        </div>
      </div>
      {/* Body */}
      <div className="flex-1 px-[32px] pb-[32px] overflow-y-auto h-full">
        {title === 'History' ? <HistoryCard isClear={isClear}/> : <BookMarkCard/>}
      </div>
    </div>
  );
}

function HistoryCard({ isClear }) {
  const historyData = [
    {
      day: "Yesterday",
      history: [
        "Checking on Mr. White and seeing if he is available.",
        "Goodmorning Mr. White", 
        "Hello how are you Mr. White?"
      ]
    },
    {
      day: "Friday", 
      history: [
        "Checking on Mr. White and seeing if he is available.",
        "Goodmorning Mr. White",
        "Hello how are you Mr. White?"
      ] 
    },
    {
      day: "Thursday",
      history: [
        "Checking on on Mr. White and seeing if he is available.",
        "Goodmorning Mr. White" , "Hello how are you Mr. White?"
      ]
    }
  ];

  if (isClear) {
    return (
      <div className="w-[496px] h-[212px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
              />
            </svg>
          </div>
          <p className="font-sans text-gray-500 text-lg font-medium">
            Chat History deleted.
          </p>
          <p className="font-sans text-gray-400 text-sm mt-2">
            Your chat history has been successfully cleared
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-[496px] h-[212px] gap-[16px] flex flex-col'>
      {historyData.map((historyItem, index) => (
        <div key={index} className="mb-6">
          <p className='font-sans font-bold text-[16px]'>{historyItem.day}</p>
          <div className='h-[177px] w-full overflow-y-auto'>
            {historyItem.history.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className='h-[59px] border-b border-white py-[20px]'
              > 
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function BookMarkCard() {
  const [bookmarks, setBookmarks] = useState([
    "Checking on Mr. White and seeing if he is available.",
    "Goodmorning Mr. White",
    "Hello how are you Mr. White?"
  ]);

  // Function to handle bookmark deletion
  const handleDeleteBookmark = (indexToDelete) => {
    setBookmarks(bookmarks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className='w-full'>
      {bookmarks.map((bookmark, index) => (
        <div 
          key={index} 
          className='py-[20px] border-b border-[#FFFFFF1A] flex justify-between items-center'
        >
          <p className='text-[16px] font-normal flex-1 pr-4'>{bookmark}</p>
          <button 
            onClick={() => handleDeleteBookmark(index)}
            className='flex-shrink-0 hover:bg-[#FFFFFF1A] rounded-full p-1 transition-colors duration-200'
            aria-label="Delete bookmark"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className='size-[20px]' 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                d="M4.34907 14.7662C4.105 15.0103 4.105 15.406 4.34907 15.6501C4.59315 15.8942 4.98888 15.8942 5.23296 15.6501L9.99935 10.8837L14.7657 15.6501C15.0098 15.8942 15.4055 15.8942 15.6496 15.6501C15.8937 15.406 15.8937 15.0103 15.6496 14.7662L10.8832 9.99984L15.6496 5.23345C15.8937 4.98937 15.8937 4.59364 15.6496 4.34956C15.4055 4.10548 15.0098 4.10548 14.7657 4.34956L9.99935 9.11595L5.23296 4.34956C4.98888 4.10548 4.59315 4.10548 4.34907 4.34956C4.105 4.59364 4.105 4.98937 4.34907 5.23345L9.11547 9.99984L4.34907 14.7662Z" 
                fill="white"
              />
            </svg>
          </button>
        </div>
      ))}
      
      {/* Empty state */}
      {bookmarks.length === 0 && (
        <div className="py-8 text-center text-gray-500">
          No bookmarks yet
        </div>
      )}
    </div>
  );
}



export default Page;