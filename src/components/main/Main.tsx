import React from "react";

const Main = () => {
  return (
    <main className="main">
      <div className="info-content">
        <h1>
          I'm Guido <span>Juliano</span>
        </h1>
        <p>Web developer, electronic technical and student.</p>
        <a href="/Portfolio/archivos/CV_MAZZUCHINI.pdf" download>
          <button className="download-cv">Download CV</button>
        </a>
      </div>
      <div className="logo animate__animated animate__pulse animate__infinite">
        <h1>
          G<span>J</span>
        </h1>
      </div>
    </main>
  );
};

export default Main;
