import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <>
        <Link to="/mens">
        <button>Men's Clothing</button>
        </Link>
        <Link to="/women">
        <button>Women's Clothing</button>
        </Link>
        <Link to="/electronics">
        <button>Electronics</button>
        </Link>
        <Link to="/jewelery">
        <button>Jewelery</button>
        </Link>
        </>
     );
}
 
export default Home;