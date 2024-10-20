"use client";

import { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const alumniData = [
  {
    name: "Mamun Saik",
    image: "https://i.pravatar.cc/150?img=1",
    designation: "Software Engineer at Google",
    details: "Mamun graduated from SGN Academy in 2010. He went on to pursue Computer Science at MIT and now works as a Senior Software Engineer at Google, specializing in AI and Machine Learning."
  },
  {
    name: "Hasan Al Mamun",
    image: "https://i.pravatar.cc/150?img=2",
    designation: "Neurosurgeon at Johns Hopkins Hospital",
    details: "Dr. Hasan, a 2008 graduate of SGN Academy, completed his medical degree from Harvard Medical School. He's now a renowned neurosurgeon, contributing to groundbreaking research in brain tumor treatments."
  },
  {
    name: "Sagira Sultana",
    image: "https://i.pravatar.cc/150?img=3",
    designation: "Environmental Scientist at UN",
    details: "Sagira, class of 2012, pursued Environmental Science at Stanford University. She now works with the United Nations, leading initiatives on climate change and sustainable development."
  },
  {
    name: "Ilias Shaikh",
    image: "https://i.pravatar.cc/150?img=4",
    designation: "Aerospace Engineer at NASA",
    details: "Ilias graduated from SGN Academy in 2009. He studied Aerospace Engineering at Caltech and now works at NASA, contributing to the Mars exploration program."
  },
  {
    name: "Oliur Rahaman",
    image: "https://i.pravatar.cc/150?img=5",
    designation: "Bestselling Author and Motivational Speaker",
    details: "Oliur, a 2011 alumnus, pursued Literature at Oxford University. He's now a bestselling author of inspirational books and a globally recognized motivational speaker."
  }
];

export default function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState<typeof alumniData[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="bg-primary bg-opacity-5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="bg-primary text-secondary px-6 py-2 rounded-full inline-block">
          Our Alumni
        </span>
      </h2>
      <div className="relative">
        <button onClick={() => scroll(-200)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md z-10">
          <ChevronLeft className="h-6 w-6 text-primary" />
        </button>
        <div ref={scrollRef} className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar">
          {alumniData.map((alumni, index) => (
            <div key={index} className="flex-shrink-0 w-48 text-center cursor-pointer transition-transform hover:scale-105" onClick={() => setSelectedAlumni(alumni)}>
              <div className="bg-[#F5F5DC] rounded-2xl p-4 shadow-md">
                <Avatar className="w-24 h-24 mx-auto mb-2 border-4 border-secondary">
                  <AvatarImage src={alumni.image} alt={alumni.name} />
                  <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-primary">{alumni.name}</h3>
                <p className="text-sm text-gray-600">{alumni.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(200)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full p-2 shadow-md z-10">
          <ChevronRight className="h-6 w-6 text-primary" />
        </button>
      </div>

      <Dialog open={!!selectedAlumni} onOpenChange={() => setSelectedAlumni(null)}>
        <DialogContent className="sm:max-w-[425px] bg-primary text-white">
          <DialogHeader>
            <DialogTitle className="text-secondary">{selectedAlumni?.name}</DialogTitle>
            <DialogDescription className="text-gray-300">{selectedAlumni?.designation}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-secondary">
              <AvatarImage src={selectedAlumni?.image} alt={selectedAlumni?.name} />
              <AvatarFallback>{selectedAlumni?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <p className="text-gray-200">{selectedAlumni?.details}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}