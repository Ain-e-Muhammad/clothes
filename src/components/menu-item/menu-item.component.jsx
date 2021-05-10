import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, image, size, history, match}) => {
    return(
        <div className={`${size} menu-item`} onClick={() => {
            history.push(`${match.url}${title}`)
        }} >
            <div 
            style={{
                backgroundImage: `url(${image})`
            }}
            className= 'background-image'/>

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)