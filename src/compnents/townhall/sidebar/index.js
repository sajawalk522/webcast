import React , {Component} from 'react';
import { NavLink } from "react-router-dom";
// import browserHistory from 'react-router/lib/browserHistory'; 

class sideBar extends Component{ 
    render(){
        return(
           
            <div>
                
               <div className="primary-container">
               <NavLink to={'#'}>
                      <div className="back-btn">
                          <div className="back-button">
                           <img src={require('../../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
                 </NavLink>
                 
                  <div className="logo-wrapper">
                       <div className="logo-img">
                           <div className="logo-wrp">
                              <img src={require('../../../assets/images/logo.png')} alt=""/>
                           </div>
                       </div>
                       <div className="logo-below">
                           <h1>Townhall Webcast</h1>
                           <h2>12.12.2018</h2>
                       </div>
                  </div>
                        <div className="list-option">
                           <ul>
                               <li><NavLink activeClassName="active" to={'/dashboard'}><span className="icon-dashboard"></span> <span>Dashboard</span></NavLink></li>
                               <li><NavLink activeClassName="active" to={'/webcastdetail'}><span className="icon-schedule-webcast"></span> <span>Schedule Webcast</span></NavLink></li>
                               <li><NavLink activeClassName="active" to={'/vedios'}><span className="icon-manage-webcast"></span> <span>Manage Webcast</span></NavLink></li>
                               <li><NavLink activeClassName="active" to={'/videos'}><span className="icon-video"></span> <span>Media Library</span></NavLink></li>
                              
                               {/* <li><NavLink activeClassName="active" to={'/moderat'}><span className="icon-video"></span> <span>Moderate</span></NavLink></li> */}
                           </ul>
                          
                       </div>
                    
               </div>
            </div>
        )
    }
}
export default sideBar;