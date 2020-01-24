import React from "react";
import Sidebar from "./Sidebar";
import Tasks from "../Tasks";
const Content = () => {
  return (
    <div>
      <section className="content">
        <Sidebar />
        <Tasks />
      </section>
    </div>
  );
};

export default Content;
