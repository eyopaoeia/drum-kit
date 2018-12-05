import React from 'react';

export class PowerButton extends React.Component {

  render() {
    return(
    <div className='power-switch'>
    <p className='label'>Power</p>
     <label className="switch">
        <input type="checkbox" value='none' onClick={this.props.handleToggle}></input>
        <span className="slider round"></span>
     </label>
    </div>
    )
 }
}