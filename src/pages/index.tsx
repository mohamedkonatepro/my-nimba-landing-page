import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import FreeQuoteSection from "@/components/FreeQuoteSection";
import Header from "@/components/Header";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <FirstSection />
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <ReviewsSection />
      <ContactForm />
      <FreeQuoteSection />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
