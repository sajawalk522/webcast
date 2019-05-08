import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Audio extends Component {
  render() {
    return (
      <div>
        <div className="audio">   
         <audio controls preload="metadata">
            <source src="../../assets/images/horse.ogg" type="audio/ogg"/>
            <source src="horse.mp3" type="audio/mpeg"/>
        </audio>
      </div>
      </div>
      
    );
  }
}

export default Audio;
