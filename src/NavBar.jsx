import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/events">Event</Link>
            <br></br>
            <Link to="/contact">Contact</Link>
            <br></br>
            <Link to="/login">Login</Link>
            <br></br>
            <Link to="/input">Input</Link>
        </nav>
    );
}
export default NavBar;