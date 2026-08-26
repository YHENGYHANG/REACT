import { Link } from "react-router-dom";

function Event() {
  const event = ['Intramurals', 'Foundation Day', 'Buwan ng Wika'];
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">Events:</h4>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
        {event.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <Link to="/intrams" className="text-purple-600 hover:underline">
          Intramurals Details
        </Link>
        <Link to="/foundation" className="text-purple-600 hover:underline">
          Foundation Day Details
        </Link>
        <Link to="/buwan" className="text-purple-600 hover:underline">
          Buwan ng Wika Details
        </Link>
      </div>
    </div>
  )
}
export default Event
