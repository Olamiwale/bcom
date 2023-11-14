import React from "react";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="w-[90%] m-auto mt-5">
        <div className="py-4">
          <p className="py-8">
            Feel free to reach out via email or phone for any inquiries or
            collaboration opportunities. Connect with me on social media to stay
            updated on my professional journey.
          </p>
        </div>

        <div className=" w-[70%] m-auto flex pb-[40px] mt-9 justify-between">
          <a
            href="https://web.facebook.com/ogunmakinju.olawale/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={50} />
          </a>
          <a href="">
            {" "}
            <FaInstagram size={50} />
          </a>
          <a
            href="https://twitter.com/Paulolawalee"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaTwitterSquare size={50} />
          </a>

          <a
            href="https://www.linkedin.com/in/paul-olawale-9236b51a3/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
