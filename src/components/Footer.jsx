import React, { useRef, useState } from "react";

function Footer({ footerRef }) {
  const emailRef = useRef(null);
  const pRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHidden = () => {
    if (hidden === false) {
      setHidden(true);
    } else {
      setHidden(false);
      pRef.current.innerHTML = "Copy to clipboard";
    }
    if (clicked === true) {
      setClicked(false);
    }
  };

  const handleCopy = () => {
    const copyText = emailRef.current.innerHTML.split(" ")[1];
    navigator.clipboard.writeText(copyText);
    pRef.current.innerHTML = "Copied to clipboard";
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div
      ref={footerRef}
      id="Links"
      className="flex flex-col md:flex-row items-center gap-3 bg-zinc-300 h-52 md:h-52 z-20"
    >
      <div className="flex px-8 md:px-10 gap-3 flex-col items-center md:items-start w-full md:w-1/2">
        <h4 className="text-base md:text-2xl font-semibold">Kristián Slovák</h4>
        <p className="text-xs md:text-base">
          My name is Kristián Slovák and this is my personalized CV webpage.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex items-center flex-col px-8 md:px-10 gap-3">
        <h4 className="text-base md:text-2xl font-semibold">Links & Contact</h4>
        <div className="flex flex-col md:flex-row">
          <ul className="w-full md:w-1/2 flex flex-row md:flex-col pl-10 gap-3 text-xs md:text-base">
            <li className="flex hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
              <img
                src={require("../assets/icons8-linkedin-24.png")}
                alt="LinkedIn"
              />
              <a
                href="https://www.linkedin.com/in/kristi%C3%A1n-slov%C3%A1k-58870124a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
              <img
                src={require("../assets/icons8-github-24.png")}
                alt="GitHub"
              />
              <a
                href="https://github.com/KristianSlovak"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="flex hover:text-sky-600 hover:scale-125 transition duration-100 w-fit">
              <img
                src={require("../assets/icons8-codewars-24.png")}
                alt="codewars"
              />
              <a
                href="https://www.codewars.com/users/KristianSlovak"
                target="_blank"
                rel="noreferrer"
              >
                Codewars
              </a>
            </li>
          </ul>
          <ul className="w-full md:w-1/2 flex flex-col md:flex-col pl-10 gap-1 md:gap-2 relative text-xs md:text-base">
            <li className="flex hover:cursor-pointer hover:text-sky-600 transition duration-100 w-fit">
              <img src={require("../assets/icons8-cv-24.png")} alt="CV" />
              <p>
                <a
                  href="https://drive.google.com/file/d/1MYmhD4LNLwZQPzhcjm8IsuY3PpCpSj8G/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </p>
            </li>
            <li
              onClick={handleCopy}
              onMouseEnter={handleHidden}
              onMouseLeave={handleHidden}
              className="flex items-center hover:cursor-pointer hover:text-sky-600 transition duration-100 w-fit"
            >
              <img
                src={require("../assets/icons8-mail-24.png")}
                alt="Mail"
                className="w-6 h-6"
              />
              <p ref={emailRef}>slovak.kristian1@gmail.com</p>
            </li>
            <p
              ref={pRef}
              className={`text-white absolute bottom-0 ${
                clicked
                  ? "bg-emerald-400 bg-opacity-20"
                  : "bg-black bg-opacity-20"
              }   w-fit px-4 text-sm ${hidden ? "visible" : "hidden"}`}
            >
              Copy to clipboard
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
