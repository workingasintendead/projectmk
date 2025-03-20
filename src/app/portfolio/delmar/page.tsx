import PortfolioPage from '@/components/PortfolioPage';

const Delmar: React.FC = () => {
  const images = ['/Delmar1.jpg', '/Delmar2.jpg', '/Delmar3.jpg'];

  return <PortfolioPage title="Del Mar" images={images} />;
};

export default Delmar;
