import { useSelector, useDispatch } from "react-redux";
import { addCourse, updateCourse, setCourse } from "./dashboardReducer";

function DashboardCourseForm() {
    const { course } = useSelector((state) => state.dashboardReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h2 className="wd-name-header mt-0">Manage courses</h2>
            <input type="text" className="form-control m-1" placeholder="Course Name" value={course.name}
                onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))} />
            <input type="text" className="form-control m-1" placeholder="Course Number" value={course.number}
                onChange={(e) => dispatch(setCourse({ ...course, number: e.target.value }))} />
            <input type="text" className="form-control m-1" placeholder="Course ID" value={course._id}
                onChange={(e) => dispatch(setCourse({ ...course, _id: e.target.value }))} />
            <div className="d-flex ms-1">
                <label className="form-control">Start Date</label>
                <input type="date" className="form-control"
                    onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value.toString() }))} />
            </div>
            <div className="d-flex ms-1">
                <label className="form-control">End Date</label>
                <input type="date" className="form-control"
                    onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value.toString() }))} />
            </div>
            <button className="btn btn-success m-1" onClick={() => dispatch(addCourse(course))}>Create Course</button>
            <button className="btn btn-warning m-1" onClick={() => dispatch(updateCourse(course))}>Update</button>
        </div>
    )
}

export default DashboardCourseForm;