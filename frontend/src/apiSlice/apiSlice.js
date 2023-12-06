import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:5000';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL,credentials: 'include',}),
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (data) => {
          return {
            url: '/api/users',
            method: 'POST',
            body: data,
          };
        },
      }),
      logout: builder.mutation({
        query: () => {
          return {
            url: '/api/users/logout',
            method: 'POST',
          };
        },
      }),
      login:builder.mutation({
        query:(data)=>{
          return{
            url:'/api/users/auth',
            method:'POST',
            body:data,
          }
        }
      }),
      validateUser:builder.mutation({
        query:(data)=>{
          return{
            url:'/api/users/validate',
            method:'GET',
          }
        }
      })
      
    }),
  });
  
  export const { useRegisterMutation,useLogoutMutation,useLoginMutation,useValidateUserMutation } = api;
  
  export default api;