import { Link } from "react-router-dom";
const Signin = () => {
    return ( 
        <>
        <h3>Sign in to your account</h3>
        <p>Don't have an account? <Link to="/signup">Sign up.</Link></p>
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
 
export default Signin;