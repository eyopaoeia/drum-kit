import React from 'react';
import { Japanese } from './Japanese.js';
import { Moroccan } from './Moroccan.js';
import { Burundi } from './Burundi.js';
import { DrumOff } from './DrumOff.js';

export class Display extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {text: ''}
    this.setInnerText = this.setInnerText.bind(this);
    this.createButtons = this.createButtons.bind(this);
    this.onClick = this.onClick.bind(this);
    this.bangDrum = this.bangDrum.bind(this);
  }
  
  setInnerText(name) {
    this.setState({
      text: name
    })
  }
  
  createButtons(drum) { return(
    <button className='drum-pad button' value={drum.key} onClick={this.onClick.bind(this, drum.country)} id={drum.name}>
    <audio id={drum.key} data-key={drum.keyCode}
    src={drum.src} className='clip'/>{drum.key}</button>
    )}

  onClick(country, event) {
    var audio = document.getElementById(event.target.value);
    this.bangDrum(audio, country);    
  }
  
  bangDrum(audio, country) {
    var drumKits = {burundi:{Q:'Bongo Lo', W:'Bongo Hi', E:'Tambo', A:'Tambo Dum',S:'Tabla Lo',D:'Shekere',Z:'Wave Drum',X:'Solid Tabla',C:'Bend'},japan: {Q:'Big Taiko', W:'Medium Taiko', E:'Cymbal', A:'Daibyoshi',S:'Wood Block',D:'Okawa',Z:'Taiko',X:'Tsuzumi',C:'Shime'}, morocco: {Q:'Percussion', W:'Hiss', E:'Thud', A:'Quick Tap',S:'High Hit',D:'Mute Tap',Z:'Tuk',X:'Tak',C:'Low Bang'}};
    var drumKit = drumKits[country];  
    this.setInnerText(drumKit[audio.id]);
    audio.currentTime = 0;
    audio.play();
  }


  render() {
        if (this.props.country === 'japan') {
          return <div id="display" className=''>
                 <Japanese setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName'>{this.state.text}</p></div>  
        }
        else if(this.props.country === 'morocco') {
          return <div id="display" className='' >
                 <Moroccan setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName'>{this.state.text}</p></div>
        }
        else if(this.props.country === 'burundi'){
          return <div id="display" className='' >
                 <Burundi setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName'>{this.state.text}</p></div>
        }
      else {
        return <div id="display" className='' ><DrumOff /><p>{this.state.text}</p></div>
      }
      
  }
 }