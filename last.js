import React from 'react';
import {Link} from "react-router-dom";
import './last.css' ;
class Last extends React.Component {  //function 
  constructor(props) {  //initial create
      super(props);  
      this.updateSubmit = this.updateSubmit.bind(this); // 
      this.input = React.createRef();   
  }  
  updateSubmit(event) {  
      alert('Thank You for your response!');  
      event.preventDefault();  
  }  
  render() {  
    return (  

<div className="form">
<center>

  
      <form onSubmit={this.updateSubmit}>  
       <div>
        <h4> RATE US!!</h4><br></br> 
        </div>
      <label>
              <b>Enter Your Rating: </b>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="number" required ref={this.input} />  
        </label>  <br></br><br></br>

        

<b>
 <div className="small">
<button> SUBMIT </button>
</div></b>
      </form>
      <br></br> 
      
    </center>
    <Link to="/navi">
    <button>BACK</button>
    </Link>
      </div>
    );  
  }  
}  
export default Last;