import React from 'react';
import { NavLink } from 'react-router-dom';
import "./publications.css";

function Publications({
    titleTop,
    imgsrc,
    altsrc,
    titleText,
    dateWithView,
    linkPrav,
    pText,
    btnText
}) {
    return (
        <section>
            <div className='publication-container'>
                <h2 className='title-top'>{titleTop}</h2>
                <ul className='publication-block'>
                    <li className="img-part">
                        <img src={imgsrc} alt={altsrc} width={744} height={388} className='publication-img' />
                    </li>
                    <li className="text-part">
                        <ul className='list-part'>
                            <li>
                                <h2 className="title">{titleText}</h2>
                            </li>
                            <li className="link-part">
                                <p className="date">{dateWithView}</p>
                                <p className="link">{linkPrav}</p>
                            </li>
                            <li>
                                <p className="text">{pText}</p>
                            </li>
                            <li>
                                <NavLink to='/page-2' className="btn">{btnText}</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className='publication-block'>
                    <li className="img-part">
                        <img src={imgsrc} alt={altsrc} width={744} height={388} className='publication-img' />
                    </li>
                    <li className="text-part">
                        <ul className='list-part'>
                            <li>
                                <h2 className="title">{titleText}</h2>
                            </li>
                            <li className="link-part">
                                <p className="date">{dateWithView}</p>
                                <p className="link">{linkPrav}</p>
                            </li>
                            <li>
                                <p className="text">{pText}</p>
                            </li>
                            <li>
                                <NavLink to='/page-2' className="btn">{btnText}</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className='publication-block'>
                    <li className="img-part">
                        <img src={imgsrc} alt={altsrc} width={744} height={388} className='publication-img' />
                    </li>
                    <li className="text-part">
                        <ul className='list-part'>
                            <li>
                                <h2 className="title">{titleText}</h2>
                            </li>
                            <li className="link-part">
                                <p className="date">{dateWithView}</p>
                                <p className="link">{linkPrav}</p>
                            </li>
                            <li>
                                <p className="text">{pText}</p>
                            </li>
                            <li>
                                <NavLink to='/page-2' className="btn">{btnText}</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Publications
