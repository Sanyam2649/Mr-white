// components/logo.jsx
import Image from 'next/image';
import React from 'react';

const Logo = ({ width = 42, height = 42 }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src="https://res.cloudinary.com/dhahajyth/image/upload/v1761890482/Group_1_cebpgz.png"
        alt="Mr. White Logo"
        className="object-cover"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;