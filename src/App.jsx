//Realm Kindred Notarte BSIT - 3 SEC: 1
//DC4 - 05:00 - 06:00pm (Monday & Wednesday & Friday)

import {  Routes, Route } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

// import Header from './Header.jsx'
// import StudentCard from './StudentCard.jsx'
// import AttendanceCounter from './AttendanceCounter.jsx'

function Home() {return <h1>Home Page</h1>; }
function About() {return <h1>About Page</h1>; }

function Contact() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload

    if (!form.name.trim() || !form.email.trim()) {
      setError('Name and Email are both required.');
      return;
    }

    setError('');
    navigate('/thank-you');
  }

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

function ThankYou() {
  return <h1>Thank you! Your message was received.</h1>;
}


function NameInput(){
  const [name, setName] = useState('');
  return(
    <div>
     <input 
       value={name} 
       onChange={(e) => setName(e.target.value)}
       placeholder="Enter your name"
     />
    <p>Hello, {name}!</p>
    </div>
  );
}



// import Home from './Home.jsx'
// import About from './About.jsx'
// import Contact from './Contact.jsx'



import NavBar from './NavBar.jsx'


function App(){
  return(

    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/input" element={<NameInput />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

     

    </>

// {/* <div>
//     <Home />
//     <About />
//     <Contact />
// </div> */}


      // {/* <Header title="HUbaga  "/>
      // <StudentCard name="John" age={20} course="BSIT" status={true}/>
      // <StudentCard name="Monica Ella" age={16} course="BSHM" status={false}/>      
      // <StudentCard name="Sarah Lyn" age={21} course="BSHM" status={true}/>      
      // <AttendanceCounter /> */}

  )
}
export default App