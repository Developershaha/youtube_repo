const VideoCard = ({ info }) => {
  const { snippet } = info ?? {};
  const { channelTitle, thumbnails, title, publishedAt } = snippet ?? {};

  return (
    <div className="p-2 m-3 w-72 shadow-lg rouneded-lg">
      <img className="rounded-lg" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
