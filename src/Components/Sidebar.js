import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <p>item </p>
            <p>item </p>
            <p>item </p>
            <p>item </p>
            <p>item </p>
            <NavLink to='/posts'>See all</NavLink>
        </div>
    )
}

export default Sidebar