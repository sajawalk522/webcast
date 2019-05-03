import React , {Component} from 'react';
import Music from '../audio';
 
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

        
    }
    handlevideo(ev){
        this.setState({
            videolist: false,
            videodetail: true,
            getvideo:ev,

        })
    }
    render(){
        return(
            <div>
               <div className="video-content">
                    <div className="vedio-header">
                        <h1>Administration</h1>
                        <h2>Media Library</h2>
                    </div>
                        <div className="video-thumnails">
                        
                                <div className="row">
                                { this.state.videolist &&
                                    this.state.video.map((videokey , index) => 
                                    <div className="col-sm-4" key={index}  onClick={() => this.handlevideo(index)}>
                                        <div className="video-primary thumnail-image">
                                           <img src={require('../../assets/images/' + videokey.thumnail)} alt=""/>
                                        </div>
                                    </div>
                                    )
                                }

                                { this.state.videodetail &&
                                    <div className="col-sm-12" >
                                        <div className="video-primary w-container">
                                            <iframe width="100%" height="300px" src={this.state.video[this.state.getvideo].videoUrl} ></iframe>
                                        </div>
                                        <div className="flex-adio">
                                            <Music/>
                                        </div>
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