import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Login(props) {
    const [euser, setuser] = useState()
    const [epass, setpass] = useState()
    const navi = useNavigate()
    const [ruser,setruser]= useState(true)
   


    const userpass=props.userpass
    
   
    function handldeUserInput(event){
        return(
            setuser(event.target.value)
        )
    }

    function handlePassInput(event){
        return(
            setpass(event.target.value)
        )
    }


    function checkUserPass(){
        var userfound = false
        return (
            
            userpass.forEach(function(item){
                if(item.username === euser && item.password === epass){
                    console.log("Login Successful")
                    userfound = true
                    navi("/Landing",{state:{user:euser}})
                }
                if(userfound===false)
                {
                    console.log("Login Failed")
                    setruser(false)
                }
            })
        )
    }



    return (
        <div className="bg-[#615059] p-16">
            <div className="bg-[#DCB2F4]  p-10  m-10 border   border-black  rounded-md">
                <h1 className="text-2xl font-medium ">Hey Hello!!!</h1>
                {ruser? <p>I may help you to Login</p> : <p className='text-[#E51023]'>Please Sign Up Before you Login</p> }
                
                <div className=" flex flex-col gap-5 mt-3 ">
                    <input type="text" className="w-52 border border-black rounded-md bg-[#F1E0FC]" placeholder=" Enter UserName" onChange={handldeUserInput} />

                    <input type="text" className="w-52 border border-black rounded-md  bg-[#F1E0FC]" placeholder=" Enter Password" onChange={handlePassInput} />



                    <button className="w-20 bg-[#A424EC] text-white border border-black rounded-md" onClick={checkUserPass}>Done</button>
                    <p> Don't Have an Account?  <Link to="./signup"><u>SignUp</u> </Link>  </p>
                </div>
            </div>
        </div>
    );
}


export default Login;

