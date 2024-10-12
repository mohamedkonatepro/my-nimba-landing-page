import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';

const FirstSection = () => {
  return (
    <section className="bg-white py-16 px-8 md:mt-5 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Partie gauche : Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-customBlue">Entreprise</span> spécialisée dans le <span className="text-customGreen">nettoyage</span>
          </h1>
          <p className="text-base md:text-lg mt-4">
            Entreprise de nettoyage de premier plan, dédiée à fournir des services de nettoyage de la plus haute qualité. Forte de plusieurs expériences dans le domaine, notre équipe de professionnels...
          </p>

          {/* Boutons */}
          <div className="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-start">
            <button className="bg-customBlue text-white px-6 py-3 rounded-xl">
              Contactez-nous
            </button>
            <button className="bg-white border border-customGreen text-customGreen px-6 py-3 rounded-xl flex items-center justify-center space-x-2">
              <span>Devis gratuit</span>
              <MdArrowOutward className="text-customGreen" size={20} />
            </button>
          </div>
        </div>

        {/* Partie droite : Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/image home.png"
            alt="Image d'accueil"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
