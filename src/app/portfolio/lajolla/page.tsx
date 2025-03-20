import PortfolioPage from '@/components/PortfolioPage';

const Lajolla: React.FC = () => {
  const images = ['/Lajolla1.jpg', '/Lajolla3.jpg', '/Lajolla2.jpg'];

  return <PortfolioPage title="La Jolla" images={images} />;
};

export default Lajolla;
