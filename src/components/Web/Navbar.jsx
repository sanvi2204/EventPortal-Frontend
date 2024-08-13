import { NavLink, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from 'react-icons/fa';
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const handleClick = () => setClick(!click);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div>
                        <Link className="nav-logo h-5 nav-item nav-links" to="/Home">
                            SparkEvents
                        </Link>
                    </div>
                    
                    <div className="nav-menu">
                        <NavLink to="/login" className="nav-item nav-links" activeClassName="active">
                            Login
                        </NavLink>
                        <NavLink to="/register" className="nav-item nav-links" activeClassName="active">
                            Register
                        </NavLink>
                        <NavLink to="/event" className="nav-item nav-links" activeClassName="active">
                            Events
                        </NavLink>
                    </div>

                    <IconContext.Provider value={{ color: '#fff' }}>
                        <div>
                            <Link to='/Leftbar' className='menu-bars'>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                        </div>
                    </IconContext.Provider>
                </div>
            </nav>
        </>
    )
}

export default Navbar;