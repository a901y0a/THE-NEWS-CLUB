import React from 'react';
//import {Link} from "react-router-dom";
//import ResponsiveAppBar from './components/nav';
import Form from './components/form';
import Register from './register'
import Nav from './navi';
import Paper from './paper';
import Last from './last';


import {Route,Routes} from 'react-router-dom';

function App() {
  return(
    <>

      <Routes>
        <Route  exact path='/' element={<Form/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/navi' element={<Nav/>}/>
        <Route path='/paper' element={<Paper/>}/>
<Route path='/last' element={<Last/>}/>
      </Routes>
    </>
  );
}

export default App;
