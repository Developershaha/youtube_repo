import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
      dispatch(
        addMessage([
          {
            name: "end",
          },
        ])
      );
    };
  }, []);
  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          // Disclaimer: Don't use indexes as keys
          chatMessages?.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Shahaji kokane",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96  border border-black rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
