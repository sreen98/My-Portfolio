import { SocialIcon } from "react-social-icons";
import { TbPhone } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const ContactInfo = () => {
  return (
    <>
      <div
        class="flex  justify-center gap-10 p-5  items-center bg-gray-700 h-screen"
        style={{ backgroundClop: "#2C3333" }}
      >
        <a href="https://www.linkedin.com/in/sreenath-p-086531125">
          <FaLinkedinIn size="3rem" />
        </a>
        <a href="https://github.com/sreen98">
          <FaGithub size="3rem" />
        </a>{" "}
        <a href="mailto:sreenath.premnath@gmail.com">
          <FiMail size="3rem" />
        </a>
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
