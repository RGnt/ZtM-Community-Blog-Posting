import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	name: 'Guest',
	email: null,
	roles: [],
};

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.roles = action.payload.roles;
		},
		updateField: (state, action) => {
			state[action.payload.fieldName] = action.payload.fieldValue;
		},
		reset: () => initialState,
	},
});

const { actions, reducer } = user;

export const { setUser, updateField, reset } = actions;

export default reducer;
