import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../Dashboard/dashboardReducer";
import moduleReducer from "../Courses/Modules/moduleReducer";

const store = configureStore({
    reducer: {
        dashboardReducer,
        moduleReducer,
    }
});

export default store;