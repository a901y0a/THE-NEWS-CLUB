import './paper.css';
import {Link} from "react-router-dom";
const Paper = () => {
    return (
      <div className='image'>
        <center>
          <div>
        <h1>NEWSPAPERS</h1>
        <br></br><br></br>
        </div>
        <div className="btn-holder">
          <button className="btn btn-1 hover-filled-slide-down">
            <span><a href="https://www.hindustantimes.com/">Hindustan Times</a></span>
          </button>
          <button className="btn btn-1 hover-filled-slide-up">
            <span><a href="https://indianexpress.com/"> Indian Express</a></span>
          </button>
          <button className="btn btn-1 hover-filled-slide-left">
            <span><a href="https://www.indiatoday.in/"> India Today</a></span>
          </button>
          <button className="btn btn-1 hover-filled-slide-right">
            <span><a href="https://www.thehindu.com/">The Hindu</a></span>
          </button>
          <button className="btn btn-1 hover-filled-opacity">
            <span><a href="https://m.timesofindia.com/">Times Of India</a></span>
          </button>

        </div>
        <div className="btn-holder">
          <button className="btn btn-2 hover-slide-down">
            <span><a href="https://www.dinamalar.com/"> Dinamalar</a></span>
          </button>
          <button className="btn btn-2 hover-slide-up">
            <span><a href="https://m.dinakaran.com/"> Dinakaran</a></span>
          </button>
          <button className="btn btn-2 hover-slide-left">
            <span><a href="https://www.hindutamil.in/"> Hindu Tamil</a></span>
          </button>
          <button className="btn btn-2 hover-slide-right">
            <span><a href="https://www.dailythanthi.com/"> Thanthi</a></span>
          </button>
          <button className="btn btn-2 hover-opacity">
            <span><a href="https://www.maalaimalar.com/"> Maalai Malar</a></span>
          </button>
        </div>
        </center>
        <div className='love'>
        <Link to="/navi"><button> -BACK</button></Link>
        <Link to="/last"><button>RATE US-</button></Link>
        </div>
      
      </div>

    )
};

export default Paper;
    

