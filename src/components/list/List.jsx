import ChatList from "./userInfo/Userinfo";
import "./list.css";
import Userinfo from "./chatList/ChatList";

const List = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default List;
