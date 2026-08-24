//Realm Kindred Notarte BSIT - 3 SEC: 1
//DC4 - 05:00 - 06:00pm (Monday & Wednesday & Friday)

import {  Routes, Route } from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

// import Header from './Header.jsx'
// import StudentCard from './StudentCard.jsx'
// import AttendanceCounter from './AttendanceCounter.jsx'

import Home from './Home.jsx';
import Event from './Event.jsx';
import Intrams from './Intrams.jsx';
import Foundation from './Foundation.jsx';
import Buwan from './Buwan.jsx';
// function Home() {return <h1>Welcome my Precious! <br></br> <p>this is a paragraph</p></h1>; }
// function About() {return <h1>About Page</h1>; }
// function Contact() {return <h1>Contact Page</h1>; }


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
        <Route path="/events" element={<Event />} />
        <Route path="/intrams" element={<Intrams />} /> 
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/buwan" element={<Buwan />} />

        <Route path="/input" element={<NameInput />} />
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