import React from 'react';

export class DrumType extends React.Component{
  
  render() {
    if (this.props.power === 'on') {
      return (
    <div className='drumType'>
      <button className='button-country japan-button' value='japan' onClick={this.props.handleCountry}>Japan</button>
      <button className='button-country burundi-button' value='burundi' onClick={this.props.handleCountry}>Burundi</button>
      <button className='button-country morocco-button' value='morocco' onClick={this.props.handleCountry}>Morocco</button>
    </div>
    )
  } 
  else {
    return (
  <div className='drumType'>
      <button className='button-country japan-button'>Japan</button>
      <button className='button-country burundi-button'>Burundi</button>
      <button className='button-country morocco-button'>Morocco</button>
    </div>
  )
}
}
}