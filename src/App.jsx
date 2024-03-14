import { useState } from "react";
import "./App.css";
import Cart from "./assets/components/Cart";
import Courses from "./assets/components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const totalCredit=15

function App() {
  const [carts, setCarts] = useState([]);
  const handleCourseSelect = (course) => {
    console.log(course);
    const newCarts = [...carts, course];
    const alreadyExit = carts.find((c) => c.id == course.id);
    const credits = carts.reduce((p, c) => p + c.credit, 0);
    if(credits+course.credit>totalCredit){
      toast.error("You have exceeded your credit limit")
      return
    }
    if (!alreadyExit) {
      setCarts(newCarts);
      toast.success('Successfully added the course')
    }else{
      toast.warn('Course Already Exist')
    }
  };

  return (
    <section className="]">
      <div className="container mx-auto max-w-screen-xl ">
        <h1 className="text-xl  text-center my-4">Course Registration</h1>
        <div className="flex justify-between  gap-4">
          <div className="col-span-8 md:w-[78%]">
            <Courses handleCourseSelect={handleCourseSelect}></Courses>
          </div>
          <div className="col-span-4  md:w-[20%]">
            <Cart carts={carts}></Cart>
          </div>
      <ToastContainer />
        </div>
      </div>
    </section>
  );
}

export default App;
