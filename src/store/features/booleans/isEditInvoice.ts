import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const isEditInvoice = {
	isEditInvoice: false,
}

const isEditInvoiceSlice = createSlice({
	name: "isEditInvoice",
	initialState: isEditInvoice,
	reducers: {
		setIsEditInvoice: (state, action) => {
			state.isEditInvoice = action.payload
		},
	},
})

export const { setIsEditInvoice } = isEditInvoiceSlice.actions
export default isEditInvoiceSlice.reducer
