import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="ticket-card px-8 py-10 sm:px-12 sm:py-14 max-w-xl mx-auto">
      <p className="eyebrow mb-3">Admit One &middot; School Year 2026&ndash;2027</p>

      <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-[1.05] mb-4">
        Welcome, Precious.
      </h1>

      <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
        Every Mater Dei tradition, from the Intramurals whistle to the Buwan
        ng Wika stage, starts with your name on the list. Browse what's
        coming up and claim your spot.
      </p>

      <div className="ticket-divider my-8 mx-0" />

      <Link
        to="/events"
        className="inline-flex items-center gap-2 bg-maroon text-paper font-medium px-5 py-3 rounded-sm hover:bg-maroon-dark transition-colors"
      >
        See what's on
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
export default Home;
