const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8  col-span-1"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
