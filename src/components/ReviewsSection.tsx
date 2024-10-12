import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardReview from './CardReview';

const ReviewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const centerIndex = isMobile ? currentSlide : Math.floor((currentSlide + 1) % 3);

  const reviews = [
    {
      name: 'Sophie Darelle',
      reviewText:
        "Le service de nettoyage de fin de chantier a été impeccable. L'équipe a été très professionnelle, efficace, et discrète. Nos locaux étaient parfaitement propres et prêts à l'usage. Je recommande vivement leurs services !",
    },
    {
      name: 'Felix Jimoh',
      reviewText:
        "Depuis que nous avons fait appel à cette entreprise pour l'entretien de nos bureaux, l'environnement de travail est nettement plus agréable. Leur équipe est toujours ponctuelle, discrète, et le travail est irréprochable.",
    },
    {
      name: 'Thomas Matt',
      reviewText:
        "Un excellent service de nettoyage résidentiel ! Ils ont su s'adapter à nos besoins spécifiques et ont laissé notre maison impeccable. Je suis très satisfait et je les recommande sans hésitation.",
    },
  ];

  return (
    <section className="py-16 px-0 md:px-8 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-[50px] font-bold mb-4 text-customBlue">
          <span className="text-black">Que disent</span> nos clients ?
        </h2>

        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Écoutez les témoignages de nos clients et clients satisfaits.
        </p>

        <div className="center w-full">
          <Slider {...settings} className="mt-10">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full transition-transform duration-500 ease-in-out my-5 ${
                  centerIndex === index ? isMobile ? 'scale-90' : 'scale-110' : 'scale-90'
                }`}
              >
                <CardReview name={review.name} reviewText={review.reviewText} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
