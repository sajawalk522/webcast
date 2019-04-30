import React , {Component} from 'react';
class sideBar extends Component{
    render(){
        return(
            <div>
                
               <div className="primary-container">
                      <div className="back-btn">
                          <div className="back-button">
                              <img src={require('../../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
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
                               <li><img src={require('../../../assets/images/dashboard.png')} alt=""/> <span>Dashboard</span></li>
                               <li className="active"><img src={require('../../../assets/images/schedule.png')} alt=""/> <span>Schedule Webcast</span></li>
                               <li><img src={require('../../../assets/images/manage.png')} alt=""/> <span>Manage Webcast</span></li>
                           </ul>
                       </div>
               </div>
            </div>
            )
    }
}
export default sideBar;