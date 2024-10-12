import Image from 'next/image';

const Product = () => {
  return (
    <div className="max-w-sm mx-auto relative mb-56">
      {/* Image du produit */}
      <div className="w-full">
        <Image
          src="/img/2150358980.png"
          alt="Nettoyage de fin de chantier"
          width={500}
          height={300}
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Bloc d'informations superposé sur l'image */}
      <div className="bg-white p-6 rounded-3xl shadow-xl absolute w-11/12 left-1/2 transform -translate-x-1/2 -translate-y-24">
        <h3 className="text-xl font-bold mb-2">Nettoyage de fin de chantier</h3>
        <p className="text-sm text-black mb-1">à partir de</p>
        <p className="text-customGreen text-2xl font-bold mb-2">1500€</p>
        <p className="text-base text-black mb-2">
          Notre équipe de fin de chantier, formée et équipée, assure un nettoyage efficace, discret et respectueux de vos locaux, tout en étant à l’écoute de vos besoins.
        </p>

        {/* Bouton d'appel à l'action */}
        <button className="bg-customBlue text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all w-full">
          Demandez un devis gratuit
        </button>
      </div>
    </div>
  );
};

export default Product;
