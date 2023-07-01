import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "http://localhost:3001/";

const api =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development" || !apiKey
    ? "http://localhost:3001/"
    : `${apiKey}`;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${api}`,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
