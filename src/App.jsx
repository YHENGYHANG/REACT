//Realm Kindred Notarte BSIT - 3 SEC: 1
//DC4 - 05:00 - 06:00pm (Monday & Wednesday & Friday)

import { Routes, Route } from 'react-router-dom'

import Home from './Home.jsx';
import Event from './Event.jsx';

import IntramsDetail from './IntramsDetail.jsx';
import IntramsRegistration from './IntramsRegistration.jsx';

import FoundationD from './FoundationD.jsx';
import FoundationR from './FoundationR.jsx';

import BuwanD from './BuwanD.jsx';
import BuwanR from './BuwanR.jsx';

import Confirmation from './Confirmation.jsx';

import NavBar from './NavBar.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/intrams" element={<IntramsDetail />} />
          <Route path="/intramsR" element={<IntramsRegistration />} />
          <Route path="/foundation" element={<FoundationD />} />
          <Route path="/foundationR" element={<FoundationR />} />
          <Route path="/buwan" element={<BuwanD />} />
          <Route path="/buwanR" element={<BuwanR />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

      <footer className="border-t border-line py-6">
        <p className="max-w-3xl mx-auto px-5 eyebrow text-ink/50">
          Mater Dei College &middot; Student Affairs Office
        </p>
      </footer>
    </div>
  )
}
export default App
