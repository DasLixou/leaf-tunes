import {
  AdjustmentsIcon,
  ExclamationCircleIcon,
  FastForwardIcon,
  PauseIcon,
  RewindIcon,
  VolumeUpIcon
} from "@heroicons/react/outline";

const Body = () => {
  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="flex justify-between">
        <div className="flex items-center">
          <img
            className="h-[55px] w-[55px] rounded-lg m-3"
            src="/player_title_pic.png"
          />
          <div className="">
            <h3 className="text-gray-600 text-sm font-bold">8. Whiteout</h3>
            <h3 className="text-gray-400 text-xs">Blackout - Apr 30, 2019</h3>
          </div>
        </div>
        <div className="pt-2 px-[50px] flex-grow flex flex-col items-center">
          <div className="flex space-x-4">
            <RewindIcon className="header_button" />
            <PauseIcon className="header_button" />
            <FastForwardIcon className="header_button" />
          </div>
          <input type="range" className="w-full" min={0} max={100} />
        </div>
        <div className="flex items-center mr-4 space-x-2">
          <div className="flex items-center">
            <input type="range" />
            <VolumeUpIcon className="button_header_2 ml-2" />
          </div>
          <div className="flex items-center border-[0.1px] p-2 space-x-[2px]">
            <ExclamationCircleIcon className="button_header_2 border-r-[0.1px]" />
            <AdjustmentsIcon className="button_header_2" />
          </div>
        </div>
      </header>
      <hr className="border-t-[0.1px] border-gray-300" />
      <main className=""></main>
    </div>
  );
};

export default Body;
