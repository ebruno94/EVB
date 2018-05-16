import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Error404 from './Error404';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import Admin from './Admin';

import { Switch, Route, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      masterProjectList: {},
      adminLoggedIn: false
    };
    this.handleAdminLogin = this.handleAdminLogin.bind(this);
  }

  handleAdminLogin(credentialsMet){
    this.setState({adminLoggedIn: credentialsMet});
  }

  render(){
    return(
      <div>
        {(window.location.hash !== '#/')
          ? <Header onAdminLogout={this.handleAdminLogin} adminLoggedIn={this.state.adminLoggedIn}/>
          : <span></span>
        }
        <Switch>
          <Route exact path='/' render={()=><Home/>} />
          <Route path='/portfolio' render={()=><Portfolio projectList={this.state.masterProjectList}/>} />
          <Route path='/about' render={()=><About/>} />
          <Route path='/contact' render={()=><Contact/>} />
          <Route path='/admin' render={()=><Admin onAdminLogin={this.handleAdminLogin} adminLoggedIn={this.state.adminLoggedIn} inquiryList={this.props.inquiryList}/>} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  inquiryList: PropTypes.object
};

const mapStateToProps = state =>{
  return {
    inquiryList: state.inquiryList
  };
};

export default withRouter(connect(mapStateToProps)(App));
