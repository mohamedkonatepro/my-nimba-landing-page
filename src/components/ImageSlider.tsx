import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// TypeScript interface for the slide data
interface Slide {
  image: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  return (
    <Carousel infiniteLoop showArrows={false} showStatus={false}>
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide.image}
          alt={`slide-${index}`}
          width={350}
          height={270} // Adjust height as needed
        />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
