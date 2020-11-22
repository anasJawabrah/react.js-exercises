import React from "react";

import "./App.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id : parseInt(this.props.id) };
  }
  change_bg=(e) =>{ document.getElementsByClassName("header-img")[this.state.id].style.background = '#7d6e86' };

  render() { 
    return ( 
      <div className="col-sm main">
    
        <div className="card" id='card'>
          <div className="card_header header-img" >
            
            <p className='change_bg'> <HiOutlinePencilAlt  onClick={this.change_bg}/></p>

          </div>

          <div className="card_body">
            <figure><img className='img-logo' src={this.props.img} alt={this.props.name} />
              
              <figcaption className='h6'><p>{this.props.name}</p>{this.props.major}
              
              </figcaption>
            </figure>
            
        </div>
        <div className="card_footer">
        <p className="card-text icon">
              
              <a href={this.props.url} rel="noopener noreferrer" target="_blank" >
                <FaFacebookSquare className='icon-child' /></a>
              
              <a href={this.props.url} rel="noopener noreferrer" target="_blank" >
              <FaLinkedin className='icon-child'/></a>
              
              <a href={this.props.url} rel="noopener noreferrer" target="_blank" >
                <FaGithub className='icon-child' /></a>
          </p>    
        </div>  
    
    </div>
  </div>
     );
  }
}
 
export default App;

