import { Link } from "react-router-dom"

function IntramsDetail() {
  return (
    <div className="ticket-card px-8 py-10 sm:px-12 sm:py-12 max-w-xl mx-auto">
      <p className="eyebrow mb-2">Event Pass</p>
      <h1 className="font-display text-4xl font-semibold text-ink mb-8">
        Intramurals 2026
      </h1>

      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-sm mb-2">
        <dt className="text-ink/50">Date</dt>
        <dd className="text-ink">September 3, 2026</dd>
        <dt className="text-ink/50">Venue</dt>
        <dd className="text-ink">Mater Dei College, Activity Center</dd>
      </dl>

      <p className="text-ink/70 leading-relaxed mt-6">
        Suit up and join our annual Intramurals Day &mdash; a full day of
        sport, spirit, and bragging rights for your course.
      </p>

      <div className="ticket-divider my-8 mx-0" />

      <p className="eyebrow mb-3">Registration</p>
      <Link
        to="/intramsR"
        className="inline-flex items-center gap-2 bg-maroon text-paper font-medium px-5 py-3 rounded-sm hover:bg-maroon-dark transition-colors"
      >
        Register for Intramurals
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}
export default IntramsDetail
