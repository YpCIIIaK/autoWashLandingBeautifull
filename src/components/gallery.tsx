import React from "react";
import { Image } from "@heroui/react";

export const Gallery = () => {
  const images = [
    {
      src: "https://img.heroui.chat/image/places?w=600&h=400&u=10",
      alt: "Car Wash Exterior"
    },
    {
      src: "https://img.heroui.chat/image/places?w=600&h=400&u=11",
      alt: "Car Detailing"
    },
    {
      src: "https://img.heroui.chat/image/places?w=600&h=400&u=12",
      alt: "Interior Cleaning"
    },
    {
      src: "https://img.heroui.chat/image/places?w=600&h=400&u=13",
      alt: "Car Polishing"
    },
    {
      src: "https://img.heroui.chat/image/places?w=600&h=400&u=14",
      alt: "Wheel Cleaning"
    },
    {
      src: "https://img.heroui.chat/image/places?w=600&h=400&u=15",
      alt: "Car Waxing"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto text-lg">
            Взгляните на результаты нашей работы. Мы гордимся каждым вымытым автомобилем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-foreground-600">
            Больше фотографий наших работ вы можете найти в наших социальных сетях.
          </p>
        </div>
      </div>
    </section>
  );
};