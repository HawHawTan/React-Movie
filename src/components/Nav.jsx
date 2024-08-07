import { NavLink } from 'react-router-dom';

function Nav() {



    return (
        <nav className='nav-links'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/favourites">Favourites</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav