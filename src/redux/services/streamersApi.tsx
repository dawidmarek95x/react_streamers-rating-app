import { streamers } from "redux/endpoints";
import { apiSlice } from "redux/slices/apiSlice";

const apiWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Streamers"],
});

export const streamersApi = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    createStreamer: builder.mutation({
      query: ({ data }: StreamerPostData) => ({
        url: `${streamers}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Streamers"],
    }),

    getStreamers: builder.query({
      query: ({
        limit,
        offset,
        name,
        pseudonym,
        streamingPlatforms,
        orderBy,
        sortOrder,
      }: GetStreamersSearchParams) => {
        const params = new URLSearchParams({
          ...(limit && { limit }),
          ...(offset && { offset }),
          ...(name && { name }),
          ...(pseudonym && { pseudonym }),
          ...(streamingPlatforms && { streamingPlatforms }),
          ...(orderBy && { orderBy }),
          ...(sortOrder && { sortOrder }),
        });

        return {
          url: `${streamers}?${params.toString()}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      providesTags: ["Streamers"],
    }),

    getStreamer: builder.query({
      query: (id: string) => ({
        url: `${streamers}/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Streamers"],
    }),

    updateStreamerData: builder.mutation({
      query: ({ id, data }: StreamerUpdateData) => ({
        url: `${streamers}/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Streamers"],
    }),

    updateStreamerVotes: builder.mutation({
      query: ({ id, data }: StreamerUpdateVotesData) => ({
        url: `${streamers}/${id}/vote`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: ["Streamers"],
    }),
  }),
});

export const {
  useCreateStreamerMutation,
  useGetStreamersQuery,
  useGetStreamerQuery,
  useUpdateStreamerDataMutation,
  useUpdateStreamerVotesMutation,
} = streamersApi;
