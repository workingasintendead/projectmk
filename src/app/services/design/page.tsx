import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const Design: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div
        className="design-container container py-5"
        style={{ marginTop: '80px' }}
      >
        <h1 className="text-center mb-5">Design Services</h1>

        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <Image
              src="/Design1.jpg"
              alt="Landscape Design"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="col-md-6">
            <h3>Expert In-House Designers</h3>
            <p>
              At Edgewater Landscaping, our in-house designers bring a wealth of
              knowledge and creativity to every project. We work closely with
              you to understand your vision and translate it into a beautiful,
              functional design. Whether it&apos;s a garden, patio, or
              large-scale outdoor transformation, our designers craft each space
              with a perfect blend of aesthetics and practicality.
            </p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h3>Sustainability Meets Beauty</h3>
            <p>
              We believe in creating designs that are as sustainable as they are
              beautiful. Our team prioritizes eco-friendly practices,
              incorporating native plants, water-efficient systems, and
              sustainable materials into every design. By blending nature with
              modern design, we create outdoor spaces that are not only visually
              stunning but also promote environmental stewardship for the long
              term.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src="/Design2.jpg"
              alt="Sustainable Landscape Design"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Design;
