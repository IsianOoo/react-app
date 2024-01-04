import React, {useState} from "react";
import {login} from "../features/loggedUserSlice";
import {useDispatch, useSelector} from "react-redux";
import { selectUsers } from "../features/UsersSlice";

import { AppDispatch } from "../App/Store";

const Login = () => {
    const [email, setEmail] = useState("")
    const users = useSelector(selectUsers)

    const dispatch = useDispatch<AppDispatch>()
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()
        if(users.find(user => user.email === email) !== undefined) {
            dispatch(login(email))
            return
        }
        console.log("User not found")
    }
    return(<div className="login">
    <form className="login-form" onSubmit={event => handleLogin(event)}>
        <h1>Login</h1>
        <input
            placeholder={"Name"}
            value={email}
            onChange={(i) => setEmail(i.target.value)}
        />
        <button className={"login-submit"}>Login</button>
    </form>
</div>);
};

    //     <div className='Login'>
    //   <div className="LoginBox">
    //     <div className="LoginHeader">
    //       Login
    //     </div>
    //     <div className="inputs">
    //       <input type="text" className="email" placeholder='you@example.com'/>
    //     </div>
    //     <div className="loginButton">
    //     <button className='btnLogin'>Login</button>
    //     </div>


        
    //   </div>
			
	// 	</div>
    


    export default Login;