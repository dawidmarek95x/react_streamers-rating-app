import { Helmet } from "react-helmet";
import StreamerAdditionAccordion from "components/StreamerAdditionAccordion/StreamerAdditionAccordion";
import StreamerList from "components/StreamerList/StreamerList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetStreamersQuery } from "redux/services/streamersApi";
import Pagination from "components/Pagination/Pagination";

const INITIAL_SEARCH_PARAMS: InitialSearchParams = {
  page: 1,
  limit: 20,
};

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(
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

  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
    setCurrPage(page);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Streamer spotlight | Home</title>
        <meta
          name="description"
          content="A page about streamers where users can add their favorite streamers along with some relevant details about them and then other users can then vote for or against those streamers in order to support them by increasing their reach and count."
        />
      </Helmet>

      <StreamerAdditionAccordion />
      <StreamerList data={streamersData?.data ?? []} />
      <Pagination
        totalCount={streamersData?.totalResults || 0}
        pageSize={INITIAL_SEARCH_PARAMS.limit}
        currentPage={currPage}
        onPageChange={handlePageChange}
        maxVisiblePages={3}
      />
    </>
  );
};

export default HomePage;
