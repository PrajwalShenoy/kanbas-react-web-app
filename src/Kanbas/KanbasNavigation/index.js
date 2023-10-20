import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBook, FaCalendarAlt, FaInbox, FaCreativeCommons } from 'react-icons/fa';
import { BsSpeedometer, BsClock } from 'react-icons/bs';
import { BiFilm } from 'react-icons/bi';
import { RiInformationLine } from 'react-icons/ri';

import "./index.css";

function KanbasNavigation() {
    const linkComponent = [
        { label: "Account", icon: FaUser, classStyle: "wd-user-icon " },
        { label: "Dashboard", icon: BsSpeedometer, classStyle: "wd-icon-class" },
        { label: "Courses", icon: FaBook, classStyle: "wd-icon-class" },
        { label: "Calendar", icon: FaCalendarAlt, classStyle: "wd-icon-class" },
        { label: "Inbox", icon: FaInbox, classStyle: "wd-icon-class" },
        { label: "History", icon: BsClock, classStyle: "wd-icon-class" },
        { label: "Studio", icon: BiFilm, classStyle: "wd-icon-class" },
        { label: "Commons", icon: FaCreativeCommons, classStyle: "wd-icon-class" },
        { label: "Help", icon: RiInformationLine, classStyle: "wd-icon-class" },
    ]
    const { pathname } = useLocation();
    return (
        <div className="wd-sidebar-column">
            <Link key={12345} to={`/Kanbas`} className="logo">
                <div>
                    <span>N</span>
                </div>
            </Link>
            {linkComponent.map((link, index) => (
                <Link key={index} to={`/Kanbas/${link.label}`} className= {pathname.includes(link.label)? "wd-sidebar-link-selected" : "wd-sidebar-link"}>
                    <div className="wd-sidebar-item">
                        {link.icon && React.createElement(link.icon, { className: link.classStyle })}
                        <span>{link.label}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;