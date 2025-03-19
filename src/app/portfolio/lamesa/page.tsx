import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const Lamesa: React.FC = () => {
  const images = ['/Lamesa1.jpg', '/Lamesa2.jpg', '/Lamesa3.jpg'];

  return (
    <div className="container-fluid p-0 d-flex flex-column">
      <Header />

      <div
        className="portfolio-container pt-5 d-flex flex-column flex-grow-1"
        style={{
          marginTop: '52px',
        }}
      >
        <h1 className="text-center">La Mesa</h1>
        <div className="d-flex flex-column align-items-center">
          {images.map((src, index) => (
            <div
              key={index}
              className="portfolio-item position-relative overflow-hidden"
              style={{ marginBottom: '15px' }}
            >
              <Image
                src={src}
                alt={`Lamesa Project Image ${index + 1}`}
                style={{
                  objectFit: 'cover',
                  width: '100vw',
                  maxWidth: '1270px',
                  height: 'auto',
                }}
                width={1270}
                height={720}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lamesa;
