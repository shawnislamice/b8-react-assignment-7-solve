import { useEffect } from "react";
import Course from "./Course";
import { useState } from "react";


const Courses = ({ handleCourseSelect }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1  gap-4">
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          handleCourseSelect={handleCourseSelect}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
