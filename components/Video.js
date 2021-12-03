const Video = video => {
  const { title, thumbnails } = video?.video?.snippet;
  const { url } = thumbnails?.maxres;

  return (
    <div className="flex flex-col items-center cursor-pointer border p-2 border-gray-600 hover:scale-125 transition transform duration-100 ease-out">
      <img src={url} className="rounded-lg h-50 w-[780px]" />
      <h1 className="font-xl font-semibold ml-2">{title}</h1>
    </div>
  );
};

export default Video;
