import LinkedinLink from "./LinkedinLink.jsx";
import "../socialMediaLinks.scss";

const SocialMediaLinks = ({ socialMedia }) => {
  return (
    <div className="social-media">
      <ul className="social-media-links">
        <LinkedinLink link={socialMedia.socialMedia.linkedinLink} />
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
