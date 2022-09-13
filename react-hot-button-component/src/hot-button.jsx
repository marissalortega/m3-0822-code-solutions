import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const counter = this.state.count;
    let btnClass = '';

    if (counter >= 3 && counter < 6) {
      btnClass = 'dark-purple';
    } else if (counter >= 6 && counter < 9) {
      btnClass = 'purple';
    } else if (counter >= 9 && counter < 12) {
      btnClass = 'red';
    } else if (counter >= 12 && counter < 15) {
      btnClass = 'orange';
    } else if (counter >= 15 && counter < 18) {
      btnClass = 'yellow';
    } else if (counter >= 18) {
      btnClass = 'white';
    }

    return <button onClick={this.handleClick} className={btnClass}>Hot Button</button>;
  }
}

export default <HotButton />;
