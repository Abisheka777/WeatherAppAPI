import ToDoManage from "./ToDoManage";
import ToDoListing from "./ToDoListing";
import { useState } from "react";
function ToDoContainer() {

    const [activityArr, setactivityArr] = useState(
        [
            {
                id: 1,
                activity: "Wake up at 6.00"
            },

            {
                id: 2,
                activity: "Breakfast at 8.30"

            },

            {
                id: 3,
                activity: "Study Time Starts at 10.00"
            }
            ,
            {
                id: 4,
                activity: "Lunch at  1.30 "
            }

        ]
      
       
    )

    return (
        <div className="flex gap-2">
            <ToDoManage activityArr={activityArr} setactivityArr={setactivityArr}/>
            <ToDoListing activityArr={activityArr} setactivityArr={setactivityArr}/>

          
        </div>

    );
}
export default ToDoContainer;