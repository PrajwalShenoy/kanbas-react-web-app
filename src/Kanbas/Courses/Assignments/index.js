import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus } from 'react-icons/ai';
import db from "../../Database";
import "./index.css";


function Assignments() {
    const { courseId } = useParams();
    const allAssignments = db.assignments;
    const courseAssignments = allAssignments.filter((assignment) => (assignment.course === courseId));
    console.log(allAssignments.filter((assignment) => (assignment.course === courseId)));
    return (
        <div className="wd-assignment-main-panel mb-5">
            <div className="d-flex">
                <input type="text" className="form-control" placeholder="Search for Assignment" />
                <div className="btn-group wd-float-right">
                    <button type="button" className="btn btn-light d-flex wd-align-items-center">
                        <AiOutlinePlus className="fa-solid fa-plus me-1 wd-black-text" />
                        Group
                    </button>
                    <button type="button" className="btn btn-danger d-flex wd-align-items-center">
                        <AiOutlinePlus className="fa-solid fa-plus me-1 wd-white-text" />
                        Assignment
                    </button>
                    <select>
                        <option value="VAL1">Value 1</option>
                        <option value="GRADEBOOK" selected>
                            Edit Assiggnment Dates</option>
                        <option value="VAL3">Value 3</option>
                    </select>
                </div>
            </div>
            {
                allAssignments.filter((assignment) => (assignment.course === courseId))
                    .map((assignment) => (
                        assignment.assignments.map((assigns) => (
                            <div className="mt-4">
                                <div className="wd-assignment-list-heading">
                                    <div className="wd-assignment-list-heading-title">
                                        {assigns.type}
                                    </div>
                                    <div className="wd-assignment-list-heading-buttons">
                                        <div className="btn btn-light wd-border-radius">{assigns.percentage}</div>
                                        <select>
                                            <option value="EDIT" selected>Edit</option>
                                            <option value="VAL1">Speed grade</option>
                                            <option value="VAL1">Duplicate</option>
                                            <option value="VAL1">Delete</option>
                                            <option value="VAL1">Move To...</option>
                                            <option value="VAL1">Send To...</option>
                                            <option value="VAL1">Copy To...</option>
                                            <option value="VAL1">Share to Commons</option>
                                        </select>
                                    </div>
                                </div>
                                <ul className="list-group wd-assignment-list ps-0">
                                    {
                                        assigns.items.map((i) => (
                                            <li className="list-group-item wd-assignment-list-item">
                                                {/* <a className="wd-assignment-list-item-link" href={i.link}>
                                                    <div className="ps-4 wd-assignment-list-item-link-div">
                                                        {i.itemTitle}
                                                    </div>
                                                    <p className="text-muted ps-4">
                                                        {i.subText}
                                                    </p>
                                                </a> */}
                                                <Link key={i.id} to={`/Kanbas/Courses/${courseId}/assignments/${i.id}`} className="wd-assignment-list-item-link">
                                                    <div className="ps-4 wd-assignment-list-item-link-div">
                                                        {i.itemTitle}
                                                    </div>
                                                    <p className="text-muted ps-4">
                                                        {i.subText}
                                                    </p>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    ))
            }
        </div>
    );
}
export default Assignments;