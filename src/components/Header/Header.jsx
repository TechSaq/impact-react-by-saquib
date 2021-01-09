import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import { useStore } from '../../store';

function Header() {

    const { dispatch } = useStore();


    const [searchKey, setSearchKey] = useState('');
    const handleChange = (e) => {
        setSearchKey(e.target.value)
    }

    const handleClick = () => {
        window.history.pushState({search: searchKey}, '', `/search/${searchKey}`)
        dispatch({
            type: 'SEARCH',
            payload: searchKey
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <span>Impact</span>
                    </Link>
                    &nbsp;Job Portal
                </div>
                <SearchBox
                    onChange={handleChange}
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Header
