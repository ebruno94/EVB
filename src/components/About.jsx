import React from 'react';
import Services from './Services';
import Who from './Who';
import Mission from './Mission';

export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
      clicked: 'who'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRenderComponent = this.handleRenderComponent.bind(this);
  }

  handleClick(component){
    this.setState({clicked: component});
  }

  handleRenderComponent(){
    if (this.state.clicked === 'who'){
      return <Who/>;
    } else if (this.state.clicked === 'mission'){
      return <Mission/>;
    } else {
      return <Services/>;
    }
  }

  render(){
    return(
      <div>
        <h1>ABOUT US</h1>
        <button onClick={() => this.handleClick('who')}>Who We Are</button>
        <button onClick={() => this.handleClick('mission')}>Mission</button>
        <button onClick={() => this.handleClick('services')}>Services</button>
        {this.handleRenderComponent()}
      </div>
    );
  }
}
