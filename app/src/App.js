import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

// App uses react-router-dom to navigate between pages. Default path "/" displays new videos
// VideoDetail is a video's page supplemented with VideoCard components for viewing
// ChannelDetail is a channel page supplemented with videos, channel card components
// SearchFeed is similar to Feed page but takes user query input to populate videos

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail />}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm" element={<SearchFeed />}/>
        </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
