import React from "react";
//import '../../App.css';
import "../Player.css";
import ReactPlayer from "react-player";

export default function DVR() {
  return (
    <div className="background-wrapper">
      <div className="player-wrapper">
        <ReactPlayer
          url="http://almoosawi.co:1935/live/_definst_/myStream/playlist.m3u8?DVR"
          className="react-player"
          playing
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  );
}
