import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return(
        <div className="content">
            <div className="sidebar">
                <div><Link>BreweryDash</Link></div>
                <div><Link  to="/" >Dashboard</Link></div>
                <div><Link>Search</Link></div>
                <div><Link>About</Link></div>
            </div>
            <Outlet/>
        </div>
    )
}


export default Layout;