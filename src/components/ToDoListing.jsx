import ToDoItem from "./ToDoItem";
function ToDoListing(props) {
        
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div id="listing" className="bg-[#DCB2F4] flex flex-col flex-grow  m-2 p-3 border rounded">
            <h1 className="text-2xl font-medium ">Today's Activity</h1>
            {activityArr.length===0? <p>You haven't added Anything</p>:""}
            <ToDoItem activityArr={activityArr} setactivityArr={setactivityArr}/>

           
        
            
        </div>
      
    

    );
}
export default ToDoListing;