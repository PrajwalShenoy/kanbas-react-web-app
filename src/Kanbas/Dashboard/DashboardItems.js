import { useDispatch } from "react-redux";
import { setCourse, deleteCourse } from "./dashboardReducer";

function DashboardItems({course}) {
    const dispatch = useDispatch();
    return(
        <li key={course._id} className="list-group-item">
            <div className="border p-1">
                <span className="me-3">{course.number}</span>
                <div className="float-end">
                    <button className="btn btn-primary me-2" onClick={() => dispatch(setCourse(course))}>
                        Edit </button>
                    <button className="btn btn-danger" onClick={() => dispatch(deleteCourse(course))}>
                        Delete </button>
                </div>
            </div>
        </li>
    );
}

export default DashboardItems;