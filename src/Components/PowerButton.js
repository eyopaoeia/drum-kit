import React from 'react';

export class PowerButton extends React.Component {

  /*power switch executes handleToggle from props on check/un-check*/
  render() {
    return(
    <div className='power-switch'>
    <p className='label'>POWER ON/OFF</p>
     <label className="switch">
        <input type="checkbox" value='none' onClick={this.props.handleToggle}></input>
        <span className="slider round"></span>
     </label>
    </div>
    )
 }
}