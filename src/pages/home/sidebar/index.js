import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import sidebarBanner from "../../../assets/images/sidebar-banner.png";
import sidebarCollapsedBanner from "../../../assets/images/sidebar-collapsed-banner.png";
import sidebarBg from "../../../assets/images/sidebar-bg.jpg";

import "./index.scss";

function Sidebar({ hidden, collapsed }) {
    const ismounted = useRef(false);
    useEffect(() => {
        ismounted.current = true;
        return () => {
            ismounted.current = false;
        };
    }, []);

    const ref = useRef(null);
    useEffect(() => {
        if (hidden) {
            hide();
        } else {
            show();
        }
    }, [hidden]);

    function hide() {
        ref.current.classList.add("home-sidebar-hidden");
    }
    function show() {
        ref.current.classList.remove("home-sidebar-hidden");
    }

    return (
        <div ref={ref} id="home-sidebar">
            <ProSidebar width="240px" collapsed={collapsed} toggled="CL" image={sidebarBg}>
                <SidebarHeader>
                    <div className="text-center py-2">
                        <img
                            src={collapsed ? sidebarCollapsedBanner : sidebarBanner}
                            style={collapsed ? { width: "40px", height: "40px" } : { width: "80px", height: "40px" }}
                        />
                    </div>
                </SidebarHeader>
                <Menu iconShape="circle">
                    <MenuItem icon={<FontAwesomeIcon icon={["fa", "gem"]} />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FontAwesomeIcon icon={["fa", "heart"]} />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
}

Sidebar.propTypes = {
    hidden: PropTypes.bool.isRequired,
    collapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
