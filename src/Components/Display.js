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
  
  /* removes the transition styling when called from children*/
  removeTransition(event) {
    event.target.classList.remove('pressed');
    event.target.classList.remove('clicked');
  }

  /*creates drumkit keys based on drum values from child's state*/
  createButtons(drum) { return(
    <button className={`drum-key ${drum.country}`} value={drum.key} onClick={this.onClick.bind(this, drum.country)} id={drum.name}>
    <audio id={drum.key} data-key={drum.keyCode}
    src={drum.src} className='clip'/>{drum.key}</button>
    )}

  /*adds transition styling and gets appropriate audio when a key 
  is clicked*/
  onClick(country, event) {
    this.addClickAnimation(event);
    var audio = document.getElementById(event.target.value);
    this.bangDrum(audio, country);    
  }
  
  /*play the audio passed by onClick/handlePress and set inner text to 
  appropriate drum name*/
  bangDrum(audio, country) {
    var drumKits = {burundi:{Q:'Bongo Lo', W:'Bongo Hi', E:'Tambo', A:'Tambo Dum',S:'Tabla Lo',D:'Shekere',Z:'Wave Drum',X:'Solid Tabla',C:'Bend'},japan: {Q:'Big Taiko', W:'Medium Taiko', E:'Cymbal', A:'Daibyoshi',S:'Wood Block',D:'Okawa',Z:'Taiko',X:'Tsuzumi',C:'Shime'}, morocco: {Q:'Percussion', W:'Hiss', E:'Thud', A:'Quick Tap',S:'High Hit',D:'Mute Tap',Z:'Tuk',X:'Tak',C:'Low Bang'}};
    var drumKit = drumKits[country];  
    this.props.setInnerText(drumKit[audio.id]);
    audio.currentTime = 0;
    audio.play();
  }

  /*add transition styling to key that was clicked*/
  addClickAnimation(event) {
    var key = document.querySelector(`button[value='${event.target.value}']`)
    key.classList.add('clicked');
  }

  /*add transition styling to key that was pressed*/
  addPressAnimation(event) {
    let code = event.keyCode;
    let keyValues = {81: 'Q', 87: 'W', 69:'E', 65:'A', 83:'S', 68:'D', 90:'Z', 88:'X', 67:'C'};
    let key = document.querySelector(`button[value='${keyValues[code]}']`);
    key.classList.add('pressed');
  }



  render() {
        this.props.changeBackground(this.props.country);
        if (this.props.country === 'japan') {
          return <div id="display" className='left-side'>
                 <Japanese addPressAnimation={this.addPressAnimation} removeTransition={this.removeTransition} setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName japan-drumName'>{this.props.text}</p></div>  
        }
        else if(this.props.country === 'morocco') {
          return <div id="display" className='left-side' >
                 <Moroccan addPressAnimation={this.addPressAnimation} removeTransition={this.removeTransition} setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName morocco-drumName'>{this.props.text}</p></div>
        }
        else if(this.props.country === 'burundi'){
          return <div id="display" className='left-side' >
                 <Burundi addPressAnimation={this.addPressAnimation} removeTransition={this.removeTransition} setInnerText={this.setInnerText} createButtons={this.createButtons} bangDrum={this.bangDrum}/>
                 <p className='drumName burundi-drumName'>{this.props.text}</p></div>
        }
      else {
        return <div id="display" className='' ><DrumOff /><p className='drumName'>{this.props.text}</p></div>
      }
      
  }
 }