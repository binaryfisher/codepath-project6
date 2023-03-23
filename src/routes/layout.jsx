import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return(
        <div>
            <div><Link className="button" to="/" >Dashboard</Link></div>
            <Outlet/>
        </div>
    )
}


export default Layout;