import { useState } from "react";
import style from "./app.module.scss";
import Content from "./components/content/Content";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className={`${style.app}`}>
      <Navbar />
      <Main />
      <Content />
    </div>
  );
}

export default App;
