import Image from 'next/image';

type ProductProps = {
  imageSrc: string;
  title: string;
  price: number;
  description: string;
};

const Product: React.FC<ProductProps> = ({ imageSrc, title, price, description }) => {
  return (
    <div className="max-w-sm mx-auto relative mb-72">
      {/* Image du produit */}
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Bloc d'informations superposé sur l'image */}
      <div className="bg-white p-6 rounded-3xl shadow-xl absolute w-11/12 left-1/2 transform -translate-x-1/2 -translate-y-24">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-black mb-1">à partir de</p>
        <p className="text-customGreen text-2xl font-bold mb-2">{price}€</p>
        <p className="text-base text-black mb-2">
          {description}
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
