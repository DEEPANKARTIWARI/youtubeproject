import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelCard, VideoCard } from "../components";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
