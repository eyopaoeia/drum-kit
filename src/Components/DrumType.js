import React from 'react';

export class DrumType extends React.Component{
  
  /*if the power is on render the active buttons, else render inactive buttons*/
  render() {
    if (this.props.power === 'on') {
      return (
    <div className='drumType'>
    <div className='drumNames'>
      <button className='button-country japan-button' value='japan' onClick={this.props.handleCountry}></button>
      <button className='button-country burundi-button' value='burundi' onClick={this.props.handleCountry}></button>
      <button className='button-country morocco-button' value='morocco' onClick={this.props.handleCountry}></button>
     </div>
      <p className={'display-'+this.props.country}>{this.props.country.toUpperCase()}</p>
    </div>
    )
  } 
  else {
    return (
  <div className='drumType'>
  <div className='drumNames'>
      	<button className='button-country japan-button'></button>
      	<button className='button-country burundi-button'></button>
      	<button className='button-country morocco-button'></button>
      </div>
      <p className='display-none'>{this.props.power.toUpperCase()}</p>
    </div>
  )
}
}
}