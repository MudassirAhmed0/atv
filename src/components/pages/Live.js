import React from "react";
//import '../../App.css';
import "../Player.css";
import ReactPlayer from "react-player";

// Render a YouTube video player

export default function Live() {
  //return <h1 className='services'>SERVICES</h1>;
  /*return <h1 className='services'><div className='player-wrapper'><ReactPlayer className='react-player' url='https://cdn3.wowza.com/5/aEtqbDdJeWFiL1lG/live2/myStream/playlist.m3u8' playing controls  config={{ file: {
        attributes:{  style: { height: '350px', width: '720px' } }
      }}} /></div></h1>;*/

  return (
    <div className="background-wrapper ">
      <div className="player-wrapper">
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
  );
}
