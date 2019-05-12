import React, { Component } from 'react';
import Music from '../audio';
const divStyle = {
   backgroundColor: '50%'
 };
class Media extends Component {
   state = {
      videoplayer : false,
      title: '',
      question: '',
      inputRange: '',
      minRange: '',
      maxRange: '',
      show: true,
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
    handleinput (event){
      this.setState({
         inputRange: event.target.value,
      })
      switch(event.target.value) {
         case '10':
           this.setState({
              maxRange: "40%",
              minRange: '40%',
           })
         break;
         case '9':
           this.setState({
              maxRange: "45%",
              minRange: '36%',
           })
         break;
         case '11':
           this.setState({
              maxRange: "36%",
              minRange: '44%',
           })
         break;
         case '12':
           this.setState({
              maxRange: "32%",
              minRange: '48%',
           })
         break;

         case '13':
           this.setState({
              maxRange: "28%",
              minRange: '52%',
           })
         break;
         case '14':
           this.setState({
              maxRange: "24%",
              minRange: '56%',
           })
         break;
         case '15':
           this.setState({
              maxRange: "20%",
              minRange: '60%',
           })
         break;
         case '16':
           this.setState({
              maxRange: "16%",
              minRange: '64%',
           })
         break;
         case '17':
         this.setState({
            maxRange: "12%",
            minRange: '68%',
         })
       break;
       case '18':
           this.setState({
              maxRange: "8%",
              minRange: '72%',
           })
         break;
         case '19':
           this.setState({
              maxRange: "4%",
              minRange: '76%',
              show: true,
           })
         break;
         case '20':
           this.setState({
              maxRange: "0%",
              minRange: '80%',
              show: false,
           })
         break;
         case '8':
           this.setState({
              maxRange: "50%",
              minRange: '32%',
           })
         break;
         
         case '7':
           this.setState({
              maxRange: "55%",
              minRange: '28%',
           })
         break;  
           case '6':
           this.setState({
              maxRange: "60%",
              minRange: '24%',
           })
         break;
         case '5':
           this.setState({
              maxRange: "65%",
              minRange: '20%',
           })
         break;  
         case '4':
           this.setState({
              maxRange: "70%",
              minRange: '16%',
           })
         break;
         case '3':
           this.setState({
              maxRange: "75%",
              minRange: '12%',
           })
         break;
         case '2':
           this.setState({
              maxRange: "80%",
              minRange: '8%',
           })
         break;
         case '1':
           this.setState({
              maxRange: "80%",
              minRange: '4%',
           })
         break;
         case '0':
         this.setState({
            maxRange: "80%",
            minRange: '0%',
         })
       break;
         default:
         }
    };
    
    
  render() {
    return (
      <div>
      
      { this.state.videoplayer === false &&
      <div className="video-content p-0">
      <div className="media-content">
       <div className="row-flex">
         <div className="" style={{ width: `${this.state.minRange}`}}>
             <div className="video-primary thumnail-image-ex" style={divStyle}>
                <img src={require('../../assets/images/' + this.props.thumnail.thumnail )} alt=""/>
            </div>
         </div>
        
         {
            this.state.show && 
            <div className="" style={{ width: `${this.state.maxRange}`}}>
            <div className="blank-area">
              <p>Powerpoint On-line Viewer</p>
            </div>
         </div>   
         }
      </div>
      <div className="slidecontainer slider-horizantal">
         <input 
               type="range" 
               className="slider slider2" id="myRange"
               min="0" max="20" 
               value={this.state.inputRange} 
               onChange={e => this.handleinput(e)}
            />
            <input 
               type="range" 
               className="slider" id="myRange"
               min="0" max="20" 
               value={this.state.inputRange} 
               onChange={e => this.handleinput(e)}
            />
         </div>
         
         {/* <div className="ver-line">
        
            <div className="circle-div">
               <i className="fa fa-code"></i>
            </div>
         </div> */}
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
