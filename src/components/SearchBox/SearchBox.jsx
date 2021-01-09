import React from 'react'
import styles from './SearchBox.module.css'
import search from './search.svg'

function SearchBox({ onChange, onClick }) {

    
    
    return (
        <div className={styles.container}>
            <input type='text' placeholder='Search' 
                onChange={onChange}
            />
            <img src={search} alt=""
                onClick={onClick}
            />
        </div>
    )
}

export default SearchBox
