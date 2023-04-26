import onlineComunication from "../rsrc/images/online-communication.png";

import "../styles/joinus.css";

function JoinUs() {
  return (
    <>
      <div className="conatiner">
        <div className="joinUsMain">
          <div className="row">
            <div className="col-6">
              <h1 className="mainTitle">
                <p className="join">Join</p>
                <p className="us">us.</p>
              </h1>
              <div className="textAfterJoinUs">
                <p>
                  In the sea of life, there is nothing to fear if you have God
                  as your captain. Join our crew!
                </p>
              </div>
              <div className="form text-center">
                <form action="#" id="formJoinUs">
                  <input type="text" placeholder="Full Name" />
                  <br />
                  <input type="email" placeholder="Email Address" />
                  <br />
                  <input type="tel" placeholder="Cell Phone Number" />
                  <br />
                  <input
                    type="text"
                    placeholder="Message"
                    className="msgFormJoinUs"
                  />
                  <br />
                  <div className="buttonSend">
                    <button type="submit"> SEND </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6">
              <div className="containerImg">
                <img src={onlineComunication} alt="" width={500} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
