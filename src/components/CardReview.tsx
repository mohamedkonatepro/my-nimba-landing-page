import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import QuoteBubble from './QuoteBubble';

const CardReview = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null); // Initialisez avec `null` pour éviter l'erreur

  useEffect(() => {
    // Choisir aléatoirement entre les deux images
    const images = ['/img/Groupe 8917.svg', '/img/Groupe 8916.svg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageSrc(randomImage);
  }, []);

  if (!imageSrc) {
    return null; // Ne pas afficher l'image tant que le `src` n'est pas défini
  }

  return (
    <div className="relative w-[23rem] max-w-lg mx-auto pt-10">
      {/* Image de fond */}
      <Image
        src={imageSrc}
        alt="Image de fond Groupe 8917"
        layout="responsive"
        width={300}
        height={100}
        priority={true}
        className="relative"
      />

      {/* QuoteBubble superposé, placé en haut */}
      <div className="absolute top-0 left-[5rem] transform -translate-x-1/2">
        <QuoteBubble />
      </div>

      {/* Partie basse avec le texte, superposée sur l'image */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-left bg-white bg-opacity-0">
        <p className="text-black font-bold text-lg mb-1">Felix Jimoh</p>

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
        <p className="text-gray-600 text-sm">
          {"Depuis que nous avons fait appel à cette entreprise pour l'entretien de nos bureaux, l'environnement de travail est nettement plus agréable. Leur équipe est toujours ponctuelle, discrète, et le travail est irréprochable."}
        </p>
      </div>
    </div>
  );
};

export default CardReview;
