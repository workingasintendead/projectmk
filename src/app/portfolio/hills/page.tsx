import PortfolioPage from '@/components/PortfolioPage';

const Hills: React.FC = () => {
  const images = ['/Hills2.jpg', '/Hills1.jpg', '/Hills3.jpg'];

  return <PortfolioPage title="Hills" images={images} />;
};

export default Hills;
