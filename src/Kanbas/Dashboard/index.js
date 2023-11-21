import { React } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "./dashboardReducer";
import { useState, useEffect } from "react";
import DashboardCourseForm from "./DashboardCourseForm";
import DashboardItems from "./DashboardItems";
import axios from "axios";
import "./index.css";

function Dashboard() {
    const { courses } = useSelector((state) => state.dashboardReducer);
    const dispatch = useDispatch();
    // const [courses, setCourses] = useState([]);
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const URL = `${BASE_URL}/api/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        dispatch(setCourses(response.data));
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <div className="wd-secondary-frame">
            <h3 className="wd-name-header">Dashboard</h3>
            <hr />
            <h4 className="wd-name-header mt-0 ms-3">Published Courses ({courses.length})</h4>
            <hr />
            <div className="row me-3">
                <div className="col-9">
                    <div className="d-flex flex-row flex-wrap">
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
                <div className="col-3 border rounded">
                    <DashboardCourseForm className="mb-3" />
                    <ul className="list-group list-group-flush">
                        {
                            courses.map((course => <DashboardItems course={course} />))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;