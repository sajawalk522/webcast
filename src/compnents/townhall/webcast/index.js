import React , {Component} from 'react';
// import Music from '../../audio';
// import { NavLink } from "react-router-dom";
 
class videoContent extends Component{
   state = {
       webcastdata: true,
       vedioData: false,
       audioData: false,
       thumbnail: false,
   }
   dataChange(ev){
    switch(ev) {
        case 'vedio':
            this.setState({
                webcastdata: false,
                vedioData: true,
                audioData: false,
                thumbnail: false,
            })
          break;
        case 'audio':
        this.setState({
            webcastdata: false,
            vedioData: false,
            audioData: true,
            thumbnail: false,
        })
          break;
          case 'thumbnail':
        this.setState({
            webcastdata: false,
            vedioData: false,
            audioData: false,
            thumbnail: true,
        })
          break;
        default:
          // code block
      }
   }
    render(){
        return(
            <div>
                 {/* <NavLink to={'/webcastdetail'}>
                      <div className="back-btn">
                          <div className="back-button">
                           <img src={require('../../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
                 </NavLink> */}
               
               <div className="video-content">
              
                   <div className="vedio-header">
                        <h1>Administration</h1>
                        <h2>{this.state.webcastdata ? "Webcast Details" : "Media Library" }</h2>
                    </div>
                    { this.state.webcastdata &&
                    <div>
                    <div className="card-container">
                            <div className="header-text">
                                <h2>Card title</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-4 col-lg-4">
                                  <div className="input-container">
                                     <label>Title</label>
                                     <input type="text" placeholder="title"/>
                                  </div>
                                  <div className="input-container">
                                     <label>Date</label>
                                     <input type="date" placeholder="16/8/2019"/>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-4 col-lg-4">
                                    <div className="input-container">
                                        <label>Host</label>
                                        <input type="text" placeholder="Host"/>
                                    </div>
                                    <div className="input-container">
                                        <label>Created At</label>
                                        <input type="date" placeholder="16/8/2019"/>
                                    </div>
                                    </div>
                                <div className="col-md-6 col-sm-4 col-lg-4">
                                    <div className="input-container">
                                            <label>Description</label>
                                            <input type="text" placeholder="Description"/>
                                        </div>
                                        <div className="input-container">
                                            <label>Modified At</label>
                                            <input type="date" placeholder="16/8/2019"/>
                                        </div>
                                    </div>
                                   
                                 </div>
                             </div>
                             <div className="card-container">
                            <div className="header-text">
                                <h2>Card title</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-4 col-lg-4">
                                  <div className="input-container">
                                     <label>Restricted</label>
                                     <input type="False" placeholder="False"/>
                                  </div>
                                  </div>
                                  <div className="col-md-6 col-sm-4 col-lg-4">
                                  <div className="input-container">
                                     <label>Access Token</label>
                                     <input type="text" placeholder="DFE5210HH5"/>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-4 col-lg-4">
                                    <div className="input-container">
                                        <label>Moderator Access Token</label>
                                        <input type="text" placeholder="DFE5210HH5"/>
                                    </div>
                                    
                                    </div>
                                <div className="col-md-6 col-sm-4 col-lg-4">
                                    <div className="input-container">
                                            <label>Parent Access Token</label>
                                            <input type="text" placeholder="DFE5210HH5"/>
                                        </div> 
                                       
                                    </div>
                                    
                                 </div>
                                 <div className="btn-webcast">
                                       <button className="btn">Restrict Webcast</button>
                                       <button className="btn">Generate Access Token</button>
                                    </div>
                             </div>

                             <div className="card-container">
                            <div className="header-text">
                                <h2>Card title</h2>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-sm-6">
                                  <div className="input-container link-input">
                                     <label>Video Path</label>
                                     <button className="btn input" onClick={() => this.dataChange('vedio')}>upload/video/1.mp4</button>
                                  </div>
                                  </div>
                                  <div className="col-sm-4 col-sm-6">
                                  <div className="input-container link-input">
                                     <label>Audio Path</label>
                                     <button className="btn input" onClick={() => this.dataChange('audio')}>upload/video/1.mp4</button>
                                  </div>
                                </div>
                                <div className="col-sm-4 col-sm-6">
                                    <div className="input-container link-input">
                                        <label>Thumbnail Path</label>
                                        <button className="btn input" onClick={() => this.dataChange('thumbnail')}>upload/video/1.mp4</button>
                                    </div>
                                    
                                    </div>
                                <div className="col-sm-4 col-sm-6">
                                    <div className="input-container link-input">
                                            <label>Listed</label>
                                            <input type="text" placeholder="True"/>
                                        </div> 
                                       
                                    </div>
                                    
                                 </div>
                             </div>

                             <div className="card-container">
                            <div className="header-text search-card">
                                <h2>Card title</h2>
                                <div className="search-area">
                                    <input type="text" placeholder="Search"/>
                                    <img src={require('../../../assets/images/search.svg')} alt="search"/>
                                </div>
                                
                            </div>
                            <div className="list-below">
                                 <ul>
                                     <li><span>Name</span><span>Question</span><span>Status</span><span>Date Created</span></li>
                                     <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved">Approved</span><span>16/18/2019</span></li>
                                     <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="rejected">Reject</span><span>16/18/2019</span></li>
                                     <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="unapproved">Outstanding</span><span>16/18/2019</span></li>
                                     <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved">Approved</span><span>16/18/2019</span></li>
                                 </ul>
                            </div>
                            <div className="responsive-list">
                                <ul>
                                     <li><span>Name</span><span>Jhon Doe</span></li>
                                     <li><span>Date Created</span><span>16/08/2019</span></li>
                                     <li><span>Status</span><span className="approved">Approved</span></li>
                                     <li><span>Question</span><span>Lorem Ipsum dolar?</span></li>
                                     
                                 </ul>

                            </div>
                            <div className="generate-btn">
                               <button className="btn report-btn">Generate Report</button>
                            </div>
                           
                        </div>
                        </div>
                    }    
                     { this.state.vedioData &&
                                    <div>
                                        <div className="video-primary w-container ex-vedio">
                                            <iframe width="100%" height="300px" src="https://www.youtube.com/embed/9xwazD5SyVg" />
                                        </div>
                                    </div>
                      }
                      { this.state.audioData &&
                      <div className="audio">   
                        <audio controls preload="metadata">
                            <source src="../../assets/images/horse.ogg" type="audio/ogg"/>
                            <source src="horse.mp3" type="audio/mpeg"/>
                        </audio>
                      </div>

                      }
                      {
                          this.state.thumbnail && 
                          <div className="video-thumbnail">
                             <div className="row">
                             <div className="col-sm-6">
                                        <div className="video-primary thumnail-image">
                                           <img src={require('../../../assets/images/thumnail.png')} alt=""/>
                                        </div>
                                    </div>
                             </div>
                          </div>
                      }
                </div>
            </div>
           
            )
    }
}
export default videoContent;