import {
	BaseQueryApi,
	FetchArgs,
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

/* This code is creating a `baseQuery` function that can be used to make API requests. It is using the
`fetchBaseQuery` function from the `@reduxjs/toolkit/query/react` library to create this function. */
const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_BASE_URL,
	prepareHeaders: (headers, {}) => {
		headers.set('x-api-key', import.meta.env.VITE_APP_API_KEY);
		return headers;
	},
});

/**
 * @param {string | FetchArgs} args - The first parameter `args` can be either a string or an object of
 * type `FetchArgs`. It represents the endpoint or the request to be made to the server.
 * @param {BaseQueryApi} api - `api` is an object that represents the BaseQueryApi instance. It is used
 * to dispatch actions and access the current state of the store.
 * @param {Record<string, unknown> | undefined} extraOptions - `extraOptions` is an optional parameter
 * of type `Record<string, unknown>` that can be used to pass additional options to the `baseQuery`
 * function. These options can include things like headers, query parameters, or other configuration
 * options that may be needed for the specific API being called. `
 * @returns The `baseQueryWithReauth` function returns a Promise that resolves to the result of the
 * `baseQuery` function.
 */

const baseQueryWithReauth = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: Record<string, unknown> | undefined
) => {
	let result = await baseQuery(args, api, (extraOptions = {}));
	return result;
};

/* This code is creating an instance of the `createApi` function from the
`@reduxjs/toolkit/query/react` library. The `createApi` function is used to define an API that can
be used to make requests to a server. */
export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
