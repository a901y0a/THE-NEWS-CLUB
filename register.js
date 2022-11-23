import React from 'react';
import {Link} from "react-router-dom";
import './index' ;
class Register extends React.Component {  //function 
  constructor(props) {  //initial create
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this); // 
      this.input = React.createRef();   
  }  
  updateSubmit(event) {  
      alert('Registered successfully!');  
      event.preventDefault();  
  }  
  render() {  
    return (  

<div className="form">
<center>
<div>
      <h3><b>CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS</b></h3>
    </div>
  
      <form onSubmit={this.updateSubmit}>  
       <div>
        <h4> REGISTRATION</h4><br></br> 
        </div>
        <label><b>Name: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required ref={this.input} />  
        </label>  <br></br><br></br>
        <label>  
              <b>Age: </b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" required ref={this.input} />  
        </label>  <br></br><br></br>

        <label><b>Contact no:  </b>&nbsp;
            <input type="number" required ref={this.input} />  
        </label>  <br></br><br></br>

        <label><b>Mail Id: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" required ref={this.input} />  
        </label>  <br></br><br></br>

        <label><b>Password: </b>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" required ref={this.input} />  
        </label>  <br></br><br></br>


<b>
 <div className="small">
<Link to="/navi"><button> REGISTER </button> </Link>
</div></b>
      </form>
      <br></br> 
      <div>
      <h3><b>CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS CLUB.NEWS</b></h3>
    </div>
        
      </center>
      </div>
    );  
  }  
}  
export default Register;