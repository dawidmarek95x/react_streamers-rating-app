import StreamerShortCard from "components/StreamerShortCard/StreamerShortCard";

interface StreamerListProps {
  data: Streamer[];
}

const StreamerList = ({ data }: StreamerListProps) => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-x-3 gap-y-4 justify-items-center mb-5">
        {data?.map((streamer) => (
          <li key={streamer.id}>
            <StreamerShortCard data={streamer} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default StreamerList;
