import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
    courses: [],
    course: {
        _id: "",
        name: "",
        number: "",
        startDate: "",
        endDate: ""
    },
};

const dashboardSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            const newCourses = [
                ...state.courses,
                action.payload
            ];
            state.courses = newCourses;
            state.course = {
                _id: "",
                name: "",
                number: "",
                startDate: "",
                endDate: ""
            }
        },
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter((course) => course._id !== action.payload._id);
        },
        updateCourse: (state, action) => {
            state.courses = state.courses.map((course) => {
                if (course._id === action.payload._id) {
                    return action.payload;
                }
                return course;
            });
            state.course = {
                _id: "",
                name: "",
                number: "",
                startDate: "",
                endDate: ""
            }
        },
        setCourse: (state, action) => {
            state.course = action.payload;
        },
        setCourses: (state, action) => {
            state.courses = action.payload;
        }
    }
});

export const { addCourse, deleteCourse, updateCourse, setCourse, setCourses } = dashboardSlice.actions;
export default dashboardSlice.reducer;