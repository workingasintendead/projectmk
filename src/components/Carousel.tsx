import Image from 'next/image';

const Carousel: React.FC = () => {
  return (
    <div>
      <div
        id="imageCarousel"
        className="carousel slide carousel-fade w-100"
        data-bs-ride="carousel"
        data-bs-pause="false"
        style={{
          height: '100vh',
          position: 'relative',
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="d-block w-100"
              style={{ height: '100vh', position: 'relative' }}
            >
              <Image
                src="/Cara1.jpg"
                alt="Feature 1"
                layout="fill"
                objectFit="cover"
                className="d-block w-100"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{ height: '100vh', position: 'relative' }}
            >
              <Image
                src="/Cara2.jpg"
                alt="Feature 2"
                layout="fill"
                objectFit="cover"
                className="d-block w-100"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{ height: '100vh', position: 'relative' }}
            >
              <Image
                src="/Cara3.jpg"
                alt="Feature 3"
                layout="fill"
                objectFit="cover"
                className="d-block w-100"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="d-block w-100"
              style={{ height: '100vh', position: 'relative' }}
            >
              <Image
                src="/Cara4.jpg"
                alt="Feature 4"
                layout="fill"
                objectFit="cover"
                className="d-block w-100"
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 9,
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.65)',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            Get Started Today
          </h2>
          <p
            className="lead"
            style={{
              fontSize: '1.5rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}
          >
            Ready to start your landscaping journey? Let’s make it happen!
          </p>
          <div className="d-flex justify-content-center">
            <a
              href="mailto:westwavewebworks@gmail.com"
              className="btn btn-primary mx-3"
              role="button"
              style={{
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                width: '150px',
                textAlign: 'center',
              }}
            >
              Contact Us
            </a>
            <a
              href="tel:+1234567890"
              className="btn btn-success mx-3"
              role="button"
              style={{
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                width: '150px',
                textAlign: 'center',
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
