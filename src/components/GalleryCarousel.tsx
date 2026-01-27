import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "astro:assets";

const images = Object.values(
  import.meta.glob<{ default: ImageMetadata }>("~/assets/images/gallery/*", {
    eager: true,
  }),
);

export function GalleryCarousel() {
  return (
    <Carousel className="mx-12">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <img
              src={img.default.src}
              alt={`Gallery image ${index + 1}`}
              className="object-cover"
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" text-theme_text_dark" />
      <CarouselNext className=" text-theme_text_dark" />
    </Carousel>
  );
}
