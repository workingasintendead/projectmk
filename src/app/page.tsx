import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}
