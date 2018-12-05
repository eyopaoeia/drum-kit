import React from 'react';

export class Moroccan extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress=this.handlePress.bind(this);
    this.state={country: 'morocco', drumList: [
      {country: 'morocco', name: 'percussion', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/26[kb]arabicperc1-6.wav.mp3', key: 'Q', keyCode: '81'},
      {country: 'morocco', name: 'hiss', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/74[kb]arabicperc1-11.wav.mp3', key: 'W', keyCode:'87'},
      {country: 'morocco', name: 'thud', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/70[kb]arabicperc1.wav.mp3', key: 'E', keyCode:'69'},
      {country: 'morocco', name: 'quickTap', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/17[kb]arabicperc1-27.wav.mp3', key: 'A', keyCode:'65'},
      {country: 'morocco', name: 'highHit', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%203/76[kb]C1000-4.wav.mp3', key: 'S', keyCode:'83'},
      {country: 'morocco', name: 'muteTap', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/9[kb]arabicperc1-36.wav.mp3', key: 'D', keyCode:'68'},
      {country: 'morocco', name: 'tuk', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/28[kb]arabicperc1-9.wav.mp3', key: 'Z', keyCode:'90'},
      {country: 'morocco', name: 'tak', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/26[kb]arabicperc1-6.wav.mp3', key: 'X', keyCode:'88'},
      {country: 'morocco', name: 'lowBang', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Arabic%20Percussion%20Kit%201/133[kb]arabicperc1-55.wav.mp3', key: 'C', keyCode:'67'}]}
  }
  
  componentWillMount() {
    document.addEventListener('keydown', this.handlePress.bind(this, this.state.country));
  }
  
  componentDidMount() {
    const keys=document.querySelectorAll('.drum-key');
    keys.forEach(key => key.addEventListener('transitionend', this.props.removeTransition))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress);
  }

  handlePress(country, event) {
  	const keyCodes = [81, 87, 88, 69, 65, 83, 68, 90, 88, 67];
  	if (keyCodes.includes(event.keyCode)) {
    	var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    	console.log(audio);
    	this.props.bangDrum(audio, country);
	}
  }
  
  render() {
    return (
    <div className='morocco-pad drumPad'>
      {this.state.drumList.map(this.props.createButtons)}
    </div>
    )
  }
}