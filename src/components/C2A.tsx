const CallToAction: React.FC = () => {
  return (
    <section className="text-center my-5">
      <h2>Get Started Today</h2>
      <p className="lead">
        Ready to start your landscaping journey? Let’s make it happen!
      </p>
      <div className="d-flex justify-content-center">
        <a
          href="mailto:westwavewebworks@gmail.com"
          className="btn btn-primary mx-3"
          role="button"
        >
          Contact Us
        </a>
        <a
          href="tel:+1234567890"
          className="btn btn-success mx-3"
          role="button"
        >
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
