import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAlbum, IPost, IUser } from '../interfaces';

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https:/jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], any>({
            query: () => '/users',
        }),
        getPostsByUser: builder.query<IPost[], number>({
            query: (userId: number) => ({ url: '/posts', params: { userId: userId } }),
        }),
        getAlbumsByUser: builder.query<IAlbum[], number>({
            query: (userId: number) => ({ url: '/albums', params: { userId: userId } }),
        }),
    }),
});

export const { useGetAllUsersQuery, useGetPostsByUserQuery, useGetAlbumsByUserQuery } = jsonplaceholderApi;
