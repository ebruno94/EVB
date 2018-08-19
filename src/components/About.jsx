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
        <style jsx global>{`
            h1 {
              text-align: center;
            }

            button {
              border: 2px solid black;
              color: black;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
            }

            button:hover{
              
            }

            .buttonContainer {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-column-gap: 100px;
              justify-items: center;
              margin-left: 100px;
              margin-right: 100px;
              margin-top: 25px;
              margin-bottom: 25px;
            }

            .container {
              display: block;
              margin-left: 100px;
              margin-right: 100px;
              border: 2px solid black;
              padding: 20px;
              border-radius: 25px;
            }


        `}</style>
        <div>
          <h1>ABOUT US</h1>
          <hr/>
          <div className='buttonContainer'>
            <button onClick={() => this.handleClick('who')}>Who We Are</button>
            <button onClick={() => this.handleClick('mission')}>Mission</button>
            <button onClick={() => this.handleClick('services')}>Services</button>
          </div>
          <hr/>
          {this.handleRenderComponent()}
        </div>
      </div>
    );
  }
}
