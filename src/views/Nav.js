import './Nav.scss'
import {
    BrowserRouter,
    Route,
    Link, NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <BrowserRouter>
            <div className="topnav">
                {/* <a className="active" href="/home">Home</a>
            <a href="/timer">Timer</a>
            <a href="/todo">Todos</a>
            <a href="/secret">Scret</a> */}

                <NavLink to="/home">Home</NavLink>
                <NavLink to="/timer">Timer</NavLink>
                <NavLink to="/todo">Todos</NavLink>
                <NavLink to="/secret">Secret</NavLink>

            </div> </BrowserRouter>
    )
}

export default Nav
