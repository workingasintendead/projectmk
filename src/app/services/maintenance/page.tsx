import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const Maintenance: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div
        className="maintenance-container container py-5"
        style={{ marginTop: '80px' }}
      >
        <h1 className="text-center mb-5">Maintenance Services</h1>

        <div className="row align-items-center my-5">
          <div className="col-md-6 col-12 mb-4 mb-md-0 order-1 order-md-1">
            <Image
              src="/Maint1.jpg"
              alt="Landscape Maintenance"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="col-md-6 col-12 order-2 order-md-2">
            <h3>Comprehensive Care</h3>
            <p>
              Edgewater Landscaping offers complete maintenance solutions to
              keep your outdoor spaces looking pristine year-round. Whether
              it&apos;s routine lawn care, pruning, or seasonal cleanups, we
              tailor our services to meet your needs. Our expert team provides
              careful attention to every detail, ensuring that your landscape
              remains healthy, vibrant, and inviting throughout the year.
            </p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-md-6 col-12 mb-4 mb-md-0 order-2 order-md-1">
            <h3>Ongoing Support</h3>
            <p>
              Maintaining your landscape is more than just regular upkeep;
              it&apos;s about building a long-term relationship. With Edgewater
              Landscaping, you&apos;ll have access to ongoing support and
              personalized maintenance plans. We proactively address issues,
              ensure your plants thrive, and keep your outdoor spaces in top
              condition. Our team is available for scheduled visits, providing
              consistent care that fits your unique needs.
            </p>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-0 order-1 order-md-2">
            <Image
              src="/Maint2.jpg"
              alt="Landscape Care"
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

export default Maintenance;
