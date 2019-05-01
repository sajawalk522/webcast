import React , {Component} from 'react';
import Sidebar from '../../compnents/townhall/sidebar';
import webcastContent from '../../compnents/townhall/webcast';
import Header from '../../compnents/commoncomponent/header';
import audio from '../../compnents/audio';
import Dashboard from '../dashboard';
import Webcast from '../../compnents/townhall/webcast';
import { Route } from "react-router-dom";

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
                              </div>
                              <div className="search-container search-mob">
                                    <img src={require("../../assets/images/search.svg")} alt=""/>
                                     <input type="text" />
                                </div>
                              <Route exact path="/" component={webcastContent} />
                              <Route exact path="/schedule" component={audio} />
                              <Route exact path="/" component={Dashboard} />
                              <Route exact path="/webcastdetail" component={Webcast} />
                             
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
}
export default townHall;