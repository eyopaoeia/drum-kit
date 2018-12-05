import React from 'react';
import { Japanese } from './Japanese.js';
import { Moroccan } from './Moroccan.js';
import { Burundi } from './Burundi.js';
import { DrumOff } from './DrumOff.js';

export class Display extends React.Component { 
  constructor(props) {
    super(props);
    this.createButtons = this.createButtons.bind(this);
    this.onClick = this.onClick.bind(this);
    this.bangDrum = this.bangDrum.bind(this);
    this.removeTransition = this.removeTransition.bind(this);
    this.addClickAnimation = this.addClickAnimation.bind(this);
    this.addPressAnimation = this.addPressAnimation.bind(this);
  }
  
  removeTransition(event) {
    event.target.classList.remove('pressed');
    event.target.classList.remove('clicked');
  }

  createButtons(drum) { return(
    <button className={`drum-key ${drum.country}`} value={drum.key} onClick={this.onClick.bind(this, drum.country)} id={drum.name}>
    <audio id={drum.key} data-key={drum.keyCode}
    src={drum.src} className='clip'/>{drum.key}</button>
    )}

  onClick(country, event) {
    this.addClickAnimation(event);
    var audio = document.getElementById(event.target.value);
    this.bangDrum(audio, country);    
  }
  
  bangDrum(audio, country) {
    var drumKits = {burundi:{Q:'Bongo Lo', W:'Bongo Hi', E:'Tambo', A:'Tambo Dum',S:'Tabla Lo',D:'Shekere',Z:'Wave Drum',X:'Solid Tabla',C:'Bend'},japan: {Q:'Big Taiko', W:'Medium Taiko', E:'Cymbal', A:'Daibyoshi',S:'Wood Block',D:'Okawa',Z:'Taiko',X:'Tsuzumi',C:'Shime'}, morocco: {Q:'Percussion', W:'Hiss', E:'Thud', A:'Quick Tap',S:'High Hit',D:'Mute Tap',Z:'Tuk',X:'Tak',C:'Low Bang'}};
    var drumKit = drumKits[country];  
    this.props.setInnerText(drumKit[audio.id]);
    audio.currentTime = 0;
    audio.play();
  }

  addClickAnimation(event) {
    var key = document.querySelector(`button[value='${event.target.value}']`)
    key.classList.add('clicked');
  }

  addPressAnimation(event) {
    let code = event.keyCode;
    let keyValues = {81: 'Q', 87: 'W', 69:'E', 65:'A', 83:'S', 68:'D', 90:'Z', 88:'X', 67:'C'};
    let key = document.querySelector(`button[value='${keyValues[code]}']`);
    key.classList.add('pressed');
  }



  render() {
        if (this.props.country === 'japan') {
          return <div id="display" className=''>
                 <Japanese addPressAnimation={this.addPressAnimation} removeTransition={this.removeTransition} setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName japan-drumName'>{this.props.text}</p></div>  
        }
        else if(this.props.country === 'morocco') {
          return <div id="display" className='' >
                 <Moroccan addPressAnimation={this.addPressAnimation} removeTransition={this.removeTransition} setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName morocco-drumName'>{this.props.text}</p></div>
        }
        else if(this.props.country === 'burundi'){
          return <div id="display" className='' >
                 <Burundi addPressAnimation={this.addPressAnimation} removeTransition={this.removeTransition} setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName burundi-drumName'>{this.props.text}</p></div>
        }
      else {
        return <div id="display" className='' ><DrumOff /><p className='drumName'>{this.props.text}</p></div>
      }
      
  }
 }