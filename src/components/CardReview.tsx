import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import QuoteBubble from './QuoteBubble';

type CardReviewProps = {
  name: string;
  reviewText: string;
};

const CardReview: React.FC<CardReviewProps> = ({ name, reviewText }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const images = ['/img/Groupe 8917.svg', '/img/Groupe 8916.svg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
  }, []);

  if (!imageSrc) {
    return null;
  }

  return (
    <div className="relative w-[23rem] max-w-lg mx-auto pt-10">
      {/* Image de fond */}
      <Image
        src={imageSrc}
        alt="Image de fond"
        layout="responsive"
        width={300}
        height={100}
        priority={true}
        className="relative"
      />

      {/* QuoteBubble superposé */}
      <div className="absolute top-0 left-[5rem] transform -translate-x-1/2">
        <QuoteBubble />
      </div>

      {/* Partie basse avec le texte */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-left bg-white bg-opacity-0">
        <p className="text-black font-bold text-lg mb-1">{name}</p>

        {/* Note avec étoiles */}
        <div className="flex items-center justify-start mb-2">
          <span className="text-black font-bold text-sm mr-2">4.9</span>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
        </div>

        {/* Texte descriptif */}
        <p className="text-gray-600 text-sm text-left text-justify whitespace-pre-line">{reviewText}</p>
      </div>
    </div>
  );
};

export default CardReview;
