import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <u1 className="nav-link">
                <Link to = "/">
                    <li>Home</li>
                </Link>
                <Link to = "/About">
                    <li>About</li>
                </Link>
                <Link to = "/Resume">
                    <li>Resume</li>
                </Link>
                <Link to = "/Projects">
                    <li>Projects</li>
                </Link>
            </u1>
        </nav> 
    )
}

export default Nav;