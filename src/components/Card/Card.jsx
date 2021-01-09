import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({id, name, image}) {

    return (
        <div className={styles.container}>
            <Link to={`/${id}`} style={{textDecoration:'none', color:'inherit'}}>
                <img
                    src={image}
                />
                <p className={styles.name}>{ name }</p>
            </Link>
        </div>
    )
}

export default Card
