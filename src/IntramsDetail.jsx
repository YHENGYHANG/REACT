import { Link } from "react-router-dom"

function IntramsDetail() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Intramurals 2026</h1>

      <h2 className="text-xl font-medium text-gray-800 mb-2">Details:</h2>
      <p className="text-gray-700"><b>Date: </b>September 3, 2026</p>
      <p className="text-gray-700"><b>Location:</b> Mater Dei College, Activity Center</p>
      <p className="text-gray-700 mb-6">Click and join for our annual Intramurals Day!!</p>

      <h2 className="text-xl font-medium text-gray-800 mb-2">Registration:</h2>
      <Link to="/intramsR" className="text-purple-600 hover:underline">
        Intramurals Registration
      </Link>
    </div>
  )
}
export default IntramsDetail
