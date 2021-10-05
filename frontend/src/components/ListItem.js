import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (memoir) => {
    return new Date(memoir.created).toLocaleDateString()
}


const ListItem = ({ memoir }) => {
    let body = memoir.body
    return (
        <Link to={`/memoir/${memoir.id}`}>
            <div className="memoirs-list-item">
                <h3>... {body.slice(0,23)}</h3>
                <p><span>{getTime(memoir)}</span></p>
            </div>
        </Link>
    )
}

export default ListItem
