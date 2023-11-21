import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useParams, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDisplay, deleteModule, setModule, addModule, updateModule, setModules } from "./moduleReducer";
import { createModule, deleteModuleApi, updateModuleApi } from "./client";
import { useEffect } from "react";
import "./index.css";
import axios from "axios";

function ModuleList() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const { display } = useSelector((state) => state.moduleReducer);
    const { modules } = useSelector((state) => state.moduleReducer);
    const { module } = useSelector((state) => state.moduleReducer);
    const dispatch = useDispatch();
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const URL = `${BASE_URL}/api/courses`;
    const findCourseByCourseId = async (courseId) => {
        const response = await axios.get(`${URL}/${courseId}`);
        if (response) {
            dispatch(setModules(response.data));
        }
    };
    useEffect(() => {
        findCourseByCourseId(courseId);
    }, []);
    return (
        <div>
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
                                    <li><Link className="dropdown-item" to="#">Published All</Link></li>
                                    <li><Link className="dropdown-item" to="#">Published None</Link></li>
                                </ul>
                                <button type="button" className="btn btn-danger" onClick={() => dispatch(toggleDisplay())}><AiOutlinePlus /> Module</button>
                                <button type="button" className="btn btn-light">
                                    <BsThreeDotsVertical />
                                </button>
                            </div>
                        </div>
                    </ul>
                    <div className="d-flex">
                        <div className="col">
                            {display &&
                                <form className="container ms-3 mb-4 border rounded">
                                    <h3 className="wd-name-header">Edit Modules</h3>
                                    <div className="d-block">
                                        <input type="text" className="form-control m-1" placeholder="Module Name" value={module.moduleName}
                                            onChange={(e) => {
                                                dispatch(setModule({ ...module, moduleName: e.target.value }))
                                            }} />
                                        <textarea className="form-control m-1" rows="3" placeholder="Module Description" value={module.moduleDescription}
                                            onChange={(e) => {
                                                dispatch(setModule({ ...module, moduleDescription: e.target.value }))
                                            }} />
                                    </div>
                                    <div>
                                        <div>
                                            <button className="btn btn-success m-1" onClick={
                                                () => {
                                                    createModule(courseId, module);
                                                    dispatch(addModule({ ...module, course: courseId },));
                                                }
                                            }>Add</button>
                                            <button className="btn btn-warning m-1" onClick={
                                                () => {
                                                    updateModuleApi(module._id, module);
                                                    dispatch(updateModule({ ...module, course: courseId }));
                                                }
                                            }>Update</button>
                                        </div>
                                    </div>
                                </form>
                            }
                            <ul>
                                {
                                    modules.map((m) => (
                                        <div className="wd-home-list list-group mb-4">
                                            <li className="list-group-item list-group-item-light">{m.moduleName}</li>
                                            <ul className="list-group">
                                                <li className="list-group-item">{m.moduleDescription}</li>
                                            </ul>
                                            {
                                                display &&
                                                <div className="d-flex">
                                                    <button className="btn btn-danger m-1"
                                                        onClick={() => {
                                                            deleteModuleApi(m._id);
                                                            dispatch(deleteModule(m));
                                                        }}>Delete</button>
                                                    <button className="btn btn-success m-1"
                                                        onClick={() => dispatch(setModule(m))}>Edit</button>
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                                {/* {
                                    modules.filter((m) => m.course === courseId).map((m) => (
                                        <div className="wd-home-list list-group mb-4">
                                            <li className="list-group-item list-group-item-light">{m.moduleName}</li>
                                            <ul className="list-group">
                                                <li className="list-group-item">{m.moduleDescription}</li>
                                            </ul>
                                            {
                                                display &&
                                                <div className="d-flex">
                                                    <button className="btn btn-danger m-1" 
                                                        onClick={() => dispatch(deleteModule(m))}>Delete</button>
                                                    <button className="btn btn-success m-1" 
                                                        onClick={() => dispatch(setModule(m))}>Edit</button>
                                                </div>
                                            }
                                        </div>
                                    ))
                                } */}
                            </ul>
                        </div>
                    </div>
                </div>
                {pathname.includes("home") &&
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
                            <Link to="#" className="list-group-item list-group-item-action wd-red-link">View Calendar</Link>
                            <Link to="#" className="list-group-item list-group-item-action wd-red-link">Lecture CS4550.12631.202410 Sep 7 at 11:45am</Link>
                            <Link to="#" className="list-group-item list-group-item-action wd-red-link">Lecture CS4550.12631.202410 Sep 11 at 11:45am</Link>
                            <Link to="#" className="list-group-item list-group-item-action wd-red-link">CS5610 06 SP23 Lecture Sep 11 at 6pm</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
export default ModuleList;