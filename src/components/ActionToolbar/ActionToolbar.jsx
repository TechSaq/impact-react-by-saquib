import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './ActionToolbar.module.css'

function ActionToolbar() {
    return (
        <div className={styles.container}>
            <Link to='/shortlisted' style={{textDecoration:'none', color:'inherit'}}>
                <Button
                    title='Shorlisted'
                    bgcolor='#009f00ba'
                    color='white'
                />
            </Link>
            <Link to='/rejected' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button
                    title='Rejected'
                    bgcolor='#ff3939d4'
                    color='white'
                />
            </Link>
        </div>
    )
}

export default ActionToolbar
