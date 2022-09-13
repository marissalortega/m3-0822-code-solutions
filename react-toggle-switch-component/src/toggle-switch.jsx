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
    let switchClass = '';
    let toggleClass = '';

    if (switchStatus === false) {
      switchClass = 'switch-on';
      toggleClass = 'toggle-on';
    } else {
      switchClass = 'switch-off';
      toggleClass = 'toggle-off';
    }

    return (
      <div onClick={this.handleClick}>
        <div className={switchClass}>
          <div className={toggleClass}></div>
        </div>
        <p>OFF</p>
      </div>
    );

  }
}

export default <ToggleSwitch />;
