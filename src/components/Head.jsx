import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { useState } from "react";
import { useEffect } from "react";
import { cacheResults } from "../utils/searchSlice";
import Error from "./Error";
import Body from "./Body";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpenFlag);

  const searchCache = useSelector((store) => store.search);

  const getSearchSugsestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const json = await response.json();
      setSuggestions(json[1] || []); // Fallback to an empty array if undefined

      // Update cache
      dispatch(cacheResults({ [searchQuery]: json[1] || [] }));
    } catch (error) {
      console.error(
        "Error fetching search suggestions:",
        error.message || error
      );
      setError(
        "Failed to fetch search suggestions. Please check your internet connection."
      );
    }
  };

  useEffect(() => {
    // make an api call after every key stroke
    // decline the api call it enhance the project and

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleClick = () => {
    if (isMenuOpen) return;
    dispatch(toggleMenu());
  };

  console.log("searchQuery", searchQuery);
  return (
    <>
      {error ? (
        <Error message={error} />
      ) : (
        <>
          <div className="sticky top-0 z-50  grid grid-flow-col p-5 m-2 shadow-lg z-10 bg-white">
            <div className="flex col-span-1">
              <button
                className="h-8 p-2"
                onClick={toggleMenuHandler}
                aria-label="Toggle menu" // Provides a description for screen readers
              >
                <img
                  className="h-8"
                  alt="menu"
                  src="https://e7.pngegg.com/pngimages/324/152/png-clipart-hamburger-button-menu-line-computer-icons-menu-company-parallel.png"
                />
              </button>

              <Link to={"/"} onClick={handleClick}>
                <img
                  className="h-12"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s"
                  alt="YouTube Logo"
                />
              </Link>
            </div>
            <div className=" col-span-10 px-10">
              <div>
                <input
                  className="w-1/2 border border-gray-400 p-2 rounded-l-full"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="enter something"
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setShowSuggestions(false)}
                />
                <button className="border border-gray-400 p-2  rounded-r-full w-25">
                  🔍
                </button>
              </div>
              <div>
                {searchQuery && showSuggestions && (
                  <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                      {suggestions.map((s) => (
                        <li
                          key={s}
                          className="py-2 px-3 shadow-sm hover:bg-gray-100"
                        >
                          🔍 {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <img
                className="h-8  col-span-1"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                alt="user"
              />
            </div>
          </div>
          <Body />
        </>
      )}
    </>
  );
};

export default Head;
