import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../assets/searchbar.css";
import { BASE_URL } from "./Util";
import MusicItem from "./MusicItem";
import Detailpage from "./Detailpage";

const MusicSearch = () => {
  //   const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [title, setTitle] = useState("");
  const [musiclist, setmusiclist] = useState([]);
  const [detail, setdetail] = useState(false);
  const [error, seterror] = useState(null);
  const [music, setmusic] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/musictracks`);
      const json = await response.json();
      console.log(json);
      const data = json.data;
      console.log("data=>", data);
      setmusiclist(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchDatabykey = async (keyword) => {
    try {
      const response = await fetch(`${BASE_URL}api/musictracks/key/${keyword}`);
      const json = await response.json();
      console.log(json);
      const data = json.response;
      console.log("data=>", data);
      setmusiclist(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  // const handleClick = (link) => {
  //   window.open(link, "_blank");
  // };
  const handletitleSearch = (e) => {
    setTitle(e.target.value);
    // e.target.value.trim().length===0 ? fetchData() : fetchDatabykey(e.target.value);
    if (e.target.value.trim().length === 0) {
      fetchData();
      setdetail(false);
    } else {
      fetchDatabykey(e.target.value);
    }
  };
  const handleSearch = () => {
    if (title.trim().length === 0) {
      seterror(true);
    } else {
      seterror(null);

      fetchDatabykey(title);
    }
  };

  const handleItem = (music) => {
    setdetail(true);
    setmusic(music);
    console.log("fire");
  };

  return (
    <>
      <div className="container">
        <div id="sidecontent">
          <div id="searchbar">
            <input
              placeholder="Search by word or title of music"
              type="text"
              value={title}
              onChange={handletitleSearch}
            />
            <div id="search" onClick={handleSearch}>
              <SearchIcon style={{ color: "white" }} />
            </div>
          </div>
          {error && <div id="fielderror">field cannot be empty</div>}
          <div id="precaution">
            Please search by any word of music or type capital letter of first
            letter of the music title
          </div>

          <div className="musiclist">
            {musiclist.map((music) => (
              <MusicItem
                handleItem={handleItem.bind(this, music)}
                music={music}
                key={music._id}
              />
            ))}
          </div>
        </div>

        <div id="detail">
          {detail === false ? (
            <div className="sideview">
              <img
                src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/07/11/1063888-gaana-app-boycott.jpg?im=Resize=(1280,720)"
                alt=""
              />
              <h1>Vite React Music Player</h1>
              <h2>Play your desire music and be happy</h2>
            </div>
          ) : (
            <Detailpage music={music} />
          )}
        </div>
      </div>
    </>
  );
};

export default MusicSearch;
