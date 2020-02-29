import { combinedReducers } from "redux";
import courses from "./CourseReducer";

const rootReducer = combinedReducers({
  courses
});

export default rootReducer;
