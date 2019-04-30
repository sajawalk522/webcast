import React, { Component } from 'react';


class Audio extends Component {
  render() {
    return (
      <div className="audio">   
         <audio controls preload="metadata">
            <source src="../../assets/images/horse.ogg" type="audio/ogg"/>
            <source src="horse.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    );
  }
}

export default Audio;
