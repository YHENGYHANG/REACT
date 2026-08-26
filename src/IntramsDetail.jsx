import { Link } from "react-router-dom"
function IntramsDetail(){
    return(
    <div>
        <h1>Intramurals 2026</h1>
        <h2>Details:</h2>
        <p><b>Date: </b>September 3, 2026</p>
        <p><b>Location:</b> Mater Dei College, Activity Center</p>
        <p>Click and join for our annual Intramurals Day!!</p>
        
        <br></br>
        <h2>Registration:</h2>
        <Link to="/intramsR">Intramurals Registration</Link>
        <br></br>
    </div>
    )
}export default IntramsDetail