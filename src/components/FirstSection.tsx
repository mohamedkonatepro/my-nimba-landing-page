import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';

const FirstSection = () => {
  return (
    <section className="bg-white py-16 px-8 md:mt-5 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left section: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-customBlue">Nettoyage</span> professionnel de fin de chantier par <span className="text-customGreen">MyNimba</span>
          </h1>
          <p className="text-base md:text-lg mt-4 text-left text-justify whitespace-pre-line">
            Entreprise de nettoyage de premier plan, dédiée à fournir des services de la plus haute qualité dans le respect des normes de sécurité et d’hygiène. <br /> 
            Nos équipes sont formées pour maintenir vos surfaces dans un état de propreté optimal en respectant les délais de prestation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-start">
            <a href="#contact" className="bg-customBlue text-white px-6 py-3 rounded-xl">
              Contactez-nous
            </a>
            <a href="#contact" className="bg-white border border-customGreen text-customGreen px-6 py-3 rounded-xl flex items-center justify-center space-x-2">
              <span>Devis gratuit</span>
              <MdArrowOutward className="text-customGreen" size={20} />
            </a>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/image home@2x.png"
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
