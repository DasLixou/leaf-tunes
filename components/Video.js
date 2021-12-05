import { useAtom } from "jotai";
import { currentTrackIDState } from "../atoms/video";

const Video = ({ video }) => {
  const [, setCurrentTrackId] = useAtom(currentTrackIDState);
  const { title, thumbnails } = video?.snippet;
  const { url } = thumbnails?.maxres;

  return (
    <div
      className="flex flex-col items-center cursor-pointer py-3 rounded-lg hover:scale-110 transition-transform duration-200 ease-in-out fix-scale-animation"
      onClick={() => setCurrentTrackId(video?.id)}
    >
      <img
        src={url}
        className="rounded-lg h-20 w-40 lg:h-30 lg:w-50 xl:h-[100px] xl:w-[180px] 2xl:h-40 2xl:w-60"
      />
      <h1 className="font-xl font-semibold ml-2 mb-2">{title}</h1>
    </div>
  );
};

export default Video;
