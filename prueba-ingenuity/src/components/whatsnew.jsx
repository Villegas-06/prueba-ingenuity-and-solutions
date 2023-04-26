import { useState } from "react";

import groupOrange from "../rsrc/images/groupOrange.svg";
import event1 from "../rsrc/images/event1.jpg";
import event2 from "../rsrc/images/event2.jpg";
import event3 from "../rsrc/images/event3.jpg";
import event4 from "../rsrc/images/event4.jpg";

import "../styles/whatsnew.css";

function WhatsNew() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);
  const [showTooltip4, setShowTooltip4] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleMouseOver2 = () => {
    setShowTooltip2(true);
  };

  const handleMouseLeave2 = () => {
    setShowTooltip2(false);
  };

  const handleMouseOver3 = () => {
    setShowTooltip3(true);
  };

  const handleMouseLeave3 = () => {
    setShowTooltip3(false);
  };

  const handleMouseOver4 = () => {
    setShowTooltip4(true);
  };

  const handleMouseLeave4 = () => {
    setShowTooltip4(false);
  };

  return (
    <>
      <div className="mainWhatsNew">
        <div className="containerMoreItems">
          <div className="logo">
            <img src={groupOrange} alt="" />
          </div>
          <div className="mainTitle ">
            <h1 className="text-center titleWhatsNew">
              <p className="titleWhats"> {"What's "} </p>
              <p className="titleNew"> new </p>
            </h1>

            <br />
          </div>

          <div className="row">
            <div className="col"></div>
            <div className="col">
              <p className="text-center textFindAbout">
                Find out about the latest news about our club.
              </p>
            </div>
            <div className="col">
              <br />
              <p className="textLink">https://codepen.io/choogoor/pen/YWBxrg</p>
            </div>
          </div>

          <div className="container">
            <div className="row conatainerBlogWhatsNew">
              <div
                className="col"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <img src={event1} alt="" width={300} height={400} />
                <div className="textWhatsNew">
                  <p className="dateWhatsNew">
                    <p className="dayWhatsNew">
                      12
                      <p className="monthYearWhatsNew">Aug 2016</p>
                    </p>
                  </p>
                  {showTooltip && (
                    <div className="containerBlog" id="event1">
                      <p className="nameWhatsNew">Jane doe</p>
                      <p className="blogWhatsNew">BLOG 1</p>
                      <p className="contentWhatsNew">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <button className="seeMoreWhatsNew"> SEE MORE </button>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="col"
                onMouseOver={handleMouseOver2}
                onMouseLeave={handleMouseLeave2}
              >
                <img src={event2} alt="" width={300} height={400} />
                <div className="textWhatsNew">
                  <p className="dateWhatsNew">
                    <p className="dayWhatsNew">
                      12
                      <p className="monthYearWhatsNew">Aug 2016</p>
                    </p>
                  </p>
                  {showTooltip2 && (
                    <div className="containerBlog" id="event2">
                      <p className="nameWhatsNew">Jane doe</p>
                      <p className="blogWhatsNew">BLOG 1</p>
                      <p className="contentWhatsNew">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <button className="seeMoreWhatsNew"> SEE MORE </button>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="col"
                onMouseOver={handleMouseOver3}
                onMouseLeave={handleMouseLeave3}
              >
                <img src={event3} alt="" width={300} height={400} />
                <div className="textWhatsNew">
                  <p className="dateWhatsNew">
                    <p className="dayWhatsNew">
                      12
                      <p className="monthYearWhatsNew">Aug 2016</p>
                    </p>
                  </p>
                  {showTooltip3 && (
                    <div className="containerBlog" id="event3">
                      <p className="nameWhatsNew">Jane doe</p>
                      <p className="blogWhatsNew">BLOG 1</p>
                      <p className="contentWhatsNew">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <button className="seeMoreWhatsNew"> SEE MORE </button>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="col"
                onMouseOver={handleMouseOver4}
                onMouseLeave={handleMouseLeave4}
              >
                <img src={event4} alt="" width={300} height={400} />
                <div className="textWhatsNew">
                  <p className="dateWhatsNew">
                    <p className="dayWhatsNew">
                      12
                      <p className="monthYearWhatsNew">Aug 2016</p>
                    </p>
                  </p>
                  {showTooltip4 && (
                    <div className="containerBlog" id="event4">
                      <p className="nameWhatsNew">Jane doe</p>
                      <p className="blogWhatsNew">BLOG 1</p>
                      <p className="contentWhatsNew">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                      <button className="seeMoreWhatsNew"> SEE MORE </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lineNextPageWhatsNew"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatsNew;
