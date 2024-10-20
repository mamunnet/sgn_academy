"use client";

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryImage {
  src: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'School Building'
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    title: 'Students Picnic'
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Graduation Ceremony'
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80',
    title: 'Science Fair'
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Sports Day'
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Cultural Program'
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="my-12 bg-primary bg-opacity-5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="bg-primary text-secondary px-6 py-2 rounded-full inline-block">
          Photo Gallery
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold text-center px-4">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-[80vw] bg-primary">
          <div className="relative">
            <img
              src={selectedImage?.src}
              alt={selectedImage?.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold text-center bg-black bg-opacity-50 py-2 px-4 rounded">
              {selectedImage?.title}
            </h3>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}