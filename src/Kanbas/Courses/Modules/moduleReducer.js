import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    display: false,
    modules: [],
    module: {
        course: "",
        moduleName: "New Module",
        moduleDescription: "New Description"
    }
};

const moduleSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        toggleDisplay: (state) => {
            state.display = !state.display;
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter((m) => m.moduleName !== action.payload.moduleName);
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
        addModule: (state, action) => {
            const newModules = [
                action.payload,
                ...state.modules
            ];
            state.modules = newModules;
            state.module = {
                moduleName: "",
                moduleDescription: ""
            }
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((m) => {
                if (m._id === action.payload._id) {
                    return action.payload;
                }
                return m;
            });
            state.module = {
                moduleName: "",
                moduleDescription: ""
            }
        },
        setModules: (state, action) => {
            state.modules = action.payload;
        }
    }
});

export default moduleSlice.reducer;
export const { toggleDisplay, deleteModule, setModule, addModule, updateModule, setModules } = moduleSlice.actions;