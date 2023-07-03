import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@material-tailwind/react";
import { STREAMER_INPUTS } from "data/streamers";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { setStreamingPlatformColor } from "utils/checkStreamingPlatformColor";

interface StreamerShortCardProps {
  data: Streamer;
}

const StreamerShortCard = ({ data }: StreamerShortCardProps) => {
  const navigate = useNavigate();

  const streamingPlatform = STREAMER_INPUTS.STREAMING_PLATFORM.find(
    (platform) => platform.value === data.streamingPlatform
  )?.label;

  return (
    <Card className="w-80 md-w-72 xl:w-64">
      <CardHeader floated={false} className="h-64 xl:h-56">
        <img
          className="relative object-cover"
          src={data.avatarUrl}
          alt={data.name}
        />
        <Chip
          className="absolute right-3 top-2"
          color={setStreamingPlatformColor(data.streamingPlatform)}
          value={streamingPlatform}
        />
      </CardHeader>
      <CardBody className="text-center py-2">
        <h4 className="mb-1">{data.name}</h4>
        <h5 className="mb-1">{data.pseudonym && `(${data.pseudonym})`}</h5>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="grid grid-cols-2 mb-3">
          <div className="flex justify-center items-center">
            <span className="text-lg leading-5 me-2">{data.positiveVotes}</span>
            <HiThumbUp size={24} className="fill-green-600" />
          </div>
          <div className="flex justify-center items-center">
            <span className="text-lg leading-5 me-2">{data.negativeVotes}</span>
            <HiThumbDown size={24} className="fill-red-600" />
          </div>
        </div>
        <button
          onClick={() => navigate(`/streamers/${data.id}`, { replace: true })}
          className="block btn-accent uppercase mx-auto"
        >
          Show more
        </button>
      </CardFooter>
    </Card>
  );
};

export default StreamerShortCard;
