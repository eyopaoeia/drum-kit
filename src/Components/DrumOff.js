import React from 'react';

export class DrumOff extends React.Component{
  constructor(props) {
    super(props);
    this.state={drumList: [
      {key: 'Q'},{key: 'W'},{key: 'E'},{key: 'A'},{key: 'S'},{key: 'D'},{key: 'Z'},{key: 'X'},{key: 'C'}]}
  }
  
  /*create dummy keypad keys*/
  createButtons(drum) { return(
    <button className='drum-key-off drum-key'>
    {drum.key}</button>
    )}
  
  render() {
    return (
    <div className='none-pad drumPad'>
     {this.state.drumList.map(this.createButtons)}
    </div>
    )
  }
}