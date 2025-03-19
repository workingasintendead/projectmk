import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio: React.FC = () => {
  return (
    <div className="container-fluid p-0 d-flex flex-column">
      <Header />

      <div
        className="portfolio-container pt-5 d-flex flex-column flex-grow-1"
        style={{
          marginTop: '52px',
          minHeight: '90vh',
        }}
      >
        <div className="row no-gutters">
          <div className="col-md-4 col-12 p-0">
            <Link href="/portfolio/carlsbad">
              <div
                className="portfolio-item position-relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '45vh',
                }}
              >
                <Image
                  src="/Carlsbad2.jpg"
                  alt="Carlsbad"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="portfolio-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-center">
                  <p className="text-white fs-4 fw-bold">Carlsbad</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 col-12 p-0">
            <Link href="/portfolio/delmar">
              <div
                className="portfolio-item position-relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '45vh',
                }}
              >
                <Image
                  src="/Delmar1.jpg"
                  alt="Delmar"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="portfolio-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-center">
                  <p className="text-white fs-4 fw-bold">Delmar</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 col-12 p-0">
            <Link href="/portfolio/hills">
              <div
                className="portfolio-item position-relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '45vh',
                }}
              >
                <Image
                  src="/Hills2.jpg"
                  alt="Hills"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="portfolio-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-center">
                  <p className="text-white fs-4 fw-bold">Hills</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4 col-12 p-0">
            <Link href="/portfolio/laguna">
              <div
                className="portfolio-item position-relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '45vh',
                }}
              >
                <Image
                  src="/Laguna3.jpg"
                  alt="Laguna"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="portfolio-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-center">
                  <p className="text-white fs-4 fw-bold">Laguna</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 col-12 p-0">
            <Link href="/portfolio/lajolla">
              <div
                className="portfolio-item position-relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '45vh',
                }}
              >
                <Image
                  src="/Lajolla3.jpg"
                  alt="La Jolla"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="portfolio-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-center">
                  <p className="text-white fs-4 fw-bold">La Jolla</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 col-12 p-0">
            <Link href="/portfolio/lamesa">
              <div
                className="portfolio-item position-relative overflow-hidden"
                style={{
                  width: '100%',
                  height: '45vh',
                }}
              >
                <Image
                  src="/Lamesa3.jpg"
                  alt="La Mesa"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="portfolio-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center text-center">
                  <p className="text-white fs-4 fw-bold">La Mesa</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
