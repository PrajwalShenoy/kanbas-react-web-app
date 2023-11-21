import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${BASE_URL}/a5/welcome`}
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays  />
            {/* <SimpleAPIExamples /> */}
        </div>
    );
}
export default Assignment5;