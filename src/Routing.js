import {Router, Route,IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import {Provider} from  'mobx-react';

import App from './App';
import Home from './components/Home';
import Tmv2 from './components/Tmv2';
import Tmv3 from './components/Tmv3';
import Tmv2new from './components/Tmv2new';
import Cias from './components/Cias';
import Dtc from './components/Dtc';
import Login from './admin/components/Login';
import Admin from './components/Admin';
const   Routing = ()=>{
    return (
          <Router history={hashHistory}>
          <Route path={'/'} component={App}>
              <IndexRoute component={Home} />
              <Route path={'/tmv2'} component={Tmv2}></Route>
              <Route path={'/tmv3'} component={Tmv3}></Route>
              <Route path={'/tmv2_new'} component={Tmv2new}></Route>
              <Route path={'/cias'} component={Cias}></Route>
              <Route path={'/dtc'} component={Dtc}></Route>
              <Route path={'/login'} component={Login}></Route>
              <Route path={'/admin'} component={Admin}></Route>
          </Route>
          </Router>    
    );
  }
export default Routing;
