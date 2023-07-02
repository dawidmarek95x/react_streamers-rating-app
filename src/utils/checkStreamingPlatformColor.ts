import { colors } from "@material-tailwind/react/types/generic";

export const setStreamingPlatformColor = (
  streamingPlatform: StreamingPlatform
) => {
  let color: colors;
  switch (streamingPlatform) {
    case "twitch":
      color = "deep-purple";
      break;

    case "youtube":
      color = "red";
      break;

    case "tiktok":
      color = "pink";
      break;

    case "kick":
      color = "green";
      break;

    case "rumble":
      color = "lime";
      break;

    default:
      color = "blue";
      break;
  }

  return color;
};
