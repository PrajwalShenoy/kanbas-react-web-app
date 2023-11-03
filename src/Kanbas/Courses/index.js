import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import CourseNavigation from "./CourseNavigation";
import ModuleList from './Modules/ModuleList';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';


function Courses() {
    // const { courseId } = useParams();
    // const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className="wd-secondary-frame">
            <div className="row">
                <BreadCrumbs />
            </div>
            <div className='d-flex'>
                <div className="col-auto">
                    <CourseNavigation />
                </div>
                <div className="col me-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="home" />} />
                        <Route path="home" element={<ModuleList />} />
                        <Route path="modules" element={<ModuleList />} />
                        <Route path="assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;