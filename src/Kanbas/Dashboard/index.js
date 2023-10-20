import React from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from 'react-icons/fi';
import db from "../Database";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="wd-secondary-frame">
            <h3 className="wd-name-header">Dashboard</h3>
            <hr />
            <h4 className="wd-name-header mt-0 ms-3">Published Courses ({courses.length})</h4>
            <hr />
            <div className="container-fluid ms-0 me-1">
                <div className="d-flex flex-row flex-wrap wd-dashboard-width">
                    {courses.map((course => (
                        <div className="col mb-4 me-4 wd-course-card">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225">
                                    <rect width="100%" height="100%" fill="rgb(17, 140, 255)"></rect>
                                </svg>
                                <div className="card-body text-nowrap wd-card-content">
                                    <p className="card-text mb-0">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="wd-card-title">
                                            {course.number} {course.name}
                                        </Link>
                                        <br />
                                        {course.number} {course.name} - Semester Full Term
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                                            <FiEdit2 />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )))}
                </div>
            </div>
            {/* <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        {course.name}
                    </Link>
                ))}
            </div> */}
        </div>
    );
}
export default Dashboard;