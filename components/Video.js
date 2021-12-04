const Video = video => {
  const { title, thumbnails } = video?.video?.snippet;
  const { url } = thumbnails?.maxres;

  return (
    <div className="flex flex-col items-center cursor-pointer py-3 rounded-lg hover:scale-125 transition transform duration-100 ease-out">
      <img
        src={url}
        className="rounded-lg h-20 w-40 lg:h-30 lg:w-50 2xl:h-40 2xl:w-60"
      />
      <h1 className="font-xl font-semibold ml-2 mb-2">{title}</h1>
    </div>
  );
};

export default Video;
