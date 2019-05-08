import React , {Component} from 'react';
import Sidebar from '../../compnents/townhall/sidebar';
import Videos from '../../compnents/vedios/index';
import Header from '../../compnents/commoncomponent/header';
import audio from '../../compnents/audio';
import Dashboard from '../dashboard';
import Webcast from '../../compnents/townhall/webcast';
import { Route } from "react-router-dom";
import Media from "../media";
import Moderat from "../moderator";
import Outstanding from "../outstanding";
// import { NavLink } from "react-router-dom";
class townHall extends Component{
  state={
      show: false
  }
  open() {
      let toggleBtn = this.state.show;
    this.setState({show: !toggleBtn});
    
  }
    render(){
        return(
            <div className="main-container">
            
                <div className="container-fluid ">
                    <div className="row sidearea">
                    
                        <div className={this.state.show ? 'col-3  sidebar active' : 'col-3 sidebar closefile'}>
                           <Sidebar/>

                        </div>
                        
                        <div className="col-9 ">
                       
                              <div className="header-secction">
                                <div className="bars-container" onClick={() => this.open()}>
                                    <i className="fa fa-bars"></i>
                                </div>
                               
                              <Header/>
                              {/* <NavLink to={'/'}>
                      <div className="back-btn">
                          <div className="back-button">
                           <img src={require('../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
                 </NavLink> */}
                              </div>
                              <div className="search-container search-mob">
                                    <img src={require("../../assets/images/search.svg")} alt=""/>
                                     <input type="text" />
                                </div>
                              <Route exact path="/videos" component={Videos} />
                              <Route exact path="/dashboard" component={Dashboard} />
                              <Route path="/schedule" component={audio} /> 
                              <Route path="/webcastdetail" component={Webcast} />
                              {/* <Route path="/media" component={Media} /> */}
                              <Route path="/moderat" component={Moderat} />
                              <Route path="/outstanding" component={Outstanding} />
                             
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
}
export default townHall;