import React from "react";

export default function ChatList({ chatList, selectedChat, setSelectedChat }) {
  return (
    <div className="chat-list-main">
      {/* Chat header */}
      <div className="chat-list-header">
        <div className="clh-left">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFnE9f4WmuGFg/profile-displayphoto-shrink_200_200/0/1648813191486?e=1659571200&v=beta&t=EijrOcWfWwh9fw1ERQVUXCmJG_Xvixo_zx5gnEIKqVA" />
        </div>
        <div className="clh-right">
          <button>
            <img src="https://img.icons8.com/tiny-glyph/16/ffffff/experimental-menu-2-tiny-glyph.png" />
          </button>
        </div>
      </div>
      <div className="chat-list-search">
        <div>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="chat-list-wrapper">
        {chatList.map((item) => (
          <div
            onClick={() => setSelectedChat(item)}
            className={`chat-card ${
              item.name === selectedChat.name ? "opened-chat" : ""
            } ${item.read ? "chat-read" : "chat-unread"}`}
          >
            <div className="chat-card-profile">
              <img src="https://img.icons8.com/officel/80/000000/user.png" />
            </div>
            <div className="chat-card-content">
              <div className="ccc-upper">
                <h6>{item.name}</h6>
                <span>11:34 PM</span>
              </div>
              <div className="ccc-lower">
                <p>{item.text}</p>
                {!item.read && item.unreadCount > 0 ? <button>1</button> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
