
import Header from './Header.jsx'
import StudentCard from './StudentCard.jsx'
import AttendanceCounter from './AttendanceCounter.jsx'

function App(){
  return(
    <div>

      <Header title="HUbaga  "/>
      <StudentCard name="John" age={20} course="BSIT" status={true}/>
      <StudentCard name="Monica Ella" age={16} course="BSHM" status={false}/>      
      <StudentCard name="Sarah Lyn" age={21} course="BSHM" status={true}/>      
      <AttendanceCounter />

    </div>
  )
}
export default App