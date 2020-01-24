import React from "react";
import { FaCog } from "react-icons/fa";

const Header = () => (
  <header className="header">
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Todoist" />
      </div>
      <div className="settings">
        <ul>
          <li data-test="quick-add-action" className="settings__add">
            +
          </li>
          <li data-test="dark-mode-action" className="settings__darkmode">
            <FaCog />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
