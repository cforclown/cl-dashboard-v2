import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

function Header({ onToggleSidebar }) {
    function onToggleSidebarClick() {
        if (!onToggleSidebar) return;
        onToggleSidebar();
    }
    return (
        <div id="home-header">
            <div className="home-header-left">
                <div className="home-header-menu-btn" onClick={onToggleSidebarClick}>
                    <FontAwesomeIcon icon={["fa", "align-justify"]} />
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    onToggleSidebar: PropTypes.func.isRequired,
};

export default Header;
