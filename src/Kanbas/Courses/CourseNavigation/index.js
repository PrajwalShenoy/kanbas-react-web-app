import { Link, useParams, useLocation } from "react-router-dom";
import navLinks from "./navLinks.json";
import "./index.css";

function CourseNavigation() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="d-flex">
            <ul className="wd-secondary-column-list">
                {
                    navLinks.map((navLink, index) => (
                        <li key={index} className={pathname.includes(navLink.link)? "wd-secondary-column-item-selected wd-navigator-individual-item" : "wd-navigator-individual-item"}>
                            <Link key={courseId} to={`/Kanbas/Courses/${courseId}/${navLink.link}`} className="wd-navigator-individual-link">
                                {navLink.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CourseNavigation;