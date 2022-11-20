import { createSlice } from '@reduxjs/toolkit';

interface IStateModal {
	firstStateModal: boolean;
	textModal: string;
}

const initialState: IStateModal = {
	firstStateModal: false,
	textModal: 'популярности',
};

export const stateModalSlice = createSlice({
	name: '@@stateModal',
	initialState,
	reducers: {
		setStateModal: (state, action) => {
			state.firstStateModal = action.payload;
		},
		setTextModal: (state, action) => {
			state.textModal = action.payload;
		},
	},
});

export const { setStateModal, setTextModal } = stateModalSlice.actions;
