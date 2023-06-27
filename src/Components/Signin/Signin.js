import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/Auth-context";
const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { signIn} =UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setError('')
        navigate('/')
        try{
            await signIn(email, password)

        }catch(e){
            setError(e.message)
            console.log(e.message)

        }
    }

    return ( 
        <>
        <h3>Sign in to your account</h3>
        <p>Don't have an account? <Link to="/signup">Sign up.</Link></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">Email adress</label>
            <input onChange={(e)=>setEmail(e.target.value)}type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button>Sign in</button>
        </form>
        </>
     );
}
 
export default Signin;