import React, { useEffect, useState } from "react";
import YOUTUBE_API_VIDEOS from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_VIDEOS);
    const json = await data.json();
    setVideo(json?.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {video?.map((data) => (
        <Link key={data?.id} to={"/watch?v=" + data?.id}>
          <VideoCard info={data} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
