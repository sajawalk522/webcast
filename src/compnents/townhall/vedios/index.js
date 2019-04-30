import React , {Component} from 'react';
// import Music from '../../audio';
 
class videoContent extends Component{
   
    render(){
        return(
            <div>
               <div className="video-content">
                    <div className="vedio-header">
                        <h1>Administration</h1>
                        <h2>Webcast Details</h2>
                    </div>
                    <div className="card-container">
                            <div className="header-text">
                                <h2>Card title</h2>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                  <div className="input-container">
                                     <label>Title</label>
                                     <input type="text" placeholder="title"/>
                                  </div>
                                  <div className="input-container">
                                     <label>Date</label>
                                     <input type="date" placeholder="16/8/2019"/>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-container">
                                        <label>Host</label>
                                        <input type="text" placeholder="Host"/>
                                    </div>
                                    <div className="input-container">
                                        <label>Created At</label>
                                        <input type="date" placeholder="16/8/2019"/>
                                    </div>
                                    </div>
                                <div className="col-sm-4">
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
                                <div className="col-sm-4">
                                  <div className="input-container">
                                     <label>Restricted</label>
                                     <input type="False" placeholder="title"/>
                                  </div>
                                  </div>
                                  <div className="col-sm-4">
                                  <div className="input-container">
                                     <label>Access Token</label>
                                     <input type="text" placeholder="16/8/2019"/>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-container">
                                        <label>Moderator Access Token</label>
                                        <input type="text" placeholder="Host"/>
                                    </div>
                                    
                                    </div>
                                <div className="col-sm-4">
                                    <div className="input-container">
                                            <label>Parent Access Token</label>
                                            <input type="text" placeholder="Description"/>
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
                                <div className="col-sm-4">
                                  <div className="input-container link-input">
                                     <label>Video Path</label>
                                     <input type="False" placeholder="upload/video/1.mp4"/>
                                  </div>
                                  </div>
                                  <div className="col-sm-4">
                                  <div className="input-container link-input">
                                     <label>Audio Path</label>
                                     <input type="text" placeholder="upload/audio/1.mp3"/>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-container link-input">
                                        <label>Thumbnail Path</label>
                                        <input type="text" placeholder="upload/thumbnail/1.png"/>
                                    </div>
                                    
                                    </div>
                                <div className="col-sm-4">
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
                            <button className="btn report-btn">Generate Report</button>
                        </div>
                       
                </div>
                        
                        
            </div>
           
            )
    }
}
export default videoContent;