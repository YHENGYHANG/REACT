import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/event">Event</Link>
            <br></br>
            {/* <Link to="/contact">Contact</Link>
            <br></br>
            <Link to="/input">Input</Link>
            <br></br>
            <Link to="/thank-you">Thank You</Link> */}
        </nav>
    );
}
export default NavBar;