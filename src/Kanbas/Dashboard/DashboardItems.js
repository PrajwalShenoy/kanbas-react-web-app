import { useDispatch } from "react-redux";
import { setCourse, deleteCourse } from "./dashboardReducer";
import axios from "axios";

function DashboardItems({ course }) {
    const dispatch = useDispatch();
    const URL = "http://localhost:4000/api/courses";
    const deleteCourseApi = async (course) => {
        const response = axios.delete(`${URL}/${course._id}`);
    };
    return (
        <li key={course._id} className="list-group-item">
            <div className="border p-1">
                <span className="me-3">{course.number}</span>
                <div className="float-end">
                    <button className="btn btn-primary me-2" onClick={() => dispatch(setCourse(course))}>
                        Edit </button>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(deleteCourse(course));
                        deleteCourseApi(course);
                    }}>
                        Delete </button>
                </div>
            </div>
        </li>
    );
}

export default DashboardItems;