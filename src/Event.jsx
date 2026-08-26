import { Link } from "react-router-dom";

function Event(){
<<<<<<< HEAD
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
=======
    const event = ['Intramurals', 'Foundation Day', "Buwan ng Wika"];

    return(
        <div>
            <h2>In coming Events:</h2>
            <ul>
                {event.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}


            </ul>  

            <h2>Details:</h2>
            <Link to="/intramsD">Intramurals Detail</Link>
            <br></br>
            <Link to="/foundationD">Foundataion Day Details</Link>
            <br></br>
            <Link to="/buwanD">Buwan ng Wika Registration</Link>         
        </div>
>>>>>>> 02d2d60175daf8cbe230664c8a9001712756ef04
    )
}export default Event