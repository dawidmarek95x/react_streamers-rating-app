import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useUpdateStreamerVotesMutation } from "redux/services/streamersApi";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import avatarPlaceholder from "../../assets/images/AvatarPlaceholder.jpg";

interface StreamerDescriptionCardProps {
  data: Streamer;
}

const StreamerDescriptionCard = ({ data }: StreamerDescriptionCardProps) => {
  const [updateStreamerVotes] = useUpdateStreamerVotesMutation();

  const handleVoteClick = async (vote: "positive" | "negative") => {
    switch (vote) {
      case "positive":
        await updateStreamerVotes({
          id: data?.id.toString(),
          data: { positiveVotes: data?.positiveVotes + 1 },
        });
        break;

      case "negative":
        await updateStreamerVotes({
          id: data?.id.toString(),
          data: { negativeVotes: data?.negativeVotes + 1 },
        });
        break;

      default:
        break;
    }
  };

  return (
    <Card className="flex-column sm:flex-row w-full max-w-[48rem] mx-auto my-5">
      <CardHeader
        shadow={false}
        floated={false}
        className="sm:w-1/2 sm:shrink-0 m-0 sm:rounded-r-none"
      >
        <img
          src={data?.avatarUrl ?? avatarPlaceholder}
          alt={data?.name}
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <h4 className="mb-2">{data?.name}</h4>
        <h6 className="uppercase mb-4">{data?.pseudonym}</h6>
        <p className="font-normal mb-8">{data?.description}</p>

        <div className="flex justify-center">
          <Button
            onClick={() => handleVoteClick("positive")}
            color="green"
            className="flex items-center justify-items-center me-4"
          >
            <HiThumbUp size={24} className="fill-white" />
          </Button>
          <Button
            onClick={() => handleVoteClick("negative")}
            color="red"
            className="flex items-center justify-items-center"
          >
            <HiThumbDown size={24} className="fill-white" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default StreamerDescriptionCard;
