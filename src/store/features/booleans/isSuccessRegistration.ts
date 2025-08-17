import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const isSuccessRegistration = {
    isSuccessRegistration: false,
}

const setIsSuccessRegistrationSlice = createSlice({
    name: "isSuccessRegistration",
    initialState: isSuccessRegistration,
    reducers: {
        setIsSuccessRegistration: (state, action) => {
            state.isSuccessRegistration = action.payload
        },
    },
})

export const { setIsSuccessRegistration } = setIsSuccessRegistrationSlice.actions
export default setIsSuccessRegistrationSlice.reducer
