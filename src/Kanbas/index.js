import React from "react";
import { Routes, Route } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { Provider } from "react-redux";
import store from "./store";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
    return (
        <Provider store={store}>
            <div className="d-flex" >
                <div>
                    <KanbasNavigation />
                </div>
                <div style={{flexGrow: "1"}}>
                    <Routes>
                        <Route path="Account" element={<Account/>} />
                        <Route path="Account/users" element={<UserTable/>} />
                        <Route path="Account/users/:id/users" element={<UserTable/>} />
                        <Route path="Account/:id" element={<Account/>} />
                        <Route path="Dashboard" element={<Dashboard/>} />
                        <Route path="Courses/:courseId/*" element={<Courses/>} />
                        <Route path="signin" element={<Signin/>} /> 
                        <Route path="signup" element={<Signup/>} /> 
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;