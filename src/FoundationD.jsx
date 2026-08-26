import { Link } from "react-router-dom"

function FoundationD() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Foundation Day 2027</h1>

      <h2 className="text-xl font-medium text-gray-800 mb-2">Details:</h2>
      <p className="text-gray-700"><b>Date: </b>March 3, 2027</p>
      <p className="text-gray-700"><b>Location:</b> Mater Dei College</p>
      <p className="text-gray-700 mb-6">Click and join for our annual Foundation Day!!</p>

      <h2 className="text-xl font-medium text-gray-800 mb-2">Registration:</h2>
      <Link to="/foundationR" className="text-purple-600 hover:underline">
        Foundation Day Registration
      </Link>
    </div>
  )
}
export default FoundationD
