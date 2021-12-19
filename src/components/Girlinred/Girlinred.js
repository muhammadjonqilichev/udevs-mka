import React from 'react'
import './girlinred.css'

function GirlInRed({
    avatar,
    altSrc,
    fullName,
    career,
    bornDate,
    bornLocation
}) {
    return (
        <section>
            <div className="girl">
                <ul className="girl-block">
                    <li>
                        <img className="girl-img" src={avatar} alt={altSrc} width={200} height={200}/>
                    </li>
                    <li>
                        <h2 className="girl-name">{fullName}</h2>
                        <p className="girl-stuff"><span>Карьера</span>{career}</p>
                        <p className="girl-stuff"><span>Дата рождения</span>{bornDate}</p>
                        <p className="girl-stuff"><span>Место рождения</span> {bornLocation}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default GirlInRed
