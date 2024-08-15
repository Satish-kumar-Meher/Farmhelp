import { NavLink } from "react-router-dom" 
import "./Navbar.css"
import { useAuth } from "../store/auth"

export const Navbar = () => {
const {isLoggedIn} = useAuth()

    return (
        <>
        <header>
            {/* <div className="container"> */}
                
            <nav className="navbar">
            <div className="logo">
                    <NavLink to="/">FARM HELP</NavLink>
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink  to="/about">ABOUT</NavLink></li>
                    {/* conditional rendering :- */}
                    
                    {isLoggedIn ?  <li><NavLink to="/logout">LOGOUT</NavLink></li> 
                    
                    :

                    <>
                        <li><NavLink to="/register">REGISTER</NavLink></li>
                        <li><NavLink to="/login">LOGIN</NavLink></li>
                    </> }
                   
                    
                </ul>
            </nav>

            {/* </div> */}
        </header>
        </>
    )
} 