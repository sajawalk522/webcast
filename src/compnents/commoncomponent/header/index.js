import React from 'react';
// import Sidebar from '../../townhall/sidebar';

class Header extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
      
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};


showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
     <div className="header">
      
     <div className="search-container">
         <img src={require("../../../assets/images/search.svg")} alt=""/>
       <input type="text" />
     </div>
        <div className=" dropdown">
                <div className="profile-image"  onClick={this.showDropdownMenu}  >
                    <img src={require("../../../assets/images/images.jpg")} alt=""/>
                    <i className="fa fa-angle-down"/>
                    
                </div>
            <div className="dropdown-list">
                    
          { this.state.displayMenu ? (
              <ul>
                <li>Create Page</li>
                <li>Manage Pages</li>
                <li>Setting</li>
                <li>Log Out</li>
              </ul>
            ):
        (null)
        }
        </div>
      

       </div>
     </div>
         

    );
  }
}

export default Header;