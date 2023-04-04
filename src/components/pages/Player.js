import React from "react";
import ReactPlayer from "react-player";
import "../Player.css";
//import '../../App.css';

const Player = () => (
  // <h1 className='services'>
  <div className="background-wrapper ">
    <div className="player-wrapper" id="player-fixer">
      <ReactPlayer
        url="https://cdn3.wowza.com/5/aEtqbDdJeWFiL1lG/live2/myStream/playlist.m3u8"
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  </div>
  /* </h1> */
);

export default Player;
