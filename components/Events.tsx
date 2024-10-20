"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Calendar, Users, Trophy } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const events: Event[] = [
  {
    title: "ATC Annual Training Camp",
    date: "August 15-20, 2023",
    description: "Students participate in various team-building and leadership activities.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: Calendar
  },
  {
    title: "Felicitation of Huffaz and their Parents",
    date: "September 5, 2023",
    description: "Celebrating the achievement of our Huffaz students and their supportive parents.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: Users
  },
  {
    title: "Graduation - Math and Science Event",
    date: "October 10, 2023",
    description: "Showcasing student projects and achievements in mathematics and science.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    icon: Trophy
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="my-12 bg-primary bg-opacity-5 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        <span className="bg-primary text-secondary px-6 py-2 rounded-full inline-block">
          SGN Academy Events
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedEvent(event)}>
            <CardContent className="p-0">
              <div className="relative">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t" />
                <div className="absolute top-0 left-0 bg-primary text-secondary p-2 rounded-tr rounded-bl">
                  <event.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-primary">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{event.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-[425px] bg-primary text-white">
          <DialogHeader>
            <DialogTitle className="text-secondary">{selectedEvent?.title}</DialogTitle>
            <DialogDescription className="text-gray-300">{selectedEvent?.date}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img src={selectedEvent?.image} alt={selectedEvent?.title} className="w-full h-48 object-cover rounded mb-4" />
            <p className="text-gray-200">{selectedEvent?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}