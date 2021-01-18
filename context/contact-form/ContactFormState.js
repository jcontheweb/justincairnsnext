import React, { createContext, useReducer } from 'react'
import { ContactFormReducer } from './ContactFormReducer'

const initialState = {
    expanded: false
}

export const ContactFormContext = createContext(initialState)

export const ContactFormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ContactFormReducer, initialState)

    const open = () => {
        dispatch({
            type: 'FORM_OPEN'
        })
    }

    const close = () => {
        dispatch({
            type: 'FORM_CLOSE'
        })
    }

    return (<ContactFormContext.Provider value={{
        expanded: state.expanded,
        open,
        close
    }}>
        {children}
    </ContactFormContext.Provider>)
}