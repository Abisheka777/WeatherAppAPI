import Header from "../components/Header"
import Card from "../components/card"
import ToDo from "../components/ToDoContainer"
import { useLocation } from "react-router-dom";

function Landing(){

    const data = useLocation()
    return(
        <div className="bg-black p-16">
        <div className="bg-[#ED91BC] p-10 border rounded">
        <Header username={data.state.user}/>
    
        <div className="flex justify-between flex-wrap my-5 gap-7">
    
    
          <Card bgcolor={"#A6D2E5"} title={25} subtitle={"Ras Al Khaimah"}   ></Card>
          <Card bgcolor={"#BBDACE"} title={"December 28"} subtitle={"16:31:25"}   ></Card>
          <Card bgcolor={"#EBDB93"} title={"Built Using"} subtitle={"React"}   ></Card>
        
        </div>
    
        <ToDo/>
    
        </div>
        </div>
    
        
    
    
    
    
       
    )
}
export default Landing;