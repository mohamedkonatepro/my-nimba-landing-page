import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const FreeQuoteSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center relative">
        {/* Image centrée */}
        <div className="relative inline-block">
          {/* Affichage de l'image différente pour mobile et desktop */}
          <div className="block md:hidden mx-2">
            <Image
              src="/img/Groupe 8892@2x.png"
              alt="Image de devis gratuit mobile"
              width={1000}
              height={1000}
              className="mx-auto"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/img/Groupe 8921@2x.png"
              alt="Image de devis gratuit desktop"
              width={1000}
              height={1000}
              className="mx-auto"
            />
          </div>

          {/* SVG superposé et centré, conditionnel pour mobile et desktop */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="block md:hidden mx-5">
              <Image
                src="/img/Groupe 8893.svg"
                alt="Superposé SVG mobile"
                width={700}
                height={700}
                className="mx-auto"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/img/Groupe 8920.svg"
                alt="Superposé SVG desktop"
                width={700}
                height={700}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Contenu centré dans le SVG */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center mx-12">
          <h2 className="text-4xl md:text-2xl font-bold text-black">
            Demandez un devis gratuit maintenant !
          </h2>
          <p className="text-base text-gray-600 mt-4 max-w-lg mx-auto">
            Remplissez un devis pour chiffrer votre projet et connaître le prix de nos prestations de nettoyage.
          </p>

          <Link href={"#contact"}>
            <button className="mt-8 bg-customBlue text-white px-16 md:px-6 py-3 rounded-xl hover:bg-blue-700 transition-all flex items-center">
              <span className="mr-2">Devis comparatif</span>
              <MdArrowOutward className="text-white" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreeQuoteSection;
