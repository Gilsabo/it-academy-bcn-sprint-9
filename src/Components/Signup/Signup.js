import { Link, useNavigate  } from "react-router-dom";

import { useState } from "react";
import { UserAuth } from "../../context/Auth-context"
const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password)
            navigate('/')
        }catch(e){
            setError(e.message)
            console.log(e.message)

        }
    }
    return ( 
        <>
        <h3>Sign up for a free account</h3>
        <p>Already have an account? <Link to="/signin">Sign in.</Link></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">Email adress</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button>Sign up</button>
        </form>
        </>
     );
}
 
export default Signup;