import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Welcome() {
  return (
    <div className="bg-primary bg-opacity-5 rounded-3xl p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-primary bg-opacity-90 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-4">Welcome to SGN Academy</h2>
            <p className="text-sm mb-4">
              At SGN Academy, located in the peaceful village of Haripur, we provide a caring and happy environment where children can learn and grow. We focus on building strong skills in reading, writing, and math, while also encouraging creativity and independence.
            </p>
            <p className="text-sm mb-4">
              Our approach helps children develop important motor skills, hand-eye coordination, and adapt to their surroundings.
            </p>
            <p className="text-sm mb-6">
              With the support of our dedicated teachers, children gain confidence and reach their full potential, setting a strong foundation for future learning.
            </p>
            <Button variant="secondary">Learn More</Button>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-48">
              <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="School building" layout="fill" objectFit="cover" className="rounded shadow-lg" />
            </div>
            <div className="relative w-full h-48">
              <Image src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Students in classroom" layout="fill" objectFit="cover" className="rounded shadow-lg" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-secondary bg-opacity-90 backdrop-blur-sm">
              <CardContent className="text-center p-4">
                <h3 className="text-3xl font-bold mb-2">2k+</h3>
                <p className="text-sm">Students</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary bg-opacity-90 backdrop-blur-sm">
              <CardContent className="text-center p-4">
                <h3 className="text-3xl font-bold mb-2">3.8</h3>
                <p className="text-sm">Average CGPA</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary bg-opacity-90 backdrop-blur-sm">
              <CardContent className="text-center p-4">
                <h3 className="text-3xl font-bold mb-2">95%</h3>
                <p className="text-sm">Placement Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}