import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

import Temp1 from "./Temp1";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/Channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
