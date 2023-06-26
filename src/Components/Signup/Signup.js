import { Link } from "react-router-dom";
const Signup = () => {
    return ( 
        <>
        <h3>Sign up for a free account</h3>
        <p>Already have an account? <Link to="/signin">Sign up.</Link></p>
        <form>
            <label htmlFor="user">Email adress</label>
            <input type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" />
            <button>Sign in</button>
        </form>
        </>
     );
}
 
export default Signup;