const GOOGLE_API_KEY = "AIzaSyC8r_YCrbBZ0z5ayrZhSXPIOPHMVdIp0fs"; // Replace with your valid API key
const YOUTUBE_API_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

export default YOUTUBE_API_VIDEOS;
export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  // 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';
export const LIVE_CHAT_COUNT = 25;
