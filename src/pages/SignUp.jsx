import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function SignUp(props) {
    const [euser, setuser] = useState()
    const [epass, setpass] = useState()
    const navi = useNavigate()
    const userpass = props.userpass
    const setuserpass = props.setuserpass

    function handldeUserInput(event) {
        return (
            setuser(event.target.value)
        )
    }

    function handlePassInput(event) {
        return (
            setpass(event.target.value)
        )
    }
 
    function addUser(){
      
            
            setuserpass([...userpass ,{username:euser, password:epass}])
            navi("/")
        
    }
    return (
        <div className="bg-[#615059] p-16">
            <div className="bg-[#ED91BC]  p-10  m-5 border  border-black rounded-md">
                <h1 className="text-2xl font-medium ">Hey Hiii!!!</h1>
                <p>I may help you to Signup</p>
                <div className=" flex flex-col gap-5 mt-3 ">
                    <input type="text" className="w-52 border border-black rounded-md bg-[#f6cde1]" placeholder=" Enter UserName"  onChange={handldeUserInput}/>

                    <input type="text" className="w-52 border border-black rounded-md  bg-[#f6cde1]" placeholder=" Enter Password" onChange={handlePassInput} />

                    <input type="text" className="w-52 border border-black rounded-md  bg-[#f6cde1]" placeholder=" Confirm Password" />

                    <button className="w-20 bg-[#CB297A] text-white border border-black rounded-md" onClick={addUser}>Done</button>
                    <p> Already Have an Account?  <Link to="/"><u>Login</u> </Link>  </p>
                </div>
            </div>
        </div>
    );
}


export default SignUp;