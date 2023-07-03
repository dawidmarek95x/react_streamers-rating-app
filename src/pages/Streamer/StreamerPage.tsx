import { Spinner } from "@material-tailwind/react";
import StreamerDescriptionCard from "components/StreamerDescriptionCard/StreamerDescriptionCard";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStreamerQuery } from "redux/services/streamersApi";

const StreamerPage = () => {
  const navigate = useNavigate();
  const { streamerId } = useParams();

  const {
    data: streamerData,
    isLoading,
    isSuccess,
    isError,
  } = useGetStreamerQuery<StreamerData>(streamerId ?? "0");

  useEffect(() => {
    if (isError) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line
  }, [isError]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Streamer spotlight
          {streamerData?.data ? ` | ${streamerData?.data.name}` : ""}
        </title>
        <meta
          name="description"
          content={
            streamerData?.data
              ? ` | ${streamerData?.data.description}`
              : "A page about streamers where users can add their favorite streamers along with some relevant details about them and then other users can then vote for or against those streamers in order to support them by increasing their reach and count."
          }
        />
      </Helmet>

      {isLoading && (
        <Spinner color="gray" className="w-14 h-14 text-accent mx-auto my-4" />
      )}
      {isSuccess && <StreamerDescriptionCard data={streamerData?.data} />}

      <button
        onClick={() => navigate("/", { replace: true })}
        className="block btn-accent-outline uppercase mx-auto"
      >
        Go to Home Page
      </button>
    </>
  );
};

export default StreamerPage;
