const apiKey = "http://localhost:3001/";

const api =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development" || !apiKey
    ? "http://localhost:3001/"
    : `${apiKey}`;

export const streamers = `${api}streamers`;
