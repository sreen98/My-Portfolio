import { SocialIcon } from "react-social-icons";
import { TbPhone } from "react-icons/tb";
const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          bottom: "0",
          color: "white",
          fontSize: " 25px",
        }}
      >
        <div class="flex  gap-12 p-5 justify-end items-center bg-cyan-300 h-20">
          <SocialIcon url="https://www.linkedin.com/in/sreenath-p-086531125" />
          <SocialIcon url="https://github.com/sreen98" />
          <SocialIcon url="mailto:sreenath.premnath@gmail.com" />
          <SocialIcon network="whatsapp" url="tel:7907919037" />
          {/* <div style={{ width: "50px", height: "30px" }}>
          <a href="tel:7907919037">
            <TbPhone size={40} />
          </a>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
