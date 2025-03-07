
// import { Link,Outlet } from "react-router-dom";
//           < Outlet style={{justifyContent:"center",alignItems:"center"}}/>
// const Layout = () => {
//     return (
//         <>

//             <div id="sidebar">
//                 <div id="main">
//                     <div id="logo">
//                     <img src="/src/image/logo2.jpg" /></div>

//                     <ul id="content">

//                         <li><Link to="home"><a href="#"></a>Home</Link></li>
//                         <li><Link to="insert"><a href="#"></a>Insert</Link></li>
//                         <li><Link to="display"><a href="#"></a>Display</Link></li>
//                         <li><Link to="update"><a href="#"></a>Update</Link></li>
//                         <li><Link to="delete"><a href="#"></a>Delete</Link></li>
//                     </ul>

//                 </div>

//                 <div id="navbar">

//                     <div style={{display:"flex", justifyContent:"center", alignContent:"center",  paddingLeft:"700px"}}></div>

//                         <input type="text" placeholder="Search..."  style={{display:"flex", justifyContent:"center",alignItems:"center", borderRadius:"5px", height:"35px" ,width:"200px",marginTop:"2.5px"}}/>

//                 </div>
//                 <div id="maindata">
//                 < Outlet/>
//                 </div>

//             </div>

//         </>

//     )
// }
// export default Layout;
import { AiFillMedicineBox } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { FcDoNotInsert } from "react-icons/fc";
import { FaDisplay } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { SiSimplelogin } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";


import { Link, Outlet } from "react-router-dom";
< Outlet style={{ justifyContent: "center", alignItems: "center" }} />
const Layout = () => {
    return (
        <>
             

             <div id="mainbar" style={{display:"flex", justifyContent:"space-around", alignContent:"center",alignItems:"center",padding:"10px 0px"}}>

             
            < AiFillMedicineBox style={{color:"white",fontSize:"24px"}}/>
             
             <input type="text" placeholder="Search..."  style={{ borderRadius:"5px",height:"25px" ,width:"200px"}}/>

             </div>
            
            <div style={{display:"flex"}}>

            <div id="sidebar" >
                <div className="logo"><img src="/src/image/logo2.jpg" alt="" /> </div>
             <div className="Menu">
                <ul>
                        <li><Link to="home"><FcHome /><a href="#">
                        </a>Home</Link></li>
                         <li><Link to="insert">
                         <FcDoNotInsert /><a href="#"></a>Insert</Link></li>
                         <li><Link to="display"><a href="#"><FaDisplay /></a>Display</Link></li>
                         <li><Link to="update"><a href="#"><RxUpdate /></a>Update</Link></li>
                         <li><Link to="login"><a href="#"><SiSimplelogin /> </a>Login</Link></li>
                         <li><Link to="ragister"><a href="#"><MdOutlineManageAccounts /></a>Ragister</Link></li>
                                          
                </ul>
                
                </div>   
                
             </div> 
             <div id="maindata">
                <Outlet/>
             </div>
            </div>
  
        </>

    )
}
export default Layout;
