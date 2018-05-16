import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Error404 from './Error404';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Portfolio from './Portfolio';
import Admin from './Admin';

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
    let newMasterInquiryList = Object.assign({}, this.state.masterInquiryList, {
      [newInquiry.id]: newInquiry
    });
    this.setState({masterInquiryList: newMasterInquiryList});
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
          <Route path='/contact' render={()=><Contact onNewInquirySubmission={this.handleInquirySubmission}/>} />
          <Route path='/admin' render={()=><Admin onAdminLogin={this.handleAdminLogin} adminLoggedIn={this.state.adminLoggedIn} inquiryList={this.state.masterInquiryList}/>} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
