import StreamerShortCard from "components/StreamerShortCard/StreamerShortCard";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetStreamersQuery } from "redux/services/streamersApi";

const INITIAL_SEARCH_PARAMS: InitialSearchParams = {
  page: 1,
  limit: 20,
};

const StreamerList = () => {
  const [searchParams] = useSearchParams();
  const [currPage] = useState(
    Number(searchParams.get("page")) || INITIAL_SEARCH_PARAMS.page
  );

  const { data: streamersData } = useGetStreamersQuery<StreamersData>({
    limit: INITIAL_SEARCH_PARAMS.limit.toString(),
    offset: currPage
      ? ((currPage - 1) * INITIAL_SEARCH_PARAMS.limit).toString()
      : "0",
    name: searchParams.get("name") ?? undefined,
    pseudonym: searchParams.get("pseudonym") ?? undefined,
    streamingPlatforms: searchParams.get("streamingPlatforms") ?? undefined,
    orderBy: searchParams.get("orderBy") ?? "votes_difference",
    sortOrder: searchParams.get("sortOrder") ?? "DESC",
  });

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {streamersData?.data.map((streamer) => (
        <li key={streamer.id}>
          <StreamerShortCard data={streamer} />
        </li>
      ))}
    </ul>
  );
};

export default StreamerList;
