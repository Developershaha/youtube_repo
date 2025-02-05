import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpenFlag);

  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="relative p-5 shadow-lg w-48 bg-white rounded-lg">
      <ul>
        <Link to={"/"}>Home</Link>
        <li>Short</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subcription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
