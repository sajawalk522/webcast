import React , {Component} from 'react';
 
// import { NavLink } from "react-router-dom";
import Media from '../media';
 
class videoContent extends Component{
    state = {
        video:[
            {
                videoUrl: "https://www.youtube.com/embed/9xwazD5SyVg",
                thumnail: "thumnail.png",
            },
            {
                videoUrl: "https://www.youtube.com/embed/5Peo-ivmupE",
                thumnail: "thumnail.png",
            },
            {
                videoUrl: "https://www.youtube.com/embed/9xwazD5SyVg",
                thumnail: "thumnail.png",
            },
            {
                videoUrl: "https://www.youtube.com/embed/9xwazD5SyVg",
                thumnail: "thumnail.png",
            },
            {
                videoUrl: "https://www.youtube.com/embed/9xwazD5SyVg",
                thumnail: "thumnail.png",
            },
            {
                videoUrl: "https://www.youtube.com/embed/9xwazD5SyVg",
                thumnail: "thumnail.png",
            }
            
        ],
        videolist: true,
        videodetail: false,
        getvideo: null,
        nextimg: null,
        
    }
    handlevideo(ev, img){
        this.setState({
            videolist: false,
            videodetail: true,
            getvideo:ev,
            nextimg: img,
        })
    }
    render(){
        return(
            <div>
                 {/* <NavLink to={'/videos'}>
                      <div className="back-btn">
                          <div className="back-button">
                           <img src={require('../../assets/images/arrow-left.svg')} alt=""/>
                          </div>
                      </div>
                 </NavLink> */}
               <div className="video-content">
                    <div className="vedio-header">
                        <h1>Administration</h1>
                        <h2>{this.state.videodetail ? 'Video Title' : 'Media Library'}</h2>
                    </div>
                        <div className="video-thumnails">
                        
                                <div className="row">
                                { this.state.videolist &&
                                    this.state.video.map((videokey , index) => 
                                    <div className="col-sm-4" key={index}  onClick={() => this.handlevideo(index ,videokey)}>
                                        <div className="video-primary thumnail-image">
                                           <img src={require('../../assets/images/' + videokey.thumnail)} alt=""/>
                                        </div>
                                    </div>
                                    )
                                }

                                {  this.state.videodetail &&
                                    <div>
                                        <Media thumnail={this.state.nextimg}/>
                                    </div>
                                }
                               </div>                     
                        <div>
                        </div>
                    </div>
                </div>
               </div>
           
            )
    }
}
export default videoContent;