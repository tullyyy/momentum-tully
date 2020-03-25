import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const angle = <FontAwesomeIcon icon={faAngleDown} />;
  const ellipsis = <FontAwesomeIcon icon={faEllipsisH} />;
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-left">
          <h1>
            Today <span className="icon-header">{angle}</span>
          </h1>
        </div>
        <span className="icon-header">{ellipsis}</span>
      </div>
    </header>
  );
};

export default Header;
