import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <ul className="footer-block">
                    <li>
                        <ul>
                            <li>
                                <img src="https://firebasestorage.googleapis.com/v0/b/udevs-layout-firebase.appspot.com/o/udevs.png?alt=media&token=f1ef7767-3ccb-473f-a0bd-36c4906e1549" alt="logo" className='footer-logo' width={103} />
                            </li>
                            <li className='footer-text'>
                                Помощник в публикации статей, журналов.
                                Список популярных международных конференций.
                                Всё для студентов и преподавателей.
                            </li>
                            <li className="footer-address">Copyright © 2020. LogoIpsum. All rights reserved.</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="footer-link-title">Ресурсы</li>
                            <li className="footer-link">Статьи</li>
                            <li className="footer-link">Журналы</li>
                            <li className="footer-link">Газеты</li>
                            <li className="footer-link">Диплом</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="footer-link-title">О нас</li>
                            <li className="footer-link">Контакты</li>
                            <li className="footer-link">Помощь</li>
                            <li className="footer-link">Заявки</li>
                            <li className="footer-link">Политика</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="footer-link-title">Помощь</li>
                            <li className="footer-link">Часто задаваемые вопросы</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
