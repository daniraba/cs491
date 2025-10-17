import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-semibold">ReactRouteHobbies</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/hobbies" className="text-gray-700 hover:text-blue-600">
            Hobbies
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
