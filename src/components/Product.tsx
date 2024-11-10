import Image from 'next/image';

type ProductProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const Product: React.FC<ProductProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm mx-auto relative mb-72">
      {/* Product Image */}
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Overlay information block */}
      <div className="bg-white p-6 rounded-3xl shadow-xl absolute w-11/12 left-1/2 transform -translate-x-1/2 -translate-y-24">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-customGreen text-lg font-bold mb-2">Sur devis</p>
        <p className="text-base text-black mb-2 text-left text-justify whitespace-pre-line">
          {description}
        </p>

        {/* Call to action link */}
        <a href="#contact" className="bg-customBlue text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all w-full block text-center">
          Demandez un devis gratuit
        </a>
      </div>
    </div>
  );
};

export default Product;
