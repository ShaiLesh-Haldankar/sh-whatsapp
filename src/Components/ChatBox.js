import React from "react";

export default function ChatBox({selectedChat}) {
  return (
    <div className="chat-box-main">
      <div className="chat-box-header">
        <div className="cbh-left">
          <img src="https://c4.wallpaperflare.com/wallpaper/24/23/796/portrait-display-vertical-pattern-digital-art-wallpaper-preview.jpg" />
          <div>
            <h6>{selectedChat.name}</h6>
            <p>Online</p>
          </div>
        </div>
        <div className="cbh-right">
          <button>
            {" "}
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" />
          </button>
          <button>
            <img src="https://img.icons8.com/tiny-glyph/16/ffffff/experimental-menu-2-tiny-glyph.png" />
          </button>
        </div>
      </div>
      <div className="chat-box-body">

      </div>
      <div className="chat-box-footer">
          <textarea placeholder="Type message"/>
          <button>
          <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-send-user-interface-kmg-design-glyph-kmg-design.png"/>
          </button>

      </div>
    </div>
  );
}
