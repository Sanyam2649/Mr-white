'use client';
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'

const Page = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: ''
  });

  // Dummy data for quest cards
  const QuestCard = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
      description: "Absolutely amazing experience! Mr White went above and beyond to help us find the perfect companion. Our Royal Frenchel has brought so much joy to our family."
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      rating: 4,
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
      description: "Professional service and healthy, happy puppies. The entire process was smooth and Mr White was very knowledgeable about the breed."
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
      description: "Our Royal Frenchel is the sweetest dog we've ever owned. Mr White's dedication to the breed shows in the quality and temperament of his dogs."
    },
    {
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 4,
      image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
      description: "Great communication throughout the adoption process. Our puppy was well-socialized and healthy. Highly recommend Mr White!"
    }
  ];

  const handleRatingClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', {
      ...formData,
      rating
    });
    
    // Reset form
    setFormData({
      name: '',
      location: '',
      message: ''
    });
    setRating(0);
    
    // Show success message (you can replace this with a toast notification)
    alert('Thank you for your message!');
  };

  const StarRating = ({ rating, onRatingClick, hoverRating, onMouseEnter, onMouseLeave }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className="cursor-pointer transition-transform hover:scale-110"
            onClick={() => onRatingClick(index)}
            onMouseEnter={() => onMouseEnter(index + 1)}
            onMouseLeave={onMouseLeave}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="23" 
              viewBox="0 0 28 27" 
              fill={index < (hoverRating || rating) ? "#D3B86A" : "#FFFFFF1A"}
              className="transition-colors duration-200 w-6 h-6 md:w-7 md:h-7"
            >
              <path d="M27.9035 10.175C27.7783 9.78123 27.5371 9.43446 27.2114 9.18017C26.8857 8.92588 26.4908 8.77594 26.0785 8.75L18.6535 8.2375L15.9035 1.3C15.7533 0.918004 15.4919 0.58988 15.1532 0.358105C14.8144 0.12633 14.4139 0.0015786 14.0035 0V0C13.593 0.0015786 13.1925 0.12633 12.8537 0.358105C12.515 0.58988 12.2536 0.918004 12.1035 1.3L9.30346 8.275L1.92846 8.75C1.51659 8.77762 1.12249 8.92819 0.79713 9.18224C0.471771 9.43629 0.230129 9.78212 0.103463 10.175C-0.0266113 10.5739 -0.0342111 11.0026 0.0816435 11.4059C0.197498 11.8092 0.431495 12.1685 0.753463 12.4375L6.42846 17.2375L4.74096 23.875C4.62421 24.324 4.64522 24.7978 4.80127 25.2347C4.95731 25.6716 5.24117 26.0515 5.61596 26.325C5.97975 26.5861 6.41317 26.7327 6.86076 26.7461C7.30835 26.7594 7.74975 26.6389 8.12846 26.4L13.991 22.6875H14.016L20.3285 26.675C20.6523 26.8854 21.0298 26.9983 21.416 27C21.7313 26.9975 22.0418 26.9228 22.3237 26.7815C22.6056 26.6403 22.8514 26.4362 23.0421 26.1851C23.2329 25.9341 23.3635 25.6426 23.424 25.3331C23.4844 25.0236 23.4731 24.7044 23.391 24.4L21.6035 17.1375L27.2535 12.4375C27.5754 12.1685 27.8094 11.8092 27.9253 11.4059C28.0411 11.0026 28.0335 10.5739 27.9035 10.175Z" />
            </svg>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className='overflow-hidden bg-black text-[#FFFFFF] m-0'>
      <Navbar/>
      <section className="w-full mx-auto min-h-screen py-4 md:py-8 lg:py-16 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <section className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex flex-col justify-center items-center w-full max-w-[1200px] relative bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1762149363/02ae9185138029cb78308b4df49d1e2502109020_owe0an.png')] bg-cover bg-center rounded-lg gap-2 md:gap-3 lg:gap-[12px]">
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-center z-20 text-center px-4">
            <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold font-work-sans tracking-tighter text-white">
              Mr White Questbook
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium font-public-sans text-white/80 max-w-2xl">
              Stories from Mr White&apos;s Customers
            </p>
          </div>
        </section>
        
        <div className='px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-[80px] gap-8 md:gap-12 lg:gap-[64px] flex flex-col lg:flex-row w-full max-w-[1200px]'>
          {/* Left Column - Rating and Form */}
          <div className='w-full lg:max-w-[532px] gap-6 md:gap-8 lg:gap-[40px] flex flex-col'>
            {/* Rating Summary */}
            <div className='p-4 md:p-6 rounded-lg bg-[#FFFFFF1A] flex flex-col items-center gap-3'>
              <div className="flex items-center gap-2 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 28 27" fill="#D3B86A" className="w-6 h-6 md:w-7 md:h-7">
                  <path d="M27.9035 10.175C27.7783 9.78123 27.5371 9.43446 27.2114 9.18017C26.8857 8.92588 26.4908 8.77594 26.0785 8.75L18.6535 8.2375L15.9035 1.3C15.7533 0.918004 15.4919 0.58988 15.1532 0.358105C14.8144 0.12633 14.4139 0.0015786 14.0035 0V0C13.593 0.0015786 13.1925 0.12633 12.8537 0.358105C12.515 0.58988 12.2536 0.918004 12.1035 1.3L9.30346 8.275L1.92846 8.75C1.51659 8.77762 1.12249 8.92819 0.79713 9.18224C0.471771 9.43629 0.230129 9.78212 0.103463 10.175C-0.0266113 10.5739 -0.0342111 11.0026 0.0816435 11.4059C0.197498 11.8092 0.431495 12.1685 0.753463 12.4375L6.42846 17.2375L4.74096 23.875C4.62421 24.324 4.64522 24.7978 4.80127 25.2347C4.95731 25.6716 5.24117 26.0515 5.61596 26.325C5.97975 26.5861 6.41317 26.7327 6.86076 26.7461C7.30835 26.7594 7.74975 26.6389 8.12846 26.4L13.991 22.6875H14.016L20.3285 26.675C20.6523 26.8854 21.0298 26.9983 21.416 27C21.7313 26.9975 22.0418 26.9228 22.3237 26.7815C22.6056 26.6403 22.8514 26.4362 23.0421 26.1851C23.2329 25.9341 23.3635 25.6426 23.424 25.3331C23.4844 25.0236 23.4731 24.7044 23.391 24.4L21.6035 17.1375L27.2535 12.4375C27.5754 12.1685 27.8094 11.8092 27.9253 11.4059C28.0411 11.0026 28.0335 10.5739 27.9035 10.175Z" />
                </svg>
                <span className="text-xl md:text-2xl font-semibold">4.7/5</span>
              </div>
              <p className="text-sm md:text-lg text-gray-300">
                <span className="text-[#D3B86A] font-medium">170</span> ratings
              </p>
            </div>

            {/* Review Form */}
            <div className='w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 flex flex-col bg-[#FFFFFF1A] rounded-lg border border-[#FFFFFF1A]'>
              <h1 className='font-semibold text-[20px] md:text-[24px] text-center'>Write in the Questbook</h1>
              
              {/* Star Rating */}
              <div className="flex flex-col gap-2 items-center">
                <StarRating 
                  rating={rating}
                  onRatingClick={handleRatingClick}
                  hoverRating={hoverRating}
                  onMouseEnter={setHoverRating}
                  onMouseLeave={() => setHoverRating(0)}
                />
                <p className="text-xs md:text-sm text-gray-400 text-center">
                  {rating > 0 ? `You rated: ${rating} star${rating > 1 ? 's' : ''}` : 'Your rating here'}
                </p>
              </div>

              {/* Form Inputs */}
              <div className="flex flex-col gap-3 md:gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder='Name' 
                  value={formData.name}
                  onChange={handleInputChange}
                  className='bg-[#101010] p-3 rounded text-sm md:text-base w-full border border-[#FFFFFF1A] focus:border-[#D3B86A] focus:outline-none transition-colors text-white placeholder-gray-400'
                />
                <input 
                  type="text" 
                  name="location"
                  placeholder='Location' 
                  value={formData.location}
                  onChange={handleInputChange}
                  className='bg-[#101010] p-3 rounded text-sm md:text-base w-full border border-[#FFFFFF1A] focus:border-[#D3B86A] focus:outline-none transition-colors text-white placeholder-gray-400'
                />
                <textarea 
                  name="message"
                  placeholder='Your message here' 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className='bg-[#101010] p-3 rounded text-sm md:text-base w-full border border-[#FFFFFF1A] focus:border-[#D3B86A] focus:outline-none transition-colors resize-none text-white placeholder-gray-400'
                />
              </div>

              {/* Submit Button */}
              <button 
                className="whitespace-nowrap disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer transition-all duration-300 active:scale-98 px-4 py-3 flex items-center justify-center gap-2 w-full hover:bg-[#D3B86A]/80 font-medium font-work-sans text-black mt-2 md:mt-4 disabled:cursor-not-allowed text-sm md:text-base"
                onClick={handleSubmit}
                disabled={!formData.name || !formData.message || rating === 0}
              >
                <span className="text-xl inline-block">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4 md:w-5 md:h-5">
                    <path d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74 29.13 29.13 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 0 0-5.37-1 14.75 14.75 0 0 0-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0 1 76.83 480zm-2-31.8zM87.48 380z"></path>
                  </svg>
                </span>
                Leave Message
              </button>
            </div>
          </div>

          {/* Right Column - Comments Section */}
          <div className="flex-1">
            <div className="space-y-4 md:space-y-6">
              {QuestCard.map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Page

const Card = ({ data }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 28 27"
        fill={index < rating ? "#D3B86A" : "#FFFFFF1A"}
        className="transition-colors duration-200 w-4 h-4 md:w-5 md:h-5"
      >
        <path d="M27.9035 10.175C27.7783 9.78123 27.5371 9.43446 27.2114 9.18017C26.8857 8.92588 26.4908 8.77594 26.0785 8.75L18.6535 8.2375L15.9035 1.3C15.7533 0.918004 15.4919 0.58988 15.1532 0.358105C14.8144 0.12633 14.4139 0.0015786 14.0035 0V0C13.593 0.0015786 13.1925 0.12633 12.8537 0.358105C12.515 0.58988 12.2536 0.918004 12.1035 1.3L9.30346 8.275L1.92846 8.75C1.51659 8.77762 1.12249 8.92819 0.79713 9.18224C0.471771 9.43629 0.230129 9.78212 0.103463 10.175C-0.0266113 10.5739 -0.0342111 11.0026 0.0816435 11.4059C0.197498 11.8092 0.431495 12.1685 0.753463 12.4375L6.42846 17.2375L4.74096 23.875C4.62421 24.324 4.64522 24.7978 4.80127 25.2347C4.95731 25.6716 5.24117 26.0515 5.61596 26.325C5.97975 26.5861 6.41317 26.7327 6.86076 26.7461C7.30835 26.7594 7.74975 26.6389 8.12846 26.4L13.991 22.6875H14.016L20.3285 26.675C20.6523 26.8854 21.0298 26.9983 21.416 27C21.7313 26.9975 22.0418 26.9228 22.3237 26.7815C22.6056 26.6403 22.8514 26.4362 23.0421 26.1851C23.2329 25.9341 23.3635 25.6426 23.424 25.3331C23.4844 25.0236 23.4731 24.7044 23.391 24.4L21.6035 17.1375L27.2535 12.4375C27.5754 12.1685 27.8094 11.8092 27.9253 11.4059C28.0411 11.0026 28.0335 10.5739 27.9035 10.175Z" />
      </svg>
    ));
  };

  return (
    <div className='w-full rounded-lg p-4 md:p-6 gap-4 md:gap-5 flex flex-col bg-[#FFFFFF1A]'>
      <div className='flex flex-row gap-3 md:gap-4 pb-3 md:pb-4 border-b border-white/20'>
        <img 
          src={data.image} 
          alt={data.name}
          className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg object-cover flex-shrink-0' 
        />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
            <p className="text-base md:text-lg font-medium text-white">{data.name}</p>
            <div className="flex gap-1">
              {renderStars(data.rating)}
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-300">
            {data.location}
          </p>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-sm md:text-[16px] text-gray-200 leading-relaxed'>
          {data.description}
        </p>
      </div>
    </div>
  );
};