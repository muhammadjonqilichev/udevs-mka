import React from 'react'
import './lastNews.css'

function LastNews({
  title,
  imgFirst,
  imgSecond,
  imgThird,
  altSrc,
  dateView,
  textSrc
}) {
  return (
    <>
      <div className="news">
        <h2 className="news-title">{title}</h2>
        <div className="news-img-block">
          <img className="block-img" src={imgFirst} alt={altSrc}  width={124} height={124}/>
          <img className="block-img" src={imgSecond} alt={altSrc} width={124} height={124}/>
          <img className="block-img" src={imgThird} alt={altSrc}  width={124} height={124}/>
          <img className="block-img" src={imgFirst} alt={altSrc}  width={124} height={124}/>
          <img className="block-img" src={imgThird} alt={altSrc}  width={124} height={124}/>
        </div>
        <ul className="list">
          <li className="list-item">
            <img className="item-img" src={imgSecond} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgSecond} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgFirst} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgFirst} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgThird} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgSecond} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgThird} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgFirst} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgSecond} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgThird} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgFirst} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
          <li className="list-item">
            <img className="item-img" src={imgSecond} alt={altSrc} width={360} height={300} />
            <p className="item-date">{dateView}</p>
            <h3 className="item-text">{textSrc}</h3>
          </li>
        </ul>
      </div>
    </>
  )
}

export default LastNews
