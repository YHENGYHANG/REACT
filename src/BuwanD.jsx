import { Link } from "react-router-dom"
function BuwanD(){
    return(
    <div>
        <h1>Buwan ng Wika 2026</h1>
        <h2>Details:</h2>
        <p><b>Date: </b>August 28, 2026</p>
        <p><b>Location:</b> Mater Dei College, Activity Center</p>
        <p>Click and join for our annual Buwan ng Wika!!</p>
        
        <br></br>
        <h2>Registration:</h2>
        <Link to="/buwanR">Buwan ng Wika Registration</Link>

    </div>    
    )
}export default BuwanD