"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const images = [
  {
    src: "/assets/students_flag-min.jpg",
    alt: "Students with flag",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Teachers",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-primary text-white shadow-lg">
      <div className="flex">
        <div className="w-full md:w-1/2">
          <AspectRatio ratio={16 / 9}>
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="absolute bottom-0 left-0 bg-primary bg-opacity-70 p-2 text-white">
            {images[currentSlide].alt}
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <AspectRatio ratio={16 / 9}>
            <img
              src={images[(currentSlide + 1) % images.length].src}
              alt={images[(currentSlide + 1) % images.length].alt}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <div className="absolute bottom-0 right-0 bg-primary bg-opacity-70 p-2 text-white">
            {images[(currentSlide + 1) % images.length].alt}
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}