import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:5000';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (data) => ({
          url: '/api/users',
          method: 'POST',
          body: data,
        }),
      }),
      // Add other endpoints as needed
    }),
  });
  
  export const { useRegisterMutation } = api;
  
  export default api;