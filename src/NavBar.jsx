import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-maroon border-b-4 border-gold">
      <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold text-gold-light tracking-tight">
            Mater Dei
          </span>
          <span className="eyebrow text-gold-light/80">Campus Events</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-mono text-sm text-paper/90 hover:text-gold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="font-mono text-sm text-paper/90 hover:text-gold transition-colors"
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
