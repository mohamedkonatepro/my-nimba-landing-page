import React from 'react';
import Image from 'next/image';

const QuoteBubble = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Image
        src="/img/Rectangle 2299.svg"
        alt="Rectangle 2299"
        layout="responsive"
        width={500}
        height={500}
        className="relative z-0"
      />

      <div className="absolute inset-0 flex justify-center items-center p-5">
        <Image
          src="/img/Trace 690.svg"
          alt="Trace 690"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default QuoteBubble;
