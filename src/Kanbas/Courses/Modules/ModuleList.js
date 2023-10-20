import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const modules = db.modules;
    return (
        <div className="d-flex">
            <div>
                <ul className="col">
                    <div className="row">

                        <div className=" d-flex justify-content-end">
                            <button type="button" className="btn btn-light"> Collapse All</button>
                            <button type="button" className="btn btn-light"> View Progress</button>
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Published
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Published All</a></li>
                                <li><a className="dropdown-item" href="#">Published None</a></li>
                            </ul>
                            <button type="button" className="btn btn-danger"><AiOutlinePlus /> Module</button>
                            <button type="button" className="btn btn-light">
                                <BsThreeDotsVertical />
                            </button>
                        </div></div>
                </ul>
                <div className="d-flex">
                    <div className="col">
                        {
                            modules
                                .filter((module) => (module.course === courseId))
                                .map((module) => (
                                    <ul>
                                        {
                                            module.content.map((material) => (
                                                <div className="wd-home-list list-group mb-4">
                                                    <li className="list-group-item list-group-item-light">{material.weekNumber}</li>
                                                    <ul className="list-group">
                                                        {
                                                            material.weekComponents.map((content) => (
                                                                <div>
                                                                    <li className="list-group-item">{content.partName}</li>
                                                                    <ul className="list-group">
                                                                        {
                                                                            content.partContent.map((partContent) => (
                                                                                <li className="list-group-item ps-5">{partContent}</li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                ))
                        }
                    </div>
                </div>
            </div>
            { pathname.includes("home") && 
                <div className="d-none d-lg-block col-lg-3 col-xl-2 bg-color-yellow me-5">
                    <div className="col">
                        <div className="row mb-2">
                            <h3 className="col-12 list-group-item list-group-item-light">Course Status</h3>
                            <div className="col-12">
                                <button type="button" className="btn btn-light">Unpublish</button>
                                <button type="button" className="btn btn-success">Published</button>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">Import Existing Content</button>
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">Import From Commons</button>
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">Choose Home Page</button>
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">View Course Stream</button>
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">New Announcement</button>
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">New Analytics</button>
                            <button type="button" className="col-12 btn btn-light wd-text-left-align">View Course Notifications</button>
                        </div>
                    </div>

                    <br />

                    <div className="list-group">
                        <h2 className="list-group-item list-group-item-light">Coming Up</h2>
                        <a href="#" className="list-group-item list-group-item-action wd-red-link">View Calendar</a>
                        <a href="#" className="list-group-item list-group-item-action wd-red-link">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                        <a href="#" className="list-group-item list-group-item-action wd-red-link">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
                        <a href="#" className="list-group-item list-group-item-action wd-red-link">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
                    </div>
                </div>
            } 
        </div>
    );
}
export default ModuleList;