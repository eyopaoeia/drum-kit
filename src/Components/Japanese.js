import React from 'react';

export class Japanese extends React.Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      country: 'japan',
      drumList: [
        {
          country: 'japan',
          name: 'bigTaiko',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/159[kb]big_taiko.aif.mp3',
          key: 'Q',
          keyCode: '81',
        },
        {
          country: 'japan',
          name: 'medTaiko',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/28[kb]taiko_2.aif.mp3',
          key: 'W',
          keyCode: '87',
        },
        {
          country: 'japan',
          name: 'cymbal',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/120[kb]nipon_cymbal_1.aif.mp3',
          key: 'E',
          keyCode: '69',
        },
        {
          country: 'japan',
          name: 'daibyoshi',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/63[kb]daibyoshi-A1.wav.mp3',
          key: 'A',
          keyCode: '65',
        },
        {
          country: 'japan',
          name: 'woodBlock',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/30[kb]nipon_wood_block.aif.mp3',
          key: 'S',
          keyCode: '83',
        },
        {
          country: 'japan',
          name: 'okawa',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/30[kb]nipon_wood_block.aif.mp3',
          key: 'D',
          keyCode: '68',
        },
        {
          country: 'japan',
          name: 'taiko',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/256[kb]hirado-A1.wav.mp3',
          key: 'Z',
          keyCode: '90',
        },
        {
          country: 'japan',
          name: 'tsuzumi',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/31[kb]tsuzumi.aif.mp3',
          key: 'X',
          keyCode: '88',
        },
        {
          country: 'japan',
          name: 'shime',
          src:
            'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/ETHNIC%20and%20WORLD%20PERCUSSION/Japanese%20Drums/60[kb]shime_hi_2.aif.mp3',
          key: 'C',
          keyCode: '67',
        },
      ],
    };
  }

  /*find which key was pressed and assign the appropriate audio*/
  handlePress(country, event) {
    const keyCodes = [81, 87, 88, 69, 65, 83, 68, 90, 88, 67];
    if (keyCodes.includes(event.keyCode)) {
      this.props.addPressAnimation(event);
      var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      this.props.bangDrum(audio, country);
    }
  }

  componentWillMount() {
    document.addEventListener(
      'keydown',
      this.handlePress.bind(this, this.state.country),
    );
  }

  /* listen for the end of the key style transition and remove it*/
  componentDidMount() {
    const keys = document.querySelectorAll('.drum-key');
    keys.forEach(key =>
      key.addEventListener('transitionend', this.props.removeTransition),
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress);
  }

  /*use the country-specific drum list in state with the createButtons
  function passed in props to render drumpad keys*/
  render() {
    return (
      <div className="japan-pad drumPad">
        {this.state.drumList.map(this.props.createButtons)}
      </div>
    );
  }
}
