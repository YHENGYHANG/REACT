import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import App from './App.jsx'
// import Greetings from './Greetings'
// import HeaderBanner from './HeaderBanner'
// import CourseCard from './CourseCard'
// import SkillList from './SkillList'
import Example from './Example'

createRoot (document.getElementById('root')).render(
  <StrictMode>
  
    {/* <HeaderBanner />
    <CourseCard />
    <SkillList /> */}
    
    <Example name= "Nyawa mn Diay" age={25} address="taga amoa" />

  </StrictMode>

)

