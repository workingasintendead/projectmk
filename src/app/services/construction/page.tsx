import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const Construction: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div
        className="construction-container container py-5"
        style={{ marginTop: '80px' }}
      >
        <h1 className="text-center mb-5">Construction Services</h1>

        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <h3>Dedicated Experts</h3>
            <p>
              Edgewater Landscaping offers unmatched expertise in landscape
              construction, blending creativity with years of experience to
              bring your vision to life. Our team of skilled professionals works
              closely with you to design and construct outdoor spaces that not
              only meet but exceed your expectations. From intricate garden
              designs to large-scale commercial projects, we bring precision,
              quality materials, and innovative techniques to every job,
              ensuring durable, aesthetically pleasing results that last for
              years.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src="/Construction1.jpg"
              alt="Construction Project"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-md-6">
            <Image
              src="/Construction2.jpg"
              alt="Property Visit"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="col-md-6">
            <h3>Communication is key</h3>
            <p>
              At the heart of our service is exceptional communication. We
              believe in keeping our clients informed and involved every step of
              the way. With a dedicated project manager as your point of
              contact, you&apos;ll always have someone to answer questions,
              address concerns, and provide updates. Our transparent
              communication approach ensures that you&apos;re never left in the
              dark—whether it&apos;s through regular progress reports, scheduled
              check-ins, or real-time updates, we make sure you&apos;re always
              in the loop, making the entire process seamless and stress-free.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
