import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
   tagTypes: ['User'],
   endpoints: (builder) => ({
      getUsers: builder.query({
         query: () => `users`,
         providesTags: ['User'],
      }),
   }),
});

export const { useGetUsersQuery } = usersApi;
