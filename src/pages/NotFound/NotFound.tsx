import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center p-4">
      <h3 className="mb-1">Oops! Page not found.</h3>
      <h1 className="text-6xl mb-1">
        4<span className="text-accent">0</span>4
      </h1>
      <p className="mb-3">
        The page you are looking for does not exist, has been removed, its name
        has changed or is temporarily unavailable.
      </p>

      <Link to="/" className="btn-accent">
        Go to the Home Page
      </Link>
    </div>
  );
};

export default NotFound;
