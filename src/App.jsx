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
function Contact() {return <h1>Contact Page</h1>; }


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


function LoginButton(){
  const [form, setForm] = useState({email: '', password: ''});

  function handleChange(e){
    const {name, value} = e.target;
    setForm(Form => ({...Form, [name]: value}));
  }

    function handleSubmit(e){
      e.preventDefault();
      console.log('Email:', form.email);
      console.log('Password:', form.password);
    }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email"
        value={form.email} 
        onChange={handleChange}
        placeholder="Email"
      />
      <input 
        type="password" 
        name="password"
        value={form.password} 
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
    
  );

}

import NavBar from './NavBar.jsx'


function App(){
  return(

    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<LoginButton />} />
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