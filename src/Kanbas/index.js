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
                        <Route path="/Kanbas/Account" element={<Account/>} />
                        <Route path="/Kanbas/Account/users" element={<UserTable/>} />
                        <Route path="/Kanbas/Account/users/:id/users" element={<UserTable/>} />
                        <Route path="/Kanbas/Account/:id" element={<Account/>} />
                        <Route path="/Kanbas/Dashboard" element={<Dashboard/>} />
                        <Route path="/Kanbas/Courses/:courseId/*" element={<Courses/>} />
                        <Route path="/Kanbas/signin" element={<Signin/>} /> 
                        <Route path="/Kanbas/signup" element={<Signup/>} /> 
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;