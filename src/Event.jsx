import { Link } from "react-router-dom";

function Event(){
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
            <Link to="/buwan">Buwan ng Wika Registration</Link>         
        </div>
    )
}export default Event