import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const COURSES_URL = `${BASE_URL}/api/courses`;
const MODULES_URL = `${BASE_URL}/api/modules`;

export const findModulesForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const deleteModuleApi = async (moduleId) => {
    const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};

export const updateModuleApi = async (moduleId, module) => {
    const response = await axios.put(`${MODULES_URL}/${moduleId}`, module);
    return response.data;
}