import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
          <div style={{ backgroundColor: 'blue' , display:"flex" , alignItems:"center" , listStyle:"none"}} className="navbar bg-base-100 px-5" id="navbar1">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl text-white">Blogging App</a>
            </div>
            <div className="flex justify-center flex-1">
            </div>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                   
                  </div>

                </div>

               <div style={{display:"flex" , alignItems:"center" , listStyle:"none"}}>
 <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li><Link to= "">Home</Link></li>
                  <li><Link to= "Login">Login</Link></li>
                  <li><Link to= "Register">Register</Link></li>
                  <li><Link to= "Profile" className="justify-between">Profile</Link></li>
                  <li><Link to= "Dashboard">DashBoard</Link></li>
                  <li><Link to= "SinglePage">SinglePage</Link></li>
                </ul>
               </div>
              </div>
            </div>
          </div>
        </>
      );
      
}

export default Navbar