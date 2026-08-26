import { Link } from "react-router-dom"

function Confirmation() {
  const mssg = 'You\'re Successfully Registered'
  let confirm = alert(mssg)
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">
        Registration Confirmed!!
      </h1>
      <p className="text-gray-700 mb-6">{confirm}</p>
      <Link to="/" className="text-purple-600 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}
export default Confirmation
