import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import HeaderBanner from './HeaderBanner.jsx'
// import CourseCard from './CourseCard.jsx'
// import SkillList from './SkillList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <HeaderBanner />
    <CourseCard />
    <SkillList /> */}
  </StrictMode>,
)
