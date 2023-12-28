import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import "../assets/detailpage.css";

const Detailpage = ({ music }) => {
  return (
    <div className="sideview">
      <img src={music.imgUrl} alt="" />
      <h1>{music.title}</h1>
      <h2>{music.artist}</h2>

      <div className="playbtnDetail">
        <PlayCircleFilledIcon
          style={{ color: "green", fontSize: "60px" }}
          onClick={() => window.open(music.musicUrl, "_blank")}
        />
      </div>
    </div>
  );
};

export default Detailpage;
