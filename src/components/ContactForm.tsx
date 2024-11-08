import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Select from 'react-select';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoTime } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { BsSendFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';

// Définition du schéma de validation Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Le nom est requis' }),
  phone: z.string().min(10, { message: 'Le téléphone est requis et doit contenir au moins 10 caractères' }),
  email: z.string().email({ message: 'Email invalide' }),
  subject: z.string().min(1, { message: 'Sélectionnez un sujet' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const subjectOptions = [
  { value: 'demande-devis', label: 'Demande de devis' },
  { value: 'service-apres-vente', label: 'Service après-vente' },
  { value: 'autre', label: 'Autre' },
];

const ContactForm: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  // État pour gérer le rendu côté client uniquement pour react-select
  const [isClient, setIsClient] = useState(false);

  // Utilisation de useEffect pour activer le rendu côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const createCampaign = async (data: ContactFormValues) => {
    const formattedMessage = data.message.replace(/\n/g, '<br>'); // Replace line breaks with <br> tags

    const campaignData = {
      subject: data.subject,
      sender: { name: "MyNimba", email: process.env.NEXT_PUBLIC_BREVO_FROM_EMAIL },
      htmlContent: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Sujet:</strong> ${data.subject}</p>
        <p><strong>Message:</strong><br> ${formattedMessage}</p>
      `,
      to: [{ email: process.env.NEXT_PUBLIC_BREVO_TO_EMAIL }],
    };

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaignData),
      });
      
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const result = await response.json();
      alert('Campaign created successfully!');
      console.log(result);
    } catch (error) {
      console.error('Error creating campaign:', error);
      alert('Failed to create campaign.');
    }
  };

  const onSubmit = (data: ContactFormValues) => {
    createCampaign(data);
  };

  return (
    <section className="relative py-16 px-8 bg-lightBlue" id="contact">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start">

        {/* Image en fond */}
        <div className="relative w-full h-[600px] md:h-[550px] mb-52 md:mb-0">
          <Image
            src="/img/Groupe 8919@2x.png"
            alt="Contact background"
            layout="fill"
            className="rounded-lg"
          />
          {/* Formulaire de contact */}
          <div className="absolute inset-0 p-8 flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white mx-auto w-full">
              {/* Champ Nom et Téléphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">Nom</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                    placeholder="Votre nom"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                    placeholder="Votre téléphone"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Champ Adresse Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Adresse Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                  placeholder="Votre adresse email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Champ Sélection du sujet */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">Quel est le sujet de votre demande ?</label>
                {isClient && (
                  <Select
                    options={subjectOptions}
                    onChange={(option) => setValue('subject', option?.label || '')}
                    placeholder="Sélectionnez un sujet"
                    className="w-full"
                  />
                )}
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
              </div>

              {/* Champ Message */}
              <div className="md:mb-4 mb-2">
                <label htmlFor="message" className="block text-gray-700">Informations Complémentaires</label>
                <textarea
                  id="message"
                  {...register('message')}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                  rows={4}
                  placeholder="Entrez vos informations complémentaires ici"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              {/* Bouton Envoyer */}
              <button type="submit" className="md:w-1/3 w-full bg-customBlue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all mb-10 md:mb-0">
                Envoyer un message
              </button>
            </form>
          </div>
        </div>

        <div className="md:mt-8 text-left ml-5 md:ml-10 mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Vous pouvez nous contacter via nos informations</h3>
          <p className="text-gray-700 text-base mt-2">
            Veuillez remplir ce formulaire avec vos coordonnées concernant vos demandes et nous répondrons à votre demande dans les plus brefs délais.
          </p>

          {/* Informations supplémentaires */}
          <div className="mt-8 text-left space-y-6">
            {/* Section Envoyer un email */}
            <div className="flex items-center">
              <BsSendFill className="text-customBlue text-2xl mr-2" />
              <div className='ml-2'>
                <p className="font-bold">Envoyer un email</p>
                <p>contact@mynimba.com</p>
              </div>
            </div>

            {/* Section Appelez-nous */}
            <div className="flex items-center">
              <FaPhone className="text-customBlue text-2xl mr-2" />
              <div className='ml-2'>
                <p className="font-bold">Appelez-nous</p>
                <p>+33 7 58 80 80 80 (France) - +224 629449847 (Guinée)</p>
              </div>
            </div>

            {/* Section Adresse du bureau */}
            <div className="flex items-center">
              <MdLocationOn className="text-customBlue text-2xl mr-2" />
              <div className='ml-2'>
                <p className="font-bold">Adresse du bureau</p>
                <p>1 – 3, boulevard Charles de Gaulle 92707 Colombes Cedex</p>
              </div>
            </div>

            {/* Section Horaires de travail */}
            <div className="flex items-center">
              <IoTime className="text-customBlue text-2xl mr-2" />
              <div className='ml-2'>
                <p className="font-bold">Horaires de travail</p>
                <p>Lun - Dim: 10am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image en bas à droite en position fixe */}
      <div className="absolute bottom-0 right-0 w-64 h-auto">
        <Image
          src="/img/femme-afro-tenant-seau-articles-nettoyage@2x.png"
          alt="Femme tenant des articles de nettoyage"
          layout="intrinsic"
          width={300}
          height={400}
        />
      </div>
    </section>
  );
};

export default ContactForm;
