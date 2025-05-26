// import React, {useState} from 'react';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [toggled, setToggled] = useState(false);

//   const handleToggle = (e) => {
//     e.preventDefault();
//     setToggled(!toggled);
//   };

//   return (
//     <div className={`container ${toggled ? 'toggled' : ''}`} id="wrapper">
//       <div className="row">
//         <hr />

//         {/* Sidebar */}
//         <div id="sidebar-wrapper">
//           <ul className="sidebar-nav" style={{ marginLeft: 0 }}>
//             <li className="sidebar-brand">
//               <a href="/menu-toggle" id="menu-toggle" onClick={handleToggle} style={{ marginTop: 20, float: 'right' }}>
//                 <i className="fa fa-bars" style={{ fontSize: 20 }} aria-hidden="true"></i>
//               </a>
//             </li>
//             <li>
//               <a href="/"><i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> <span style={{ marginLeft: 10 }}>Section</span></a>
//             </li>
//             <li>
//               <a href="/"><i className="fa fa-play-circle-o" aria-hidden="true"></i> <span style={{ marginLeft: 10 }}>Section</span></a>
//             </li>
//             <li>
//               <a href="/"><i className="fa fa-puzzle-piece" aria-hidden="true"></i> <span style={{ marginLeft: 10 }}>Section</span></a>
//             </li>
//             <li>
//               <a href="/"><i className="fa fa-font" aria-hidden="true"></i> <span style={{ marginLeft: 10 }}>Section</span></a>
//             </li>
//             <li>
//               <a href="/"><i className="fa fa-info-circle" aria-hidden="true"></i> <span style={{ marginLeft: 10 }}>Section</span></a>
//             </li>
//             <li>
//               <a href="/"><i className="fa fa-comment-o" aria-hidden="true"></i> <span style={{ marginLeft: 10 }}>Section</span></a>
//             </li>
//           </ul>
//         </div>

//         {/* Page Content */}
//         <div id="page-content-wrapper">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-12">
//                 {/* Your page content goes here */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;