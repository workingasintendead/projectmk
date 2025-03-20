import PortfolioPage from '@/components/PortfolioPage';

const Lamesa: React.FC = () => {
  const images = ['/Lamesa1.jpg', '/Lamesa2.jpg', '/Lamesa3.jpg'];

  return <PortfolioPage title="La Mesa" images={images} />;
};

export default Lamesa;
