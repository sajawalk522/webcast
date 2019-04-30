import React , {Component} from 'react';
import Sidebar from '../../compnents/townhall/sidebar';
import VideoContent from '../../compnents/townhall/vedios';
import Header from '../../compnents/commoncomponent/header';

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
                        <div className="bars-container" onClick={() => this.open()}>
                         <i className="fa fa-bars"></i>
                         </div>
                        <div className="col-9 ">
                              <Header/>
                             <VideoContent/>
                        </div>
                    </div>
                </div>
                
            </div>
            )
    }
}
export default townHall;