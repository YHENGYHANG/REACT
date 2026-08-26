import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-purple-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/events"
          className="text-gray-700 font-medium hover:text-purple-600 transition-colors"
        >
          Event
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
