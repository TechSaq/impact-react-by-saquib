import { createContext, useContext, useEffect, useReducer } from "react"

const initialState = {
    users: [],
    shortlisted: [],
    rejected: [],
    searched: [],
    user: {}
}

const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INIT_STATE':
            return {
                ...state,
                users: action.payload
            }
        
        case 'GET_USER':
            const result = state?.users?.filter(user => {
                return user.id.toString().includes(action.payload)
            })
            return {
                ...state,
                user: result
            }
        
        case 'ADD_SHORTLIST_USER':
            return {
                ...state,
                shortlisted: [...state.shortlisted, {...action.payload}]
            }
        
        case 'ADD_REJECT_USER':
            return {
                ...state,
                rejected: [...state.rejected, {...action.payload}]
            }
        
        case 'SEARCH':
            const results = state?.users.filter(user => {
                return user.name.toLowerCase().includes(action.payload.toLowerCase())
            })
            return {
                ...state,
                searched: results
            }
    
        default:
            return state;
    }
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const get = async () => {
            let users = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json');
            users = await users.json();
            dispatch({
                type: 'SET_INIT_STATE',
                payload: users
            })
        }
        get();
    }, []);
    
    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

const useStore = () => useContext(store);

export {useStore, StateProvider}