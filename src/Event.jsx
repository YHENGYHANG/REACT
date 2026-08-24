import { Link } from "react-router-dom";

function Event(){
    const event = ['Intramurals', 'Foundation Day', 'Buwan ng Wika'];
    return(
    <div>
        <h4>Events:</h4>
            <ul>
                {event.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>        
        
        <Link to="/intrams">Intramurals Details</Link>
        <br></br>
        <Link to="/foundation">Foundation Day Details</Link>
        <br></br>
        <Link to="/buwan">Buwan ng Wika Details</Link>

    </div>
    )
}export default Event