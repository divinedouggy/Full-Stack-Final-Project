import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    )
}

export default Header