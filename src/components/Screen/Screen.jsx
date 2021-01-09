import React from 'react'
import styles from './Screen.module.css'
import Card from '../Card/Card'

function Screen({ users }) {

    const renderUsers = () => users.map(
        user => <Card key={user.id} id={user.id} name={user.name} image={user.Image} />
    )

    return (
        <div className={styles.container}>
            {
                renderUsers()
            }
        </div>
    )
}

export default Screen
