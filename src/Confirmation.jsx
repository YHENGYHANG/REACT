import { Link } from "react-router-dom"
import { useEffect } from "react"

function Confirmation() {
  useEffect(() => {
    alert("You're Successfully Registered");
  }, []);

  return (
    <div className="ticket-card px-8 py-12 sm:px-12 sm:py-16 max-w-xl mx-auto text-center relative overflow-hidden">
      <div
        className="inline-block border-2 border-green text-green font-mono text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-sm rotate-[-4deg] mb-6"
      >
        Confirmed
      </div>

      <h1 className="font-display text-4xl font-semibold text-ink mb-3">
        You're All Set
      </h1>
      <p className="text-ink/70 leading-relaxed mb-10 max-w-sm mx-auto">
        Your spot has been reserved. Keep an eye on your email for
        event-day details.
      </p>

      <div className="ticket-divider my-8 mx-0" />

      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-sm text-maroon hover:text-maroon-dark transition-colors"
      >
        &larr; Back to Home
      </Link>
    </div>
  )
}
export default Confirmation
