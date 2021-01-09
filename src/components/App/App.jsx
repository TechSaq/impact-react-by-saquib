import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useStore } from '../../store'
import ActionToolbar from '../ActionToolbar/ActionToolbar'
import Header from '../Header/Header'
import Screen from '../Screen/Screen'
import UserDetails from '../UserDetails/UserDetails'
import styles from './App.module.css'

function App() {
    const { state } = useStore()
    const { users, shortlisted, rejected, searched } = state;

    const [data, setData] = useState([])

    useEffect(() => {
        if (searched) {
            setData(searched);
        }
		else {
            setData(users);
		}
	}, [users, searched]);

    return (
        <div className={styles.container}>
            <Header />
            <Switch>
                <Route exact path="/shortlisted">
                    <Screen users={ shortlisted }/>
                </Route>
                <Route exact path="/rejected">
                    <Screen users={ rejected }/>
                </Route>
                <Route exact path="/search/:key">
                    {
                        data.length
                            ? <div className={styles.search_heading}>Searched Users</div>
                            : <div className={styles.search_heading}>Sorry... No results found</div>
                    }
                    <Screen users={ data }/>
                </Route>
                <Route exact path="/:id">
                    <UserDetails/>
                </Route>
                <Route exact path='/'>
                    <ActionToolbar />
                    <Screen users={ users }/>
                </Route>
            </Switch>
        </div>
    )
}

export default App
