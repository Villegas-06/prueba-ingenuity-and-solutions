import { useState } from "react";

import videoFullSize from "../rsrc/videos/fullsize.mp4";
import comments from "../rsrc/images/comments.svg";
import favorite from "../rsrc/images/favorite.svg";
import mouseImage from "../rsrc/images/mouse.svg";
import groups from "../rsrc/images/groups.svg";

import "../styles/video.css";

function Video() {
  const [imageSrc, setImageSrc] = useState(false);

  function handleMouseOver() {
    setImageSrc(groups);
  }

  function handleMouseLeave() {
    setImageSrc(favorite);
  }

  //detectar resolución de pantalla

  const screenWidth = screen.width;
  const screenHeight = screen.height;

  //alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)

  return (
    <>
      <div className="containerVideo">
        <div className="row">
          <div className="col">
            <div className="videoContainer">
              <video
                alt="videoPresentation"
                controls
                width={screenWidth}
                height={screenHeight}
              >
                <source src={videoFullSize} type="video/mp4" />
              </video>
              <div className="mouseImage">
                <img src={mouseImage} alt="" />
              </div>
              <div className="verticalLineVideo"></div>
              <button className="myButton">
                <img src={comments} alt="buttonComment" />
              </button>
              <button className="joinUs">
                {
                  <img
                    src={imageSrc}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                  />
                }
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
