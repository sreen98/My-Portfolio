import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Navbar from "./common/Navbar";
import { Zoom } from "react-awesome-reveal";
const ContactInfo = () => {
  return (
    <>
      <Navbar />
      <div class="flex justify-center gap-10 p-5  items-center bg-backGround h-screen">
        <Zoom cascade>
          <a href="https://www.linkedin.com/in/sreenath-p-086531125">
            <FaLinkedinIn size="4rem" />
          </a>
          <a href="https://github.com/sreen98">
            <FaGithub size="4rem" />
          </a>{" "}
          <a href="mailto:sreenath.premnath@gmail.com">
            <FiMail size="4rem" />
          </a>
        </Zoom>

        {/* <div style={{ width: "50px", height: "30px" }}>
          <a href="tel:7907919037">
            <TbPhone size={40} />
          </a>
        </div> */}
      </div>
    </>
  );
};

export default ContactInfo;
