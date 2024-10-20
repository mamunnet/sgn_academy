"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Users, GraduationCap, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Program {
  title: string;
  icon: React.ElementType;
  color: string;
  textColor: string;
  iconColor: string;
  details: string;
}

const programsData: Program[] = [
  {
    title: "Achievements",
    icon: Award,
    color: "bg-primary",
    textColor: "text-white",
    iconColor: "text-secondary",
    details: "Our students have achieved numerous accolades in academic and extracurricular activities, including national and international competitions."
  },
  {
    title: "Programmes for Parents",
    icon: Users,
    color: "bg-secondary",
    textColor: "text-primary",
    iconColor: "text-primary",
    details: "We offer various programs for parents to engage in their child's education, including workshops, seminars, and parent-teacher meetings."
  },
  {
    title: "Programme for Teachers",
    icon: GraduationCap,
    color: "bg-primary",
    textColor: "text-white",
    iconColor: "text-secondary",
    details: "Our teacher development programs focus on enhancing pedagogical skills, subject knowledge, and the latest educational technologies."
  },
  {
    title: "Hifz programme",
    icon: Book,
    color: "bg-secondary",
    textColor: "text-primary",
    iconColor: "text-primary",
    details: "Our Hifz program is designed for students who wish to memorize the Holy Quran, combining Islamic studies with regular academic curriculum."
  }
];

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  return (
    <div className="bg-primary bg-opacity-5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-primary text-secondary px-8 py-3 rounded-full inline-block shadow-md">
          Our Programs
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programsData.map((program, index) => (
          <Card 
            key={index}
            className={cn(
              "cursor-pointer transition-all duration-300",
              program.color,
              activeProgram === index ? "ring-2 ring-secondary" : "",
              "transform hover:scale-105"
            )}
            onClick={() => setActiveProgram(activeProgram === index ? null : index)}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <program.icon className={cn("h-12 w-12 mb-4", program.iconColor)} />
                <h3 className={cn("text-lg font-semibold", program.textColor)}>{program.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {activeProgram !== null && (
        <div className={cn(
          "mt-6 p-6 rounded-lg transition-all duration-300",
          programsData[activeProgram].color,
          programsData[activeProgram].textColor
        )}>
          <p className="text-sm">
            {programsData[activeProgram].details}
          </p>
        </div>
      )}
    </div>
  );
}