
import './Navbar.css'

import { NavLink } from "react-router-dom"


const Navbar = () => {
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/scripts'>Scripts</NavLink>
            <NavLink to='/push'>Push</NavLink>
            <NavLink to='/tables'>Spreadsheets</NavLink>
            <NavLink to='/docmodels'>Doc Templates</NavLink>
            <NavLink to='/tags'>Tags</NavLink>
            <NavLink to='/links'>Links</NavLink>
            <NavLink to='/schedule'>Schedule</NavLink>
        </nav>
    )
}

export default Navbar