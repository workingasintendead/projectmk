import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <header className="text-center my-5">
      <Image
        src="/edgewaterPHlogo.png"
        alt="Edgewater Landscaping Logo"
        width={300}
        height={300}
        priority
        className="mb-4"
      />
      <h1 className="display-4">Welcome to Edgewater Landscaping</h1>
      <p className="lead text-muted">
        Take your landscaping to the edge with Edgewater Landscaping.
      </p>
    </header>
  );
};

export default Hero;
