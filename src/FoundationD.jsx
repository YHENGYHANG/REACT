import { Link } from "react-router-dom"

function FoundationD() {
  return (
    <div className="ticket-card px-8 py-10 sm:px-12 sm:py-12 max-w-xl mx-auto">
      <p className="eyebrow mb-2">Event Pass</p>
      <h1 className="font-display text-4xl font-semibold text-ink mb-8">
        Foundation Day 2027
      </h1>

      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-sm mb-2">
        <dt className="text-ink/50">Date</dt>
        <dd className="text-ink">March 3, 2027</dd>
        <dt className="text-ink/50">Venue</dt>
        <dd className="text-ink">Mater Dei College</dd>
      </dl>

      <p className="text-ink/70 leading-relaxed mt-6">
        Celebrate the college's founding with a day of programs, booths,
        and performances across campus.
      </p>

      <div className="ticket-divider my-8 mx-0" />

      <p className="eyebrow mb-3">Registration</p>
      <Link
        to="/foundationR"
        className="inline-flex items-center gap-2 bg-maroon text-paper font-medium px-5 py-3 rounded-sm hover:bg-maroon-dark transition-colors"
      >
        Register for Foundation Day
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}
export default FoundationD
