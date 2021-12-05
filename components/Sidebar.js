import { SearchIcon } from "@heroicons/react/outline";
import { CakeIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="sm:w-[192px] lg:w-[240px] top-0 left-0 h-screen m-0 flex flex-col bg-indigo-50 pt-3 px-2 gap-y-3 overflow-x-hidden">
      {/** Search bar */}
      <div className="w-11/12 h-8 mx-auto items-center bg-gray-50 rounded-md flex">
        <SearchIcon className="w-5 ml-2.5 text-gray-700" />
        <input
          className="w-9/12 h-full block mr-3 ml-auto bg-transparent text-sm focus:outline-none rounded-md"
          placeholder="Search.."
          type="text"
        />
      </div>

      {/** Section */}
      <SidebarSection name="Your Library" />
    </div>
  );
};

export default Sidebar;

export const SidebarSection = ({ name }) => {
  return (
    <section>
      <h1 className="text-sm text-gray-500 font-semibold">{name}</h1>
      <div className="h-7 flex gap-x-1 items-center px-2">
        <CakeIcon className="h-4/5 text-white flex-shrink-0 bg-green-400 border-green-400 border-2 rounded-md" />
        <h1 className="text-sm text-gray-800">Birthday Playlist 1</h1>
      </div>
      <SidebarElement name="Songs for Research" color="indigo-50" Icon={SearchIcon} />
    </section>
  );
};

export const SidebarElement = ({ name, color, Icon }) => {
  return (
    <div className="h-7 flex gap-x-1 items-center px-2">
      <Icon className={`h-4/5 text-white flex-shrink-0 bg-${color} border-${color} border-2 rounded-md`} />
      <h1 className="text-sm text-gray-800">{name}</h1>
    </div>
  );
};
