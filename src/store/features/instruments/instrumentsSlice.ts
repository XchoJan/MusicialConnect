import {createSlice} from '@reduxjs/toolkit';

export const instrumentsState = {
    instruments: [],
};

const instrumentsSlice = createSlice({
    name: 'instruments',
    initialState: instrumentsState,
    reducers: {
        setInstruments: (state, action) => {
            state.instruments = action.payload;
        },
    },
});

export const {setInstruments} = instrumentsSlice.actions;
export default instrumentsSlice.reducer;
