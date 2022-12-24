import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Side.css';
function Sidebar() {
    return ( 
        <>
        <nav>
        <ul className="sidebar">
           <li><Link to="/Note-Keeping" className="links">Notes</Link></li> <br/>
           <li><Link to="/Reminders" className="links">Reminders</Link></li><br/>
           <li><Link to="/edit" className="links">Edit Labels</Link></li><br/>
           <li><Link to="/archive" className="links">Archive</Link></li><br/>
           <li><Link to="/trash" className="links">Trash</Link></li>
        </ul>
        </nav>
        <Outlet/>
        </>
     );
}

export default Sidebar;