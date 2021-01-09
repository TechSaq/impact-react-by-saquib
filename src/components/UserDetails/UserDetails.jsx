import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../../store';
import Button from '../Button/Button';
import styles from './UserDetails.module.css'

function UserDetails() {

    const { state, dispatch } = useStore()
    const { users, user } = state;
    
    let match = useParams();

    useEffect(() => {
        if(users)
            dispatch({
                type: 'GET_USER',
                payload: match.id
            })

    }, [users])
    

    const item = user ? user[0] : null

    const handleShortlist = () => {
        dispatch({
            type: 'ADD_SHORTLIST_USER',
            payload: item
        })
        
    }
    
    const handleReject = () => {
        dispatch({
            type: 'ADD_REJECT_USER',
            payload: item
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img
                    src={item?.Image}
                />
            </div>
            <div className={styles.right}>
                <div className={styles.name}>{ item?.name }</div>
                <div className={styles.actions}>
                    <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
                        <Button
                            title='Shorlist'
                            bgcolor='#009f00ba'
                            color='white'
                            onClick={handleShortlist}
                        />
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button
                            title='Reject'
                            bgcolor='#ff3939d4'
                            color='white'
                            onClick={handleReject}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
