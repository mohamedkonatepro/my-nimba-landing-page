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
          Nous accompagnons nos clients avec une gamme variés de <strong>services allant du</strong> nettoyage de fin de chantier au <strong>nettoyage</strong> régulier <strong>de leurs propriétés</strong>. Notre équipe de <strong>professionnels</strong> hautement qualifiés est engagée à <strong>maintenir les normes</strong> les plus élevées de propreté et d’hygiène.
        </p>

        {/* Images avec le texte */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mb-8">
          {/* Image de gauche */}
          <div className="relative w-full md:w-1/2">
            <Image src="/img/nettoyage-de-fin-de-chantier-@2x.png" alt="Service Image" width={500} height={300} className="object-cover w-full h-auto rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-transparent via-black to-black text-left w-full rounded-b-3xl px-8">
              <h3 className="text-xl md:text-3xl text-white mb-2">Nettoyage de fin de chantier</h3>
              <p className="text-customGreen text-lg md:text-2xl font-bold mb-2">Sur devis</p>
              <p className="text-white text-sm md:text-lg">
                Livrez vos chantiers avec un nettoyage garantie par des équipes de proximités qui ont le goût du travail bien fait dans les délais.
              </p>
            </div>
          </div>

          {/* Image de droite */}
          <div className="relative w-full md:w-1/2">
            <Image src="/img/image0022x.png" alt="Service Image" width={500} height={300} className="object-cover w-full h-auto rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-transparent via-black to-black text-left w-full rounded-b-3xl px-8">
              <h3 className="text-xl md:text-3xl text-white mb-2">Manutention</h3>
              <p className="text-customGreen text-lg md:text-2xl font-bold mb-2">Sur devis</p>
              <p className="text-white text-sm md:text-lg">
                {"Débarrassassent au fil de l'eau des débris sur les lieux du chantier par des rotations entre les horaires de travaux."}
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
            <Product imageSrc={"/img/image003.png"} title={"Nettoyage de bureaux"} description={"Conservez vos lieux de travail propres avec un nettoyage des bureaux, mobilier et des espaces de circulation entre les horaires de travail."}/>
            <Product imageSrc={"/img/image006.png"} title={"Nettoyage événementiel"} description={"Garantissez la réussite de vos évènements par la préservation des surfaces communes avant, pendant et après l’évènement."}/>
            <Product imageSrc={"/img/image004.png"} title={"Nettoyage de propriétés privées"} description={"Nous réalisons le nettoyage régulier ou saisonnier de maisons et appartements, en fin de bail ou avant état des lieux."}/>
            <Product imageSrc={"/img/image005.png"} title={"Nettoyage de vitres"} description={"Préservez vos biens présentables par le lavage de vitrerie, surfaces vitrées, baies vitrées, fenêtres en hauteur, verrières ou véranda."}/>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
