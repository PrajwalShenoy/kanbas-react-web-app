import React from "react";
import { Routes, Route } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
    return (
        <Provider store={store}>
            <div className="d-flex" >
                <div>
                    <KanbasNavigation />
                </div>
                <div style={{flexGrow: "1"}}>
                    <Routes>
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard/>} />
                        <Route path="Courses/:courseId/*" element={<Courses/>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;