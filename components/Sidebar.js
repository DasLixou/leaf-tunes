import { SearchIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="sm:w-[192px] lg:w-[240px] top-0 left-0 h-screen m-0 flex flex-col bg-indigo-50 pt-3">
      {/** Search bar */}
      <div className="w-4/5 h-8 mx-auto items-center bg-gray-50 rounded-md flex">
        <SearchIcon className="w-5 ml-2.5 text-gray-700" />
        <input className="w-9/12 h-full block mr-3 ml-auto bg-transparent focus:outline-none rounded-md" placeholder="Search.." type="text" />
      </div>
    </div>
  );
};

export default Sidebar;
