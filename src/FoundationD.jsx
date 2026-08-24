import { Link } from "react-router-dom"
function FoundationD(){
    return(
    <div>
        <h1>Foundation Day 2027</h1>
        <h2>Details:</h2>
        <p><b>Date: </b>March 3, 2027</p>
        <p><b>Location:</b> Mater Dei College</p>
        <p>Click and join for our annual Foundation Day!!</p>
        
        <br></br>
        <h2>Registration:</h2>
        <Link to="/foundationR">Foundation Day Registration</Link>
        <br></br>
    </div>        
    )
}export default FoundationD