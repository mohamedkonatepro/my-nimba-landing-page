import React from 'react';
import Image from 'next/image';
import { BsSendFill } from 'react-icons/bs';
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";


const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 md:py-5 md:px-44 text-sm text-white bg-cover bg-center" style={{ backgroundImage: "url('/img/Groupe 8922.svg')" }}>
      {/* Contenu du footer */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Partie 1 : Logo et description */}
        <div className="mb-8 md:mb-0">
          <Image
            src="/img/Logo Blanc V.png"
            alt="Logo de l'entreprise"
            width={110}
            height={110}
          />
          <p className="mt-4 max-w-xs">
            Entreprise de nettoyage de premier plan, dédiée à fournir des services de nettoyage de la plus haute qualité.
          </p>
        </div>

        {/* Partie 2 : Liens rapides */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li><Link href="" className="hover:underline">Accueil</Link></li>
            <li><Link href="#nosservices" className="hover:underline">Nos services</Link></li>
            <li><Link href="#apropos" className="hover:underline">À propos</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Partie 3 : Infos contact */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Infos contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <BsSendFill size={20} className="mr-2" /> info@mynimba.com
            </li>
            <li className="flex items-center">
              <FaPhone size={20} className="mr-2" /> 0033 0619577464 / 0033 0749492178
            </li>
            <li className="flex items-center">
              <MdLocationOn size={25} className="mr-2" /> 11, Odo-Olowu, Ijeshatedo B/Stop, Surulere
            </li>
          </ul>
        </div>

        {/* Partie 4 : Réseaux sociaux et newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Nos réseaux sociaux</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="#" className="hover:underline"><FaFacebookF /></Link>
            <Link href="#" className="hover:underline"><FaXTwitter /></Link>
            <Link href="#" className="hover:underline"><FaInstagram /></Link>
            <Link href="#" className="hover:underline"><FaLinkedinIn /></Link>

          </div>
          <div className="relative mb-4">
            <HiOutlineMail size={20} className="absolute left-3 top-2 text-white" />
            <input
              type="text"
              placeholder="Votre email"
              className="w-full px-10 py-2 bg-black bg-opacity-20 rounded-lg placeholder-white text-white"
            />
          </div>
          <button className="w-full bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
            Souscrire à la newsletter
          </button>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-white mt-8 pt-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white mb-4 md:mb-0">©2024. MYNIMBA. Tous droits réservés.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-white hover:underline">Politique de confidentialité</a>
            <a href="#" className="text-sm text-white hover:underline">Conditions générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
