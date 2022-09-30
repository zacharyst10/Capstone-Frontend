import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/zachary-stout10/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/zacharyst10" target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
