import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Error404 from './Error404';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import Admin from './Admin';

import {v4} from 'uuid';

import { Switch, Route } from 'react-router-dom';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      masterInquiryList: {},
      masterProjectList: {},
      adminLoggedIn: false
    };

    this.handleInquirySubmission = this.handleInquirySubmission.bind(this);
    this.handleAdminLogin = this.handleAdminLogin.bind(this);
  }

  handleInquirySubmission(newInquiry){
    let newInquiryId = v4();
    let newMasterInquryList = Object.assign({}, this.state.masterInquiryList, {
      [newInquiryId]: newInquiry
    });
    this.setState({masterInquiryList: newMasterInquryList});
  }

  handleAdminLogin(credentialsMet){
    if (credentialsMet){
      this.setState({adminLoggedIn: true});
    }
  }

  handleAdminLogout(){
    this.setState({adminLoggedIn: false});
  }

  render(){
    return(
      <div>
        {(window.location.hash !== '#/')
          ? <Header onAdminLogin={this.handleAdminLogin} onAdminLogout={this.handleAdminLogout} adminLoggedIn={this.state.adminLoggedIn}/>
          : <span></span>
        }
        <Switch>
          <Route exact path='/' render={()=><Home/>} />
          <Route path='/portfolio' render={()=><Portfolio projectList={this.state.masterProjectList}/>} />
          <Route path='/about' render={()=><About/>} />
          <Route path='/contact' render={()=><Contact onNewInquirySubmission={this.handleInquirySubmission}/>} />
          <Route path='/admin' render={()=><Admin adminLoggedIn={this.state.adminLoggedIn}/>} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
