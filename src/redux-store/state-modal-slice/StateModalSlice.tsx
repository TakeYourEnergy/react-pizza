import { createSlice } from '@reduxjs/toolkit';

interface IStateModal {
	firstStateModal: boolean;
	textModal: 'популярности' | 'цене' | 'алфавиту' | undefined;
}

const initialState: IStateModal = {
	firstStateModal: false,
	textModal: 'популярности',
};

export const stateModalSlice = createSlice({
	name: '@@stateModal',
	initialState,
	reducers: {
		setStateModal: state => {
			state.firstStateModal = !state.firstStateModal;
		},
		setTextModal: (state, action) => {
			state.textModal = action.payload;
		},
	},
});

export const { setStateModal, setTextModal } = stateModalSlice.actions;
