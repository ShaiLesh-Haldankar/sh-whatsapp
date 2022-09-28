import React from "react";
import "./App.scss";
import ChatList from "./Components/ChatList";
import { useState } from "react";
import ChatBox from "./Components/ChatBox";
export default function App() {
  const [chatList, setChatList] = useState(data);
  const [selectedChat, setSelectedChat] = useState({});
  
  return (
    <div className="main-wrapper">
      <ChatList setSelectedChat={setSelectedChat} selectedChat={selectedChat} chatList={chatList} />
      {selectedChat ? <ChatBox selectedChat={selectedChat} /> : null}
    </div>
  );
}

const data = [
  {
    name: "Betty",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: false,
    unreadCount: 2,
  },
  {
    name: "Evelyn ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: false,
    unreadCount: 3,
  },
  {
    name: "Melody ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Carmen ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Walsh",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Wallace ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: false,
    unreadCount: 8,
  },
  {
    name: "Rhonda Patterson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Darrel ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Clara Caldwell",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Beth Armstrong",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Thelma ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Thelma Goodman",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
  {
    name: "Thelma Goodman 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.",
    time: "11:34 PM",
    read: true,
    unreadCount: 0,
  },
];
