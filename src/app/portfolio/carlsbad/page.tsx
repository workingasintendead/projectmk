import PortfolioPage from '@/components/PortfolioPage';

const Carlsbad: React.FC = () => {
  const images = ['/Carlsbad1.jpg', '/Carlsbad2.jpg', '/Carlsbad3.jpg'];

  return <PortfolioPage title="Carlsbad" images={images} />;
};

export default Carlsbad;
