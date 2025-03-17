import Image from 'next/image';

const Carousel: React.FC = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        id="imageCarousel"
        className="carousel slide w-75"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/Cara1.jpg"
              alt="Feature 1"
              width={1200}
              height={400}
              layout="intrinsic"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Cara2.jpg"
              alt="Feature 2"
              width={1200}
              height={400}
              layout="intrinsic"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Cara3.jpg"
              alt="Feature 3"
              width={1200}
              height={400}
              layout="intrinsic"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Cara4.jpg"
              alt="Feature 4"
              width={1200}
              height={400}
              layout="intrinsic"
              className="d-block w-100"
            />
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
      </div>
    </div>
  );
};

export default Carousel;
