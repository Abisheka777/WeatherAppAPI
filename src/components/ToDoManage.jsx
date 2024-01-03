import { useState } from "react";


function ToDoManage(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr
    const [newActivity,setnewActivity]=useState("")
function handleChange(event){
    setnewActivity(event.target.value)

    }
function addActivity(){
    setactivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
    setnewActivity("")
}
    return (

        <div id="manage" className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium ">Manage Activities !</h1>
            <div className="flex gap-2">
                <input value={newActivity} onChange={handleChange}   type="text" className="bg-[#F4EDEF] border border-black rounded" placeholder="What Next? "  />
                <button onClick={addActivity} className="border border-black rounded bg-black text-white p-3"> Add </button>
            </div>

        </div>

    );
}
export default ToDoManage;