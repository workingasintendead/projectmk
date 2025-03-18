import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div
        className="about-container container py-5"
        style={{ marginTop: '80px' }}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <Image
              src="/LiamWaters.jpg"
              alt="Liam Waters, founder of Edgewater Landscaping"
              width={600}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="col-md-6">
            <h1>About Edgewater Landscaping</h1>
            <p>
              Founded in 2025 by landscape architect Liam Waters,{' '}
              <strong>Edgewater Landscaping</strong> is proud to serve the San
              Diego community with innovative and sustainable landscaping
              solutions. Born and raised in San Diego, Liam was inspired by the
              city&apos;s beautiful coastal landscapes, desert plants, and
              vibrant gardens. After years of honing his craft and working with
              top-tier landscape design firms, Liam realized the need for a
              company that blends modern design aesthetics with eco-friendly,
              water-conscious practices.
            </p>
            <p>
              From humble beginnings, Edgewater Landscaping started as a one-man
              operation, but quickly gained a reputation for its attention to
              detail, passion for the environment, and ability to turn even the
              smallest spaces into lush, functional outdoor retreats. Whether
              it&apos;s designing a unique garden for a private residence,
              installing drought-tolerant landscaping for a commercial property,
              or maintaining green spaces that stand the test of time, Edgewater
              Landscaping is dedicated to creating outdoor spaces that are not
              only beautiful but sustainable for years to come.
            </p>
            <p>
              Today, Edgewater Landscaping continues to serve the greater San
              Diego area, building on the values of quality, integrity, and
              environmental stewardship. With a team of skilled professionals
              and a commitment to innovation, they are paving the way for a
              greener, more sustainable future for all of San Diego&apos;s
              outdoor spaces.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
