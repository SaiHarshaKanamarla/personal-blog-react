import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/">
                <h1>BloGit</h1>
            </Link>
            <div className="links"> 
{/*                 // If we use anchor tags, the react still makes the request to the endpoint for data. Instead we can use the Link package so that react router can handle the request in the browser rather than making a request to the server
                <a href="/">Home</a>
                <a href="/create">New Blog</a> */}

                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;