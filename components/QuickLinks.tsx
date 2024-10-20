import { BookOpen, Users, Puzzle, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const quickLinks = [
  {
    icon: BookOpen,
    title: "Active Learning",
    description: "All our classrooms are colorful and creative, with stimulating equipment and materials.",
    bgColor: "bg-primary",
    textColor: "text-white",
    iconColor: "text-secondary"
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Our teachers are well qualified and equipped with regular training, workshops.",
    bgColor: "bg-secondary",
    textColor: "text-primary",
    iconColor: "text-primary"
  },
  {
    icon: Puzzle,
    title: "Play-way Methods",
    description: "We focus on developing a child holistically using play-way methods and do not enforce learning through books only.",
    bgColor: "bg-primary",
    textColor: "text-white",
    iconColor: "text-secondary"
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "We strongly believe in the importance of security and safety for all of the children, parents and staff at PSM.",
    bgColor: "bg-secondary",
    textColor: "text-primary",
    iconColor: "text-primary"
  }
];

export default function QuickLinks() {
  return (
    <div className="bg-background bg-opacity-70 backdrop-blur-md py-12 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Card key={index} className={`${link.bgColor} hover:shadow-lg transition-shadow duration-300`}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <link.icon className={`h-12 w-12 ${link.iconColor} mb-4`} />
                  <h3 className={`text-lg font-semibold ${link.textColor} mb-2`}>{link.title}</h3>
                  <p className={`text-sm ${link.textColor} opacity-80`}>{link.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}