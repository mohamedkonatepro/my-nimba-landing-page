import React, { useState, useEffect } from 'react';
import Slider from "react-slick"; // Importation de react-slick
import "slick-carousel/slick/slick.css"; // Import des styles de slick-carousel
import "slick-carousel/slick/slick-theme.css";
import CardReview from './CardReview'; // Importation du composant CardReview

const ReviewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0); // État pour stocker la slide active
  const [isMobile, setIsMobile] = useState<boolean>(false); // Pour vérifier si on est en mode mobile

  // Fonction pour détecter si l'utilisateur est sur mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Si l'écran est inférieur à 768px
    };

    // Exécuter lors du montage et à chaque redimensionnement
    window.addEventListener('resize', handleResize);
    handleResize(); // Détecter à l'initialisation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true, // Affiche des points sous le carrousel
    infinite: true, // Boucle infinie des slides
    speed: 500, // Vitesse de transition
    slidesToShow: 3, // Nombre d'éléments visibles par slide (sur écran normal)
    slidesToScroll: 1, // Nombre d'éléments à faire défiler
    centerMode: true, // Active le mode centré
    centerPadding: "0", // Retirer le padding pour une meilleure vue des cartes
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex), // Met à jour la slide active
    responsive: [
      {
        breakpoint: 1024, // Tablettes et écrans moyens
        settings: {
          slidesToShow: 2, // Afficher 2 slides sur les tablettes
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // Mobile et petits écrans
        settings: {
          slidesToShow: 1, // Un seul élément visible sur mobile
          slidesToScroll: 1,
          arrows: false, // Supprime les flèches sur mobile
        },
      },
    ],
  };

  // Calcul de l'index central pour les écrans non mobiles
  const centerIndex = isMobile ? currentSlide : Math.floor((currentSlide + 1) % 3); // Ajuster l'index pour centrer

  return (
    <section className="py-16 px-0 md:px-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Titre de la section */}
        <h2 className="text-3xl md:text-[50px] font-bold mb-4 text-customBlue">
          <span className='text-black'>Que disent</span> nos clients ?
        </h2>

        {/* Texte descriptif */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Écoutez les témoignages de nos clients et clients satisfaits.
        </p>

        {/* Carrousel avec react-slick */}
        <div className="center w-full">
          <Slider {...settings} className="mt-10">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-full transition-transform duration-500 ease-in-out my-5 ${
                  centerIndex === index ? isMobile ? 'scale-90' : 'scale-110' : 'scale-90'
                }`}
              >
                <CardReview />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
