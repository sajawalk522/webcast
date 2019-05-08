import React, { Component } from 'react';
import Music from '../audio';
class Media extends Component {
   state = {
      videoplayer : false,
      title: '',
      question: '',
   }
   handletrue () {
      this.setState({
         videoplayer: true
      })
   }
   handleChange(event) {
      this.setState({
         title: event.target.value,
      })
    }
    handleChangee(event) {
      this.setState({
         question: event.target.value,
      })
    }
    
  render() {
    return (
      <div className="">
      
      { this.state.videoplayer === false &&
      <div className="video-content">
      <div className="media-content">
       <div className="row">
         <div className="col-sm-5">
             <div className="video-primary thumnail-image">
                <img src={require('../../assets/images/' + this.props.thumnail.thumnail )} alt=""/>
            </div>
         </div>
         <div className="col-sm-2 line-area">
             <div className="line">
                <i className="fa fa-ellipsis-v"></i>
             </div>
         </div>
         <div className="col-sm-5">
            <div className="blank-area">
              <p>Powerpoint On-line Viewer</p>
            </div>
         </div>
         <div className="ver-line">
            <div className="circle-div">
               <i className="fa fa-code"></i>
            </div>
         </div>
            
      </div>
                       <div className="row">
                              
                              <div className="col-md-6 col-sm-4 col-lg-4">
                                  <div className="media-input-container">
                                      <label>Hosted By</label><br/>
                                      <input type="text" placeholder="John Doe" value={this.state.title} 
                                       onChange={e => this.handleChange(e)}/>
                                  </div>
                                  
                                  </div>
                              <div className="col-md-6 col-sm-4 col-lg-8">
                                  <div className="media-input-container">
                                          <label>Question</label><br/>
                                          <input type="text" placeholder="Safety breifing townhall" value={this.state.question} 
                                       onChange={e => this.handleChangee(e)}/>
                                      </div> 
                                     
                                  </div>
                                  <div className="btn-webcast">
                                     <button className="btn" disabled={this.state.title == '' || this.state.question == ''} onClick={() => this.handletrue()} >Send Question</button>
                                  </div>
                                  
                               </div>
     
    </div>
  </div>
      }
    { this.state.videoplayer &&
      <div className="col-sm-12" >
            <div className="video-primary w-container">
               <iframe width="100%" height="300px" src={this.props.thumnail.videoUrl} ></iframe>
            </div>
            <div className="flex-adio">
               <Music/>
            </div>
      </div>
   }
  </div>
    );
  }
}
export default Media;
