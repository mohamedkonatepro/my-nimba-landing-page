import React from 'react';

const TrustSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[700px] md:h-[600px] text-white" 
      style={{ backgroundImage: "url('/img/Groupe 89152x.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center text-center pt-8 md:pt-16">
        <h2 className="text-3xl md:text-[50px] font-bold mb-4">
          Faites confiance à une équipe dynamique
        </h2>
        <p className="text-base md:text-lg max-w-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
