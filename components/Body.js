import {
  AdjustmentsIcon,
  ExclamationCircleIcon,
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
  VolumeUpIcon as VolumeDownIcon
} from "@heroicons/react/outline";
import { VolumeUpIcon } from "@heroicons/react/solid";
import {
  isPlayingState,
  playerRangeState,
  volumeRangeState
} from "../atoms/music";
import { useState } from "react";
import { useAtom } from "jotai";
import Video from "./Video";
import { useEffect } from "react";
import { currentTrackIDState } from "../atoms/video";
import moment from "moment";

const Body = ({ playlistData }) => {
  const [playerRange, setPlayerRange] = useAtom(playerRangeState);
  const [volumeRange, setVolumeRange] = useAtom(volumeRangeState);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingState);
  const [currentTrackID] = useAtom(currentTrackIDState);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    playlistData?.items
      .filter(items => items?.id === currentTrackID)
      .map(data => setVideoData(data));
  }, [currentTrackID, playlistData]);

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const fastForward = () => {};
  const rewind = () => {};

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="flex justify-between bg-white">
        <div className="flex items-center w-72">
          <img
            className="h-[45px] w-[70px] md:h-[55px] md:w-[80px] rounded-lg m-3"
            src={videoData?.snippet?.thumbnails?.maxres?.url}
          />
          <div className="">
            <h3 className="text-gray-600 text-sm font-bold">
              {videoData?.snippet?.title}
            </h3>
            <h3 className="text-gray-400 text-xs">
              {moment(videoData?.snippet?.publishedAt).format("ll")}
            </h3>
          </div>
        </div>
        <div className="pt-2 px-[50px] flex-grow flex flex-col items-center">
          <div className="flex space-x-4">
            <RewindIcon onClick={rewind} className="header_button" />
            {isPlaying ? (
              <PauseIcon onClick={handlePlayPause} className="header_button" />
            ) : (
              <PlayIcon onClick={handlePlayPause} className="header_button" />
            )}
            <FastForwardIcon onClick={fastForward} className="header_button" />
          </div>
          <input
            type="range"
            className="w-full mt-2"
            min={0}
            max={100}
            value={playerRange}
            onChange={e => setPlayerRange(e.target.value)}
          />
        </div>
        <div className="hidden md:inline-flex items-center mr-4 space-x-2">
          <div className="flex items-center">
            <input
              type="range"
              min={0}
              max={100}
              value={volumeRange}
              onChange={e => setVolumeRange(e.target.value)}
            />
            {volumeRange < 50 ? (
              <VolumeDownIcon className="button_header_2 ml-2" />
            ) : (
              <VolumeUpIcon className="button_header_2 ml-2" />
            )}
          </div>
          <div className="flex items-center border-[0.1px] p-2 space-x-[2px]">
            <ExclamationCircleIcon className="button_header_2 border-r-[0.1px]" />
            <AdjustmentsIcon className="button_header_2" />
          </div>
        </div>
      </header>
      <hr className="border-t-[0.1px] border-gray-300" />
      <div className="p-[20px] md:p-[25px] lg:p-[30px] lg:px-[50px]">
        <p className="font-bold text-2xl lg:text-4xl">Listen Now</p>
        <hr className="border-t-[0.1px] border-gray-300 my-4" />
        <div className="flex justify-between font-semibold text-lg mr-2">
          <h1 className="">Up Next</h1>
          <h1 className="text-blue-300 cursor-pointer">See All</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 p-3 md:p-6 lg:p-8">
          {playlistData?.items.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
