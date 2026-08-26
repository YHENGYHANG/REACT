import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
// import Greetings from './Greetings'
// import HeaderBanner from './HeaderBanner'
// import CourseCard from './CourseCard'
// import SkillList from './SkillList'
// import Product from './Product.jsx'

// import State from './State.jsx'

// import Header from './Header.jsx'
// import StudentCard from './StudentCard.jsx'

createRoot (document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
      <App />

  </BrowserRouter>

    {/* <HeaderBanner />
    <CourseCard /> */}

    
    {/* <Example name= "Nyawa mn Diay" age={25} address="taga amoa" /> */}
    {/* < Product name="Downy" price ={7.50} category="Food" Instock="true"/> */}
    {/* <State /> */}

      {/* <Header title="HUbaga  "/>
      <StudentCard name="John" age={20} course="BSIT" status={true}/> */}




  </StrictMode>


)

