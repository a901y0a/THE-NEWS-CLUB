import './style.css';
import {Link} from "react-router-dom";
const Nav = () => {
    return (
      <div>
        <div>
          <h1><b>DAILY NEWS</b></h1> 
        </div>
        <div className="row"> 
          <div className="column">
            <a href="https://timesofindia.indiatimes.com/politics/news">
              <img src="https://imgnew.outlookindia.com/public/uploads/articles/2022/1/20/asad_1_20220131.jpg" alt='apple' style={{width: '100%'}} />
              <div><h2>POLITICAL NEWS</h2></div></a>
              <a href ="https://www.indiatoday.in/education-today">
            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/12/16205930/education-News-1.jpg" alt='orange' style={{width: '100%'}} />
            <div><h2>EDUCATIONAL NEWS</h2></div></a>
            <a href="https://economictimes.indiatimes.com/news/economy/agriculture?from=mdr">
            <img src="https://static.theprint.in/wp-content/uploads/2018/05/1_Agriculture_and_rural_farms_of_India-e1548392979838.jpg?compress=true&quality=80&w=376&dpr=2.6" alt='grape' style={{width: '100%'}} />
            <div><h2>AGRICULTURE NEWS</h2></div></a>
            <a href="https://indianexpress.com/section/entertainment/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijmsC5lk2D7vic_B-jeaEed8sm4GMczClpx9frYQmbrVO5niyFjWR2dOgh78Pyk8dM6U&usqp=CAU" alt='nxdc' style={{width: '100%'}} />
            <div><h2>ENTERTAINMENT NEWS</h2></div></a>
            <a href="https://tamil.behindwoods.com/tamil-movies-cinema-news-ta/">
            <img srC="https://thumbs.dreamstime.com/b/cinema-movie-vector-poster-design-template-popcorn-filmstrip-clapboard-tickets-movie-time-background-banner-shining-sign-83041595.jpg" alt='nxdc' style={{width: '100%'}} />
            <div><h2>CINEMA NEWS</h2></div></a>
          </div>
          <div className="column">
            <a href="https://indianexpress.com/section/sports/">
              <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000" alt='monkey' style={{width: '100%'}} />
              <div><h2>SPORTS NEWS</h2></div></a>
              <a href="https://www.indiatoday.in/technology/news">
               <img src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" alt='bcgdvc' style={{width: '100%'}} />
               <div><h2>TECH NEWS</h2></div></a>
               < a href="https://www.hindustantimes.com/world-news">
            <img src="https://media.iapp.org/2018/09/11141935/world_trade.jpg" alt=' jdcdbc' style={{width: '100%'}} />
            <div><h2>WORLD NEWS</h2></div></a>
            <a href="https://www.dinamalar.com/">
            <img src="https://image.winudf.com/v2/image/Y29tLmFtbS50YW1pbG5ld3Nfc2NyZWVuc2hvdHNfMF9mY2RiNTc1Ng/screen-0.jpg?h=500&fakeurl=1&type=.jpg" alt='nxdd' style={{width: '100%'}} />
            <div><h2>TAMIL NEWS</h2></div></a>
           <Link to="/paper">
            <img src="https://businessplus.ie/wp-content/uploads/2022/09/newspapers-720x520.jpg" alt='nxdd' style={{width: '100%'}} />
            <div><h2>REFER NEWSPAPERS</h2></div></Link>
          </div>
          </div>
          </div>
    
          

      

    )
};

export default Nav