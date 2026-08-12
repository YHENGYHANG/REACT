import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/input">Input</Link>
        </nav>
    );
}
export default NavBar;