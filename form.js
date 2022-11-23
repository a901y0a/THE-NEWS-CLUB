import React from 'react';  
import {Link} from "react-router-dom";
 //import './index.css';
class Form extends React.Component {  //function 
  constructor(props) {  //initial create
      super(props);  
      this.input = React.createRef();  
  }  
  updateSubmit(event) {  
      alert('you have logged in');  
      event.preventDefault();  
  }  
  render() {  
    return (  
      <div className='back'>
      <center>
      <form onSubmit={this.updateSubmit}> 
      <br></br>
      <fieldset>
    
        <h2><b>THE NEWS CLUB</b></h2>
        <br></br><br></br>
        <label>UserName: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required ref={this.input} />  
        </label>  <br></br><br></br>
        <label>  
            Password:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" required ref={this.input} />  
        </label>  <br></br><br></br>
        <Link to="/navi">
        <input type="Submit" value="LOG IN" />
      </Link>
<br></br><br></br>

        <h6> Don't have an account? </h6>
      
        <Link to="/register"><button>CREATE A NEW ACCOUNT</button></Link>
      
        </fieldset>
      </form>  
      </center>
      </div>
    
    );  
  }  
}  
export default Form;