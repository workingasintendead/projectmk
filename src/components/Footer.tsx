const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 mt-5">
      <p className="mb-1">&copy; 2025 Edgewater Landscaping</p>
      <p className="mb-1">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          className="text-muted"
        >
          Privacy Policy
        </a>
        {' | '}
        <a
          href="https://www.youtube.com/watch?v=jxo_K7JLZxQ"
          target="_blank"
          className="text-muted"
        >
          Terms of Service
        </a>
      </p>
      <p className="mb-1">
        Site Designed by{' '}
        <a
          href="https://bcn-nine-lovat.vercel.app/"
          target="_blank"
          className="text-muted"
        >
          BCN
        </a>
      </p>
    </footer>
  );
};

export default Footer;
