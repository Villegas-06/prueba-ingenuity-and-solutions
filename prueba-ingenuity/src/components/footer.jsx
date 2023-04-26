import logoFooter from "../rsrc/images/logo.svg";
import emailSvg from "../rsrc/images/email.svg";
import telSvg from "../rsrc/images/telefono.svg";

import "../styles/footer.css";

function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div className="row">
          <div className="col-5 text-center">
            <div className="infoLogo">
              <img src={logoFooter} alt="" />
              <p>
                Follow us on our social networks and don´t miss our latest news
                and events.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="socialFooter">
              <p className="emailFooter">
                <img src={emailSvg} alt="" />
                <p>servicio@lurdes.co</p>
              </p>
              <p className="telFooter">
                <img src={telSvg} alt="" />
                <p>+57 (322) 374 6739</p>
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="suscribe">
              <p className="textFooter">SUBSCRIBE TO OUR NEWSLETTER!</p>
              <form action="#" className="formSuscribeFooter">
                <input type="email" placeholder="Your Email" />
                <div className="containerButtonSend">
                  <button type="submit"> SEND </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyFooter text-center">
          <div className="containerFinalFooter">
            <p className="textFooter">
              Terms & Conditions | Privacy Policy <br /> © Copyright 2020 - 2021
              Ingenuity & Solutions LLC All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
