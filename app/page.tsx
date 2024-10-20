import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import Welcome from '@/components/Welcome';
import Alumni from '@/components/Alumni';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Programs from '@/components/Programs';

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <QuickLinks />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <Welcome />
        <Alumni />
        <Events />
        <Programs />
        <Gallery />
      </div>
    </div>
  );
}