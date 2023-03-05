import React from "react";

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
      <div className="flex">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
              Resume
            </h1>
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={() => onButtonClick()}
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"></div>
        </div>
      </div>
    </>
  );
}

export default Resume;
