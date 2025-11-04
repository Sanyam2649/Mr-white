import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react'

const Page = () => {
    
    const CardData = [
        {
            title: "Royal Frenchel Day",
            date: "August 31st 2019",
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland 'Windy' the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing 'Royal Family' and share with the local community about this great French Bulldog hybrid. It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background! Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy."
        },
        {
            title: "Royal Frenchel Day",
            date: "August 31st 2019",
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland 'Windy' the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing 'Royal Family' and share with the local community about this great French Bulldog hybrid. It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background! Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy."
        },
        {
            title: "Royal Frenchel Day",
            date: "August 31st 2019",
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland 'Windy' the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing 'Royal Family' and share with the local community about this great French Bulldog hybrid. It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background! Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy."
        },
        {
            title: "Royal Frenchel Day",
            date: "August 31st 2019",
            image: "https://res.cloudinary.com/dhahajyth/image/upload/v1762149362/34029129a1a7c576591443f3b1463a5bddb89a23_e4n8ng.jpg",
            description: "Royal Frenchel Day is a fun celebration those who have Royal Frenchel Bulldogs gather – The Royal Family Annual Reunion! Anahata Graceland 'Windy' the creator of the breed, the staff of Royal Frenchel Bulldogs and volunteers puts on the event to honor the growing 'Royal Family' and share with the local community about this great French Bulldog hybrid. It is a fun day of showing puppies, dogs and meeting those who have Royal Frenchels of all ages. There are prizes, gifts, photo shoots and a parade along with the Royal Family Jazz Band playing joyfully in the background! Over the years the Royal Jazz Band has won local acclaim! This is a group of entertainers who have Royal Frenchels and who enjoy sharing the day by playing great music for all to enjoy."
        }
    ]

    return (
        <div className='overflow-hidden bg-black text-[#FFFFFF] m-0'>
            <Navbar />
            <section className="w-full mx-auto min-h-screen py-4 md:py-8 lg:py-16 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
                <section className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] flex flex-col justify-center items-center w-full max-w-[1200px] relative bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1762149429/2e92d30b6827ec8a7e16b22685bdfbac51222714_fj5cxm.jpg')] bg-cover bg-center rounded-lg gap-2 md:gap-3 lg:gap-[12px]">
                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                    <div className="flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-center z-20 text-center px-4">
                        <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold font-work-sans tracking-tighter text-white">
                            Mr White Events
                        </h2>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium font-public-sans text-white/80 max-w-2xl">
                            A list of events hosted by Mr White
                        </p>
                    </div>
                </section>
                <div className='gap-8 md:gap-12 lg:gap-[80px] px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-[80px] flex flex-col max-w-[1200px] w-full'>
                    <p className='text-[24px] md:text-[28px] lg:text-[32px] font-semibold'>Mr White upcoming events</p>
                    
                    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
                        {CardData.map((card, index) => (
                            <Card key={index} cardData={card} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page;

const Card = ({ cardData }) => {
    return (
        <div className='w-full flex flex-col sm:flex-row gap-4 md:gap-6 bg-[#FFFFFF1A] rounded-lg p-4 md:p-6 lg:p-8'>
            <img 
                src={cardData.image} 
                alt={cardData.title}
                className='w-full sm:w-[200px] md:w-[240px] lg:w-[258px] h-[200px] sm:h-[200px] md:h-[240px] lg:h-[258px] rounded-lg object-cover flex-shrink-0'
            />
            <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 flex-1'>
                <div>
                    <h3 className='font-semibold text-[20px] md:text-[24px] lg:text-[32px] leading-tight'>{cardData.title}</h3>
                    <p className='text-[14px] md:text-[16px] lg:text-lg text-gray-300'>{cardData.date}</p>
                </div>
                <p className='text-[14px] md:text-[16px] leading-relaxed text-gray-200'>
                    {cardData.description}
                </p>
            </div>
        </div>
    )
}