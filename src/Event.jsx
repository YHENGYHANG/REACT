import { Link } from "react-router-dom";

function Event() {
  const events = [
    {
      name: 'Intramurals',
      date: 'Sept 3, 2026',
      to: '/intrams',
    },
    {
      name: 'Foundation Day',
      date: 'Mar 3, 2027',
      to: '/foundation',
    },
    {
      name: 'Buwan ng Wika',
      date: 'Aug 28, 2026',
      to: '/buwan',
    },
  ];

  return (
    <div>
      <p className="eyebrow mb-2">This Season</p>
      <h1 className="font-display text-3xl font-semibold text-ink mb-8">
        Upcoming Events
      </h1>

      <div className="flex flex-col gap-5">
        {events.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className="ticket-card flex items-center justify-between px-6 py-5 hover:-translate-y-0.5 hover:shadow-lg transition-all"
          >
            <div>
              <p className="font-mono text-xs text-maroon tracking-wide mb-1">
                {item.date}
              </p>
              <p className="font-display text-xl font-semibold text-ink">
                {item.name}
              </p>
            </div>
            <span className="text-gold text-2xl" aria-hidden="true">&rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Event
