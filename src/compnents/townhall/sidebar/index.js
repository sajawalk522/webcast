import React , {Component} from 'react';

import { NavLink } from "react-router-dom";

class sideBar extends Component{
    render(){
        return(
           
            <div>
                
               <div className="primary-container">
                    <NavLink to={'/'}>
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
                               <li><NavLink activeClassName="active" to={'/'}><img src={require('../../../assets/images/dashboard.png')} alt=""/> <span>Dashboard</span></NavLink></li>
                               <li><NavLink activeClassName="active" to={'/webcastdetail'}><img src={require('../../../assets/images/schedule.png')} alt=""/> <span>Schedule Webcast</span></NavLink></li>
                               <li><NavLink activeClassName="active" to={'/vedios'}><img src={require('../../../assets/images/manage.png')} alt=""/> <span>Manage Webcast</span></NavLink></li>
                           </ul>
                          
                       </div>
                    
               </div>
            </div>
        )
    }
}
export default sideBar;