import { BrowserRouter,Routes,Route,} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Landing from'./pages/Landing';

    function App(){

      const [userpass, setuserpass] = useState([
        {
            username: "Abisheka",
            password: "@123",
        }
    ])
    
      return(
        <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login userpass={userpass} setuserpass={setuserpass}/>} ></Route>
          <Route path='/signup' element={<SignUp userpass={userpass} setuserpass={setuserpass}/>} ></Route>
          <Route path='/Landing' element={<Landing/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
      )
    }
  
 


export default App;
