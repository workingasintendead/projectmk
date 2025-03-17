import Hero from '@/components/Hero';
import Offerings from '@/components/Offerings';
import Carousel from '@/components/Carousel';
import C2A from '@/components/C2A';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero />
      <Offerings />
      <Carousel />
      <C2A />
      <Footer />
    </div>
  );
}
