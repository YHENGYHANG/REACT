import { Link } from "react-router-dom"
function Confirmation(){
    const mssg = 'You\'re Successfully Registered'
    let confirm = alert(mssg)
    return(
        <div>
            <p>{confirm}</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}export default Confirmation