import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    surnameError: '',
    nameError: '',
    patronymicError: '',
}

const inputErrorsSlice = createSlice ({
    name: 'inputErrors',
    initialState,
    reducers: {
        setSurnameError: (state, action) => {
            state.surnameError = action.payload
        },
        setNameError: (state, action) => {
            state.nameError = action.payload
        },
        setPatronymicError: (state, action) => {
            state.patronymicError = action.payload
        },
    },
})

export const {
    setSurnameError,
    setNameError,
    setPatronymicError,
} = inputErrorsSlice.actions

export const selectInputErrors = state => state.inputErrors 

export default inputErrorsSlice.reducer