import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrow";
import Link from "next/link";

const ServicesSection = () => {
  const settings = {
    dots: true, // Affiche des points sous le carrousel
    infinite: true, // Boucle infinie des slides
    speed: 500, // Vitesse de transition
    slidesToShow: 3, // Nombre d'éléments visibles par slide
    slidesToScroll: 1, // Nombre d'éléments à faire défiler
    prevArrow: <PrevArrow />, // Flèche gauche
    nextArrow: <NextArrow />, // Flèche droite
    responsive: [
      {
        breakpoint: 768, // Mobile et petits écrans
        settings: {
          slidesToShow: 1, // Un seul élément visible sur mobile
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-8 md:py-16" id="nosservices">
      <div className="container mx-auto px-4">
        {/* Titre et bouton */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-left mb-4 md:mb-0">
            Nos <span className="text-customBlue">services</span>
          </h2>
          <Link href={"#contact"}>
            <button className="hidden md:flex bg-white border border-customBlue text-customBlue px-4 py-2 md:px-6 md:py-3 rounded-xl items-center space-x-2">
              <span>Demandez un devis comparatif</span>
              <MdArrowOutward className="text-customBlue" size={20} />
            </button>
          </Link>
        </div>

        {/* Texte sous le titre */}
        <p className="text-sm md:text-lg mb-8 text-left">
          Nous nous engageons à vous offrir une expérience de qualité exceptionnelle, reflétant notre dévouement à l’excellence. Notre objectif est de toujours surpasser vos attentes, en fournissant un service qui transcende le standard grâce à notre expertise inégalée.
        </p>

        {/* Images avec le texte */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mb-8">
          {/* Image de gauche */}
          <div className="relative w-full md:w-1/2">
            <Image src="/Groupe 8914.png" alt="Service Image" width={500} height={300} className="object-cover w-full h-auto rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-0 text-left w-full rounded-3xl px-8">
              <h3 className="text-xl md:text-3xl text-white">Service Résidentiel</h3>
              <p className="text-customGreen text-sm">à partir de</p>
              <p className="text-customGreen text-2xl md:text-3xl font-bold">1500€</p>
              <p className="text-white text-sm md:text-lg">
                Votre maison mérite l’attention qu’elle mérite. Nous offrons des services de nettoyage résidentiel personnalisés pour créer un environnement domestique propre et accueillant.
              </p>
            </div>
          </div>

          {/* Image de droite */}
          <div className="relative w-full md:w-1/2">
            <Image src="/Groupe 8913.png" alt="Service Image" width={500} height={300} className="object-cover w-full h-auto rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-0 text-left w-full rounded-3xl px-8">
              <h3 className="text-xl md:text-3xl text-white">Manutention</h3>
              <p className="text-customGreen text-sm">à partir de</p>
              <p className="text-customGreen text-2xl md:text-3xl font-bold">1500€</p>
              <p className="text-white text-sm md:text-lg">
                Votre maison mérite l’attention qu’elle mérite. Nous offrons des services de nettoyage résidentiel personnalisés pour créer un environnement domestique propre et accueillant.
              </p>
            </div>
          </div>
        </div>

        {/* Texte en dessous des images */}
        <p className="text-sm md:text-lg text-black text-left">
          Nous sommes passionnément déterminés à vous offrir le summum de la qualité et de l’efficacité, car nous savons que vous méritez le meilleur.
        </p>

        <div className="mt-16">
          <Slider {...settings}>
            <Product imageSrc={"/img/Image-2024-03-22-a-14.52.50_f1784963x.png"} title={"Nettoyage de fin de chantier"} price={1500} description={"Notre équipe de fin de chantier, formée et équipée, assure un nettoyage efficace, discret et respectueux de vos locaux, tout en étant à l’écoute de vos besoins."}/>
            <Product imageSrc={"/img/gloved-hands-young-african-american-man-with-duster-wiping-computer-screen-scaled.png"} title={"Entretient de bureau"} price={1500} description={"Un espace propre favorise un environnement sain et l’efficacité de votre équipe. Nous assurons la propreté de vos bureaux pour un lieu propice à la réussite."}/>
            <Product imageSrc={"/img/afro-woman-holding-bucket-with-cleaning-items-2048x1366.png"} title={"Nettoyage de maison résidentielle"} price={1500} description={"Votre maison mérite l’attention qu’elle mérite. Nous offrons des services de nettoyage résidentiel personnalisés pour créer un environnement domestique propre et accueillant."}/>
            <Product imageSrc={"/img/2150358980.png"} title={"Nettoyage des portes et des vitres"} price={1500} description={"Les détails font la différence. Nous nous assurons que chaque recoin, y compris les portes et les vitres, est d’une propreté impeccable, ajoutant une touche de perfection à votre espace."}/>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
