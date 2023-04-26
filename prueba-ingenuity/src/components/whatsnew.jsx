import "../styles/whatsnew.css";

import groupOrange from "../rsrc/images/groupOrange.svg";
import event1 from "../rsrc/images/event1.jpg";
import event2 from "../rsrc/images/event2.jpg";
import event3 from "../rsrc/images/event3.jpg";
import event4 from "../rsrc/images/event4.jpg";

function WhatsNew() {
  return (
    <>
      <div className="container mainWhatsNew">
        <div className="containerMoreItems">
          <div className="logo">
            <img src={groupOrange} alt="" />
          </div>
          <div className="mainTitle">
            <h1 className="text-center titleWhatsNew">
              <p className="titleWhats"> {"What's "} </p>
              <p className="titleNew"> new </p>
            </h1>
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <p className="text-center textFindAbout">
                  Find out about the latest news about our club.
                </p>
              </div>
              <div className="col">
                <br />
                <p className="textLink">
                  https://codepen.io/choogoor/pen/YWBxrg
                </p>
              </div>
            </div>
            <br />
          </div>
          <div className="container">
            <div className="row whatsNew">
              <button
                style={{
                  backgroundImage: `url(${event1})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="col">
                  <p className="dateWhatsNew">
                    <p className="blog">BLOG 1</p>
                  </p>
                </div>
              </button>
              <button
                style={{
                  backgroundImage: `url(${event2})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="col">
                  <p className="dateWhatsNew">
                    <p className="blog">BLOG 2</p>
                  </p>
                </div>
              </button>
              <button
                style={{
                  backgroundImage: `url(${event3})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="col">
                  <p className="dateWhatsNew">
                    <p className="blog">BLOG 3</p>
                  </p>
                </div>
              </button>
              <button
                style={{
                  backgroundImage: `url(${event4})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="col">
                  <p className="dateWhatsNew">
                    <p className="blog">BLOG 4</p>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatsNew;
