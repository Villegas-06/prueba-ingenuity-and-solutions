import groupOrange from "../rsrc/images/groupOrange.svg";
import memoriesOne from "../rsrc/images/memoriesone.png";
import memoriesTwo from "../rsrc/images/thecrew-img.png";
import memoriesThree from "../rsrc/images/memoriesthree.png";
import memoriesFour from "../rsrc/images/memoriesfour.png";
import memoriesFive from "../rsrc/images/memoriesfive.png";
import memoriesSix from "../rsrc/images/memoriessix.png";
import happyMan from "../rsrc/images/happyman.png";
import spotifyPlaylist from "../rsrc/images/spotifyplaylist.png";

import "../styles/memories.css";

function Memories() {
  return (
    <>
      <div className="container memoriesMain">
        <div className="logo">
          <img src={groupOrange} alt="" />
        </div>
        <h1 className="titleMemories">Memories</h1>

        <div className="container memories">
          <div className="row">
            <div className="col-4">
              <img src={memoriesOne} alt="" />
            </div>
            <div className="col-4">
              <img src={memoriesTwo} alt="" height={285} width={400} />
            </div>
            <div className="col-3">
              <img
                src={memoriesThree}
                alt=""
                style={{
                  marginLeft: "1px",
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <img src={memoriesFour} alt="" height={285} width={450} />
            </div>
            <div className="col-4">
              <img
                src={memoriesFive}
                alt=""
                height={285}
                width={400}
                style={{
                  marginLeft: "50px",
                }}
              />
            </div>
            <div className="col-3">
              <img
                src={memoriesSix}
                alt=""
                style={{
                  marginLeft: "40px",
                }}
              />
            </div>
          </div>
          <div className="showMoreMemories">
            <button>MORE MEMORIES</button>
          </div>
        </div>
      </div>
      <div className="newManSoundTrack">
        <div className="row">
          <div className="col-6">
            <div className="textNewMan">
              <p>Newman</p>
              <p>Soundtrack</p>
            </div>
            <div className="imgHappyMen">
              <img src={happyMan} alt="" />
              <div className="containerText">
                <p className="newMan">Newman</p>
                <br />
                <p className="soundTrack">Soundtrack</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="imgSpotify">
              <img src={spotifyPlaylist} alt="" style={{ borderRadius: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memories;
