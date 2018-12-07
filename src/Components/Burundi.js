import React from 'react';

export class Burundi extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state={country: 'burundi', drumList: [
      {country: 'burundi', name: 'bongoLo', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/23[kb]bongo%20lo.aif.mp3', key: 'Q', keyCode:'81'},
      {country: 'burundi', name: 'bongoHi', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/8[kb]bongo%20hi.aif.mp3', key: 'W', keyCode:'87'},
      {country: 'burundi', name: 'tamboTak', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/12[kb]tambo-tak.aif.mp3', key: 'E', keyCode:'69'},
      {country: 'burundi', name: 'tamboDum', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/14[kb]tambo-dum.aif.mp3', key: 'A', keyCode:'65'},
      {country: 'burundi', name: 'tablaLo', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/197[kb]lotabla.aif.mp3', key: 'S', keyCode:'83'},
      {country: 'burundi', name: 'shekere', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/116[kb]shekere1.aif.mp3', key: 'D', keyCode:'68'},
      {country: 'burundi', name: 'waveDrum', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/130[kb]wavedrum1.aif.mp3', key: 'Z', keyCode:'90'},
      {country: 'burundi', name: 'solidTabla', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/45[kb]solid-tabla-hit.aif.mp3', key: 'X', keyCode:'88'},
      {country: 'burundi', name: 'bend', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/percussion%20african%20and%20eastern/167[kb]bendy.aif.mp3', key: 'C', keyCode:'67'}]}
  }
  
  handlePress(country, event) {

  	const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
  	if (keyCodes.includes(event.keyCode)) {
  		this.props.addPressAnimation(event);
    	var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    	this.props.bangDrum(audio, country);
	}
  }
  
  componentWillMount() {
    document.addEventListener('keydown', this.handlePress.bind(this, this.state.country));
  }

  /* listen for the end of the key style transition and remove it*/
  componentDidMount() {
    const keys=document.querySelectorAll('.drum-key');
    keys.forEach(key => key.addEventListener('transitionend', this.props.removeTransition))
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress);
  }
  
  /*use the country-specific drum list in state with the createButtons
  function passed in props to render drumpad keys*/
  render() {
    return (
    <div className='burundi-pad drumPad'>
     {this.state.drumList.map(this.props.createButtons)}
    </div>
    )
  }
}