import { apiSlice } from "@/redux/app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials: { email: string; password: string }) => ({
				url: "/lifestyle/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		profile: builder.query({
			query: () => "/lifestyle/merchants/profile",
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useProfileQuery, useLoginMutation } = authApiSlice;
