import { Link } from 'react-router-dom';
export default  function Nav (){
    return(
        <nav>
            <ul className='nav-ul'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Updtae Products</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
            </ul>
        </nav>
    )
}