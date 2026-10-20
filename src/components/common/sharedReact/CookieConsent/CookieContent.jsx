import { useEffect, useState } from "react";
import "./cookieConsent.scss";

const CookieConsent = () => {
  const [cookies, setCookies] = useState("unk");
  const [isMounted, setIsMounted] = useState(false);

  const handleAccept = () => {
    setCookies("granted");
    // accepted cookie lasts for a year
    let d = new Date();
    let oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
    document.cookie =
      "tda-cookie-consent=granted; expires=" + oneYear + "; path=/";
    consentGranted();
  };

  const handleDecline = () => {
    setCookies("denied");
    // declined cookie only lasts for the session
    document.cookie = "tda-cookie-consent=denied; path=/";
  };

  // this waits to load the cookie banner until the component is mounted
  // so that there is not a component flash
  useEffect(() => {
    setIsMounted(true);
    // get cookie approval after component is mounted
    setCookies(getCookieConsent());
  }, []);

  const banner = isMounted ? (
    <div
      className={`${cookies === "granted" || cookies === "denied" ? "hidden" : ""} cookie-banner-wrapper`}
    >
      <div id="cookie-banner" className={`cookie-banner-container`}>
        <div className="cookie-banner-container-wrapper">
          <p className="">
            We use cookies to make your experience even better and to analyze
            our website traffic. By clicking "Accept", you consent to our use of
            cookies. To learn more, see our{" "}
            <a className="" href="/privacy-policy/">
              privacy policy.
            </a>
          </p>

          <div className="">
            <button className="" onClick={handleAccept}>
              Accept
            </button>
            <button className="" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
        <div className="cookie-banner-overlay"></div>
      </div>
    </div>
  ) : null;

  return banner;
};

export default CookieConsent;
