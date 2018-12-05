import React from 'react';

export class DrumOff extends React.Component{
  constructor(props) {
    super(props);
    this.state={drumList: [
      {key: 'Q'},{key: 'W'},{key: 'E'},{key: 'A'},{key: 'S'},{key: 'D'},{key: 'Z'},{key: 'X'},{key: 'C'}]}
  }
  
  createButtons(drum) { return(
    <button className='drum-pad button'>
    {drum.key}</button>
    )}
  
  render() {
    return (
    <div className='none drumPad'>
     {this.state.drumList.map(this.createButtons)}
    </div>
    )
  }
}