import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from './ImageSlider';
import Image from "next/image";

const AboutSection = () => {
  const slides = [
    { image: "/2150454483.png" },
    { image: "/Groupe 8914.png" },
  ];

  return (
    <section className="bg-lightBlue py-4 md:py-16 relative z-0" id="apropos">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
        
        {/* Partie droite : Texte (en haut sur mobile) */}
        <div className="w-full md:w-1/2 px-4 order-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-customBlue">À propos</span> de nous
          </h2>
          <p className="text-base md:text-lg mb-4">
            <strong>MyNimba</strong> est une entreprise de nettoyage de premier plan, dédiée à fournir des services de nettoyage de la plus haute qualité.
          </p>
          <p className="text-base md:text-lg mb-4">
            {"Nous renforçons la réussite de l'exécution de vos travaux de nettoyage par des équipes qualifiés et professionnelles."}
          </p>
          <p className="text-base md:text-lg mb-4">
            Nous nous engageons à vous offrir une expérience de qualité exceptionnelle, reflétant notre dévouement à l’excellence. 
          </p>
          <p className="text-base md:text-lg mb-8">
            Nous comprenons que chaque espace client est unique et nécessite une approche de nettoyage sur mesure, et c’est exactement ce que nous offrons.
            Notre objectif est de toujours surpasser vos attentes, Votre satisfaction est notre priorité et notre motivation.
          </p>

          <button className="bg-customBlue text-white px-6 py-3 rounded-xl">
            Prendre rendez-vous
          </button>
        </div>

        {/* Partie gauche : SVG superposés et Carrousel (en bas sur mobile) */}
        <div className="w-full md:w-1/2 relative z-10 order-1 px-10">
          {/* SVG green */}
          <Image
            src="/2149345564green.svg"
            alt="Green SVG"
            width={350}
            height={270}
            className="absolute top-[-20px] left-[10px] md:w-[450px] md:top-[-20px] md:left-[-5px] z-0"
          />
          {/* SVG blue */}
          <Image
            src="/2149345564blue.svg"
            alt="Blue SVG"
            width={350}
            height={270}
            className="absolute top-[20px] md:w-[450px] left-[60px] md:top-[30px] md:left-[70px] z-0"
          />
          {/* Carrousel d'images */}
          <div className="w-full md:w-[450px] relative z-20">
            <ImageSlider slides={slides} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
