import React, { Component } from 'react';
// import Moderate from "../moderator";
class Outstanding extends Component {
  render() {
    return (

      <div className="">
      
           <div className="list-below">
                <ul>
                    <li><span>Name</span><span>Question</span><span>Approved</span><span>Deny</span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><i class="far fa-dot-circle"></i></span><span className="gray"><i class="far fa-dot-circle"></i></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><i class="far fa-dot-circle"></i></span><span className="gray"><i class="far fa-dot-circle"></i></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="gray"><i class="far fa-dot-circle"></i></span><span className="approved"><i class="far fa-dot-circle"></i></span></li>
                    <li><span>Jhon Doe</span><span>Lorem Ipsum dolar?</span><span className="approved"><i class="far fa-dot-circle"></i></span><span className="gray"><i class="far fa-dot-circle"></i></span></li>
                </ul>
            </div>
        </div>
    );
  }
}
export default Outstanding;
