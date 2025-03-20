import PortfolioPage from '@/components/PortfolioPage';

const Laguna: React.FC = () => {
  const images = ['/Laguna3.jpg', '/Laguna2.jpg', '/Laguna1.jpg'];

  return <PortfolioPage title="Laguna" images={images} />;
};

export default Laguna;
