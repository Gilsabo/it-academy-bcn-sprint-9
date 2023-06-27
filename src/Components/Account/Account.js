import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/Auth-context";
const Account = () => {
    const {user,logout} = UserAuth()
    const navigate =useNavigate()
    const handleLogOut = async () =>{
        try{
        await logout()
        navigate('/signin')
        }catch(e){
            console.log(e.message)
        }
    }
    return ( 
        <>
        <div>User Email:{user && user.email}</div>
        <button onClick={handleLogOut}>Logout</button>
        </>
     );
}
 
export default Account;