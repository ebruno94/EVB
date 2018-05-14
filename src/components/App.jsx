import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Error404 from './Error404';
import Home from './Home';

import { Switch, Route } from 'react-router-dom';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Home/>} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
