import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../assets/musicItem.css";


const MusicItem = ({ music, handleItem }) => {
  

  return (
    <div className="musicItem" onClick={handleItem}>
      <div className="musicImage">
        <img src={music.imgUrl} alt="" />
      </div>
      <div className="musicinfo">
        <div className="title">{music.title}</div>
        <div className="artist">{music.artist}</div>
      </div>

      <div className="playbtn">
        <PlayCircleFilledIcon
          style={{ color: "blue", fontSize: "40px" }}
          onClick={() => window.open(music.musicUrl, "_blank")}
        />
      </div>
    </div>
  );
};

export default MusicItem;
