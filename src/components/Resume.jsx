import React from "react";
import Navbar from "./Navbar";

function Resume() {
  const onButtonClick = () => {
    fetch("Sreenath_P.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Sreenath_P.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-3  gap-4  bg-backGround h-screen">
        <div className="px-5 py-50 text-center justify-center p-5">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Resume
          </h1>
          <h2>Please click below button to download my Resume</h2>
        </div>
        <div className="px-5 py-50 row-start-2  items-center justify-center p-5">
          <div className="text-center mb-10">
            <button
              class="bg-downloadButton1 hover:bg-blue-400 text-gray-800 font-bold m-3 py-2 px-4 rounded inline-flex items-center"
              onClick={() => onButtonClick()}
            >
              <img
                class="w-5 h-5 mr-2 "
                src="/img/download.png"
                alt="Rounded avatar"
              />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
