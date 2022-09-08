import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchStatus: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ switchStatus: !this.state.switchStatus });
  }

  render() {
    const switchStatus = this.state.switchStatus;
    if (switchStatus === false) {
      return (
        <div onClick={this.handleClick}>
          <div className="switch-on">
            <div className="toggle-on"></div>
          </div>
          <p>ON</p>
        </div>
      );
    } else if (switchStatus === true) {
      return (
    <div onClick={this.handleClick}>
      <div className="switch-off">
          <div className="toggle-off"></div>
      </div>
      <p>OFF</p>
    </div>
      );
    }
  }

}

export default <ToggleSwitch />;
