// import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// // import $ from "jquery";

// function Sidebar() {
//     const[show, setShow] = useState(false)
//     const btn=()=>{
//         setShow()
//     }
//   return (
//     <>
//       <div id="wrapper">
//         <div className="overlay"></div>

//         {/* <Sidebar> */}
//         <nav
//           className="navbar navbar-inverse fixed-top"
//           id="sidebar-wrapper"
//           role="navigation"
//         >
//           <ul className="nav sidebar-nav">
//             <div className="sidebar-header">
//               <div className="sidebar-brand">
//                 <a href="/">Brand</a>
//               </div>
//             </div>
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#events">Events</a>
//             </li>
//             <li>
//               <a href="#team">Team</a>
//             </li>
//             <li className="dropdown">
//               <a href="#works" className="dropdown-toggle" data-toggle="dropdown">
//                 Works <span className="caret"></span>
//               </a>
//               {/* <ul className="dropdown-menu animated fadeInLeft" role="menu">
//                 <div className="dropdown-header">Dropdown heading</div>
//                 <li>
//                   <a href="#pictures">Pictures</a>
//                 </li>
//                 <li>
//                   <a href="#videos">Videeos</a>
//                 </li>
//                 <li>
//                   <a href="#books">Books</a>
//                 </li>
//                 <li>
//                   <a href="#art">Art</a>
//                 </li>
//                 <li>
//                   <a href="#awards">Awards</a>
//                 </li>
//               </ul> */}
//             </li>
//             <li>
//               <a href="#services">Services</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//             <li>
//               <a href="#followme">Follow me</a>
//             </li>
//           </ul>
//         </nav>
//         {/* <sidebar-wrapper> */}

//         {/* <Page Content> */}
//         <div id="page-content-wrapper">
//           <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas" onClick={btn}>
//             <span className="hamb-top"></span>
//             <span className="hamb-middle"></span>
//             <span className="hamb-bottom"></span>
//           </button>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8 col-lg-offset-2"></div>
//             </div>
//           </div>
//         </div>
//         {/* <page-content-wrapper> */}
//       </div>
//       {/* <wrapper> */}
//     </>
//   );
// }

// export default Sidebar;