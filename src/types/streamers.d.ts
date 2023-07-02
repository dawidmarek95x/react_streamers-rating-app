type StreamingPlatform = "twitch" | "youtube" | "tiktok" | "kick" | "rumble";

interface InitialSearchParams {
  page: number;
  limit: number;
}

interface GetStreamersSearchParams {
  limit: string;
  offset: string;
  name?: string;
  pseudonym?: string;
  streamingPlatforms?: string;
  orderBy?: string;
  sortOrder?: string;
}

interface StreamerCreationData {
  name: string;
  pseudonym?: string;
  description: string;
  streamingPlatform: string;
  avatarUrl: string;
}

interface StreamerSubmitError {
  data: {
    statusCode: number;
    message: string;
    error: string;
  };
}

interface StreamerPostData {
  data: StreamerCreationData;
}

interface StreamerUpdateData extends StreamerPostData {
  id: number;
}

interface StreamersUpdateVote {
  positiveVotes?: number;
  negativeVotes?: number;
}

interface StreamerUpdateVotesData {
  id: number;
  data: StreamersUpdateVotes;
}

interface Streamer {
  id: number;
  name: string;
  pseudonym: string;
  description: string;
  streamingPlatform: StreamingPlatform;
  avatarUrl: string;
  positiveVotes: number;
  negativeVotes: number;
}

interface StreamersData {
  data: {
    data: Streamer[];
  };
}
