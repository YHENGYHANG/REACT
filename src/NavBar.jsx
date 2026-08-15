import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/input">Input</Link>
            <Link to="/thank-you">Thank You</Link>
        </nav>
    );
}
export default NavBar;