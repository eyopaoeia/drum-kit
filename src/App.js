import React from 'react';
import { Display } from './Components/Display.js';
import { PowerButton } from './Components/PowerButton.js'
import { DrumType } from './Components/DrumType.js'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      country: 'japan',
      prevCountry: '', 
      power: 'on',
      text: ''
    }
    this.handleCountry = this.handleCountry.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.setInnerText = this.setInnerText.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  } 


  /* set the country to whichever button is clicked */
  handleCountry(event) {
    this.setState({
      country: event.target.value,
      text: ''
    })

  }
  
  /* toggle power on/off and store the last active country in state*/
  handleToggle(event) {
    if (this.state.country === 'none') {
      let previous = this.state.prevCountry;
      this.setState({
        country: previous,
        prevCountry: 'japan',
        power: 'on'
      })
    }
    else {
       let previous = this.state.country;
        this.setState({
          country: 'none',
          prevCountry: previous,
          power: 'off',
          text: ''
        })

    }
    
  }


  /*set the innertext of the drumpad to whichever drum was hit*/
  setInnerText(name) {
    this.setState({
      text: name
    })
  }

  changeBackground(country) {
    let countryClass = `${country}-background`;
    document.body.className = countryClass;
  }

  render() {
    return (
      <div id="drum-machine">
        <Display country={this.state.country} text={this.state.text} setInnerText={this.setInnerText} changeBackground={this.changeBackground} />
        <div className='inputs'>
          <PowerButton handleToggle={this.handleToggle} />
          <DrumType handleCountry={this.handleCountry} power={this.state.power} country={this.state.country}/>
        </div>
      </div>
    )
  }
}

export default App;
