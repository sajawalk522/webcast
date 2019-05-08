import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Outstanding from "../outstanding";
class Moderat extends Component {
  render() {
    return (
      <div className="">
      <div className="video-content">
         <div className="vedio-header">
            <h1>Administration</h1>
            <h2>Questions Moderator</h2>
        </div>
           <div className="nav-list">
               <ul>
                   <li className="active"><NavLink to={"/outstanding"}>Outstanding</NavLink></li>
                   <li><NavLink to={"/aproved"}>Aproved</NavLink></li>
                   <li><NavLink to={"/rejected"}>Rejected</NavLink></li>
               </ul>
           </div>
           <Outstanding/>
           {/* <div className="list-below">
                <ul>
                    <li><span>Name</span><span>Question</span><span>Approved</span><span>Deny</span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><i class="far fa-dot-circle"></i></span><span className="gray"><i class="far fa-dot-circle"></i></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><i class="far fa-dot-circle"></i></span><span className="gray"><i class="far fa-dot-circle"></i></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="gray"><i class="far fa-dot-circle"></i></span><span className="approved"><i class="far fa-dot-circle"></i></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><i class="far fa-dot-circle"></i></span><span className="gray"><i class="far fa-dot-circle"></i></span></li>
                </ul>
            </div> */}
        </div>
      </div>
    );
  }
}
export default Moderat;
