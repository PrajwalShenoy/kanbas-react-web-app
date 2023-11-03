import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {

    const sayHello = () => {
        alert("Hello World!");
    };

    return (
        <div className="container">
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <ParentStateComponent />
            <ArrayStateVariable />
            <ObjectStateVariable />
            <DateStateVariable />
            <StringStateVariables />
            <BooleanStateVariables />
            <Counter />
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
            <EventObject />
        </div>
    );
}

export default Assignment4;