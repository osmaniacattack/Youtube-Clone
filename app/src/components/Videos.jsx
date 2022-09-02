// This component receives a list of videos as props from a parent component's get request
// The component will map to dynamically render Videos or Channels 

import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack direction={direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
      {videos[0].map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
