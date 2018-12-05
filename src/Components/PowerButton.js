import React from 'react';

export class PowerButton extends React.Component {

  render() {
    return(
     <label className="switch">
        <input type="checkbox" value='none' onClick={this.props.handleToggle}></input>
        <span class="slider round"></span>
     </label>
    )
 }
}