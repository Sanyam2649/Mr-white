// components/card.jsx
import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, image, features = [] }) => {
  return (
    <div className="bg-black rounded-sm overflow-hidden shadow-lg w-[432px] max-[450px]:w-full max-[1024px]:h-fit h-[575px]">
      <div className="w-full h-[240px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full p-6 gap-10px">
        <h3 className="text-[20px] font-semibold mb-2">{title}</h3>
        <div className="flex flex-col gap-4">
          {description && (
            <p className="font-light font-public-sans">{description}</p>
          )}
          {features.map((feature, index) => (
            <p key={index} className="font-light font-public-sans">{feature}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;