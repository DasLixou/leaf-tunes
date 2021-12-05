import { SearchIcon } from "@heroicons/react/outline";
import {
  CogIcon,
  AdjustmentsIcon,
  StatusOnlineIcon,
  ClockIcon,
  DownloadIcon,
  DesktopComputerIcon,
  DuplicateIcon
} from "@heroicons/react/solid";

const Podcasts = ({ Icon, label }) => {
  return (
    <div className="flex cursor-pointer hover:bg-gray-400 rounded-lg items-center">
      <Icon className="text-white bg-purple-300 h-7 w-7 p-[2px] rounded-lg" />
      <p className="text-xs ml-4">{label}</p>
    </div>
  );
};

const Library = ({ Icon, label }) => {
  return (
    <div className="flex cursor-pointer hover:bg-gray-400 rounded-lg items-center">
      <Icon className="text-white bg-blue-300 h-7 w-7 p-[2px] rounded-lg" />
      <p className="text-xs ml-4">{label}</p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="hidden md:inline sm:w-[192px] lg:w-[240px] top-0 left-0 h-screen m-0 flex flex-col bg-[#d1d6e6] pt-3 px-2 gap-y-3 overflow-x-hidden border-r-[0.1px] border-gray-400">
      <div className="w-11/12 h-8 mx-auto items-center bg-gray-50 rounded-md flex">
        <SearchIcon className="w-5 ml-2.5 text-gray-700" />
        <input
          className="w-9/12 h-full block mr-3 ml-auto bg-transparent text-sm focus:outline-none rounded-md"
          placeholder="Search.."
          type="text"
        />
      </div>
      <div className="space-y-7 ml-2">
        <div className="mt-4">
          <h1 className="text-sm text-gray-500 font-semibold my-2">
            Apple Podcasts
          </h1>
          <div className="space-y-2">
            <Podcasts Icon={CogIcon} label="Listen Now" />
            <Podcasts Icon={StatusOnlineIcon} label="Browser" />
            <Podcasts Icon={AdjustmentsIcon} label="Top Charts" />
          </div>
        </div>
        <div>
          <h1 className="text-sm text-gray-500 font-semibold my-2">Library</h1>
          <div className="space-y-2">
            <Library Icon={ClockIcon} label="Recently Added" />
            <Library Icon={DesktopComputerIcon} label="Shows" />
            <Library Icon={DuplicateIcon} label="Episodes" />
            <Library Icon={DownloadIcon} label="Downloaded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
