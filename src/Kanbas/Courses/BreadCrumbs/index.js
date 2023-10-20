import React from "react";
import "./index.css";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";

function BreadCrumbs() {
    return (
        <div className="wd-extend-horizontal mt-3">
            <button className="wd-hamburger me-4" onClick={() => {}}>
                <FaBars />
            </button>
            <nav className="wd-main-breadcrumbs-nav" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link className="wd-main-breadcrumbs-nav-link" to="#">CS56610.11744.202310</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Content</li>
                </ol>
            </nav>
        </div>
    );
}

export default BreadCrumbs;