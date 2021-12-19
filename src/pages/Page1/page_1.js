import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom'
import './page_1.css'
import LastNews from '../../components/LastNews/LastNews';
import { newSrc } from '../../components/LastNews/newSrc';
import { IoIosNotifications } from "react-icons/io";

function Page_1() {
    return (
        <>
            <header>
                <div className="header-container-page-1">
                    <ul className='header-block-first'>
                        <li>
                            <img src="https://firebasestorage.googleapis.com/v0/b/udevs-layout-firebase.appspot.com/o/udevs.png?alt=media&token=f1ef7767-3ccb-473f-a0bd-36c4906e1549" alt="img" width={146} className="logo" />
                        </li>
                        <li className="ico-block">
                            <IoIosNotifications className="ico"/><button className="header-btn">Войти</button>
                        </li>
                    </ul>
                     <ul className='header-block-second'>
                        <li>
                            <Link className="nav-link active" to='/'>Все потоки</Link>
                            <Link className="nav-link" to='/page-2'>Разработка</Link>
                            <Link className="nav-link" to='/page-3'>Администрирование</Link>
                            <Link className="nav-link" to='/page-4'>Дизайн</Link>
                            <Link className="nav-link" to='/page-5'>Маркетинг</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <LastNews {...newSrc}/>
            <Footer />
        </>
    )
}

export default Page_1
