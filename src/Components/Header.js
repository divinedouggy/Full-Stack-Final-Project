import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/zooanimal'>Animal</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    )
}

export default Header