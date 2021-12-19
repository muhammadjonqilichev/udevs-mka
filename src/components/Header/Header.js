import "./header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul className='header-container'>
                <li> < img src="https://firebasestorage.googleapis.com/v0/b/udevs-layout-firebase.appspot.com/o/udevs.png?alt=media&token=f1ef7767-3ccb-473f-a0bd-36c4906e1549" alt="img " width={146} className="logo"/></li>
                <li>
                    <NavLink activeclassname="active" className="nav-link" to='/' >Все потоки</NavLink>
                    <NavLink className="nav-link" to='/page-2'>Разработка</NavLink>
                    <NavLink className="nav-link" to='/page-3'>Администрирование</NavLink>
                    <NavLink className="nav-link" to='/page-4'>Дизайн</NavLink>
                    <NavLink className="nav-link" to='/page-5'>Маркетинг</NavLink>
                </li>
                <li>
                    <NavLink className="header-btn" to='/register'>Войти
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header