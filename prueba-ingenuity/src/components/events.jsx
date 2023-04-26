import groupOrange from "../rsrc/images/groupOrange.svg";
import event1 from "../rsrc/images/event1.jpg";
import event2 from "../rsrc/images/event2.jpg";
import event3 from "../rsrc/images/event3.jpg";
import event4 from "../rsrc/images/event4.jpg";

import "../styles/events.css";

function Events() {
  return (
    <>
      <div className="container eventsMain">
        <div className="logo">
          <img src={groupOrange} alt="" />
        </div>
        <h1 className="title">Events</h1>

        <br />

        <div className="row events">
          <button
            style={{
              backgroundImage: `url(${event1})`,
            }}
          >
            <div className="col">
              <p className="textEvent">EVENT 1</p>
              <div className="verticalLineEvents"></div>
            </div>
          </button>
          <button
            style={{
              backgroundImage: `url(${event2})`,
            }}
          >
            <div className="col">
              <p className="textEvent">EVENT 2</p>
              <div className="verticalLineEvents"></div>
            </div>
          </button>
          <button
            style={{
              backgroundImage: `url(${event3})`,
            }}
          >
            <div className="col">
              <p className="textEvent">EVENT 3</p>
              <div className="verticalLineEvents"></div>
            </div>
          </button>
          <button
            style={{
              backgroundImage: `url(${event4})`,
            }}
          >
            <div className="col">
              <p className="textEvent">EVENT 4</p>
              <div className="verticalLineEvents"></div>
            </div>
          </button>
        </div>
        <br />
        <div className="container moreEvents">
          <button>
            <p>MORE EVENTS</p>
          </button>
          <p>
            {"Let's have fun, join us in our events. Find out more here."}

            <div className="lineNextPage"></div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Events;
