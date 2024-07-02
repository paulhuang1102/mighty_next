import { endpoint } from "@/lib/const/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
    endpoints: (builder) => ({
        getCats: builder.query<any, string>({
            query: () => "/facts",
        }),
    }),
});

export const { useGetCatsQuery } = apiSlice;