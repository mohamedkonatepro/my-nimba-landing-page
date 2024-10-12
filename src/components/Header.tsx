import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [active, setActive] = useState<string>('Accueil');
  const [menuOpen, setMenuOpen] = useState(false); // Pour contrôler l'ouverture du menu sur mobile

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-black font-bold text-xl">
          <div className="logo flex items-center space-x-4">
            <Image src="/logo.svg" width={150} height={150} alt="MyNimba Logo" />
          </div>
        </Link>

        {/* Menu Hamburger pour mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (visible en mode desktop) */}
        <nav className="hidden md:flex space-x-8 border-b-2 border-gray-200">
          {['Accueil', 'A propos', 'Nos services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className={`text-black border-b-2 ${
                active === item ? 'border-customBlue text-customBlue' : 'border-none'
              } hover:border-solid hover:border-customBlue hover:text-customBlue pb-1 transition-all`}
              onClick={() => setActive(item)}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button (visible en mode desktop) */}
        <div className="hidden md:block">
          <Link
            href="#cta"
            className="bg-customBlue rounded-xl text-white px-4 py-3 hover:bg-blue-700 transition-all"
          >
            Devis gratuit
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {['Accueil', 'A propos', 'Nos services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className={`text-black ${
                  active === item ? 'text-customBlue' : ''
                } hover:text-customBlue transition-all`}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false); // Ferme le menu après la sélection
                }}
              >
                {item}
              </Link>
            ))}
            {/* Call-to-Action Button dans le menu mobile */}
            <Link
              href="#cta"
              className="bg-customBlue rounded-xl text-white px-6 py-3 hover:bg-blue-700 transition-all"
            >
              Devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
