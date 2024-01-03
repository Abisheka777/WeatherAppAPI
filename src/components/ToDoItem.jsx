
import ToDoListing from "./ToDoListing"
function ToDoItem(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr


  
    
    function handleDelete(delid){
        var temparr = activityArr.filter(function(item){

            if (item.id === delid)
            {
                return false
            }
            else
            {
                return true
            }
           
        }

        )
        setactivityArr(temparr)
        }

    return (


        activityArr.map(function (item, index) {
            return (
                <div className="flex justify-between" >
                     <p>{index + 1} . {item.activity}</p>
                     <button className="border rounded bg-black " onClick={()=>handleDelete(item.id)}>🗑️</button>
                </div>
               
            )
        }

        


        )




    )

   
}
export default ToDoItem;