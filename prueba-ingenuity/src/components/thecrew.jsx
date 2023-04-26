import { useState } from "react";

import theCrew from "../rsrc/images/thecrew-img.png";
import together from "../rsrc/images/together.svg";
import togetherPlus from "../rsrc/images/togetherplus.svg";
import happyFace from "../rsrc/images/happyface.svg";

import onlineComunication from "../rsrc/images/online-communication.png";

import "../styles/thecrew.css";

function TheCrew() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(onlineComunication);
  };

  const handleMouseLeave = () => {
    setShowTooltip(theCrew);
  };

  return (
    <>
      <div className="mainCrew">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="titleTheCrew">
                <p className="titleThe">The </p>{" "}
                <p className="titleCrew"> crew.</p>
              </h1>
              <p className="textEntry">
                The Catholic community at Trinity participates in the
                sacramental life of the church and serves actively as a partner
                in community building and interreligious dialogue to promote
                understanding and tolerance on campus. <br /> <br /> Roman
                Catholic Campus Ministry is sponsored by the Archdiocese of
                Hartford Campus Ministry Office and Trinity College’s Office of
                Spiritual and Religious Life. It brings a vitally important
                dimension to life at Trinity College.
              </p>
              <br />
              <button className="btnLearnMore text-center">LEARN MORE</button>
            </div>
            <div className="col">
              <div className="imgTogether">
                {
                  <img
                    src={showTooltip}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                    width={600}
                    height={500}
                  />
                }
              </div>
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col">
                <img src={happyFace} alt="carita" className="imgIcon" />
                <p className="Number">165</p>
                <p className="textAfterNumber">
                  Happy freshman <br /> members
                </p>
                {/*<div className="lineVerticalCrew"></div>*/}
              </div>
              <div className="col">
                <img src={together} alt="together" className="imgIcon" />
                <p className="Number">13</p>
                <p className="textAfterNumber">Wise Senior members</p>
              </div>
              <div className="col">
                <img
                  src={togetherPlus}
                  alt="togetherplus"
                  className="imgIcon"
                />
                <p className="Number">173</p>
                <p className="textAfterNumber">The whole crew</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lineNextPageCrew"></div>
      </div>
    </>
  );
}

export default TheCrew;
