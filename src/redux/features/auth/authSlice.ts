import { RootState } from '@/redux/app/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
	user: Record<string, unknown> | null;
	accessToken: string | null;
	refreshToken: string | null;
}

export interface AuthResponseType {
	status: boolean;
	data: {
		user: Record<string, unknown>;
		accessToken: string;
		refreshToken: string;
	};
}

const initialState: AuthState = {
	user: null,
	accessToken: null,
	refreshToken: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<AuthState>) => {
			const { user, accessToken, refreshToken } = action.payload;
			state.user = user;
			state.accessToken = accessToken;
			state.refreshToken = refreshToken;
		},
		fetchProfile: (state, action: PayloadAction<AuthState>) => {
			state.user = action.payload.user;
		},
		logOut: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
