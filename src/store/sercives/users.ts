import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
   tagTypes: [],
   endpoints: (builder) => ({
      getUsers: builder.query({
         query: () => `users`,
      }),
   }),
});

// Export hooks for usage in functional components
export const { useGetUsersQuery } = usersApi;
