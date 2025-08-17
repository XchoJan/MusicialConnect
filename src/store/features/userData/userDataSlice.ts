import {createSlice} from '@reduxjs/toolkit';

export const userDataState = {
    userData: false,
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState: userDataState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const {setUserData} = userDataSlice.actions;
export default userDataSlice.reducer;
