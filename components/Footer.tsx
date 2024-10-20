import Link from 'next/link';
import { School } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/assets/logo.png" alt="SGN Academy Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-secondary">SGN Academy</span>
            </div>
            <p className="text-sm">Shaping futures, one student at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-secondary">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-secondary">Admissions</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h3>
            <p className="text-sm">Haripur, Rajarampur, Lalgola</p>
            <p className="text-sm">Murshidabad, West Bengal, India</p>
            <p className="text-sm">Phone: +91-8017528621</p>
            <p className="text-sm">Email: sgnacademyofficial@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary">
          <h3 className="text-lg font-semibold mb-4 text-secondary">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14561.533089155518!2d88.23833037715817!3d24.420069099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb7f4aaaaaaaab%3A0x7f4e9e4e9e9e9e9e!2sLalgola%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2023 SGN Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}